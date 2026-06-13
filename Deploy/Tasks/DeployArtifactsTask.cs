using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;

using Cake.Common.Diagnostics;
using Cake.Common.IO;
using Cake.Core;
using Cake.Core.IO;
using Cake.Frosting;

using Path = System.IO.Path;

namespace Deploy.Tasks;

public class DeployArtifactsTask : FrostingTask<DeployContext>
{
  private static readonly HashSet<string> TargetRootWhitelist = new(
    [".git", ".nojekyll"],
    StringComparer.OrdinalIgnoreCase
  );

  public override void Run(DeployContext context)
  {
    if (context.TargetPath is null)
    {
      throw new CakeException("The TargetPath argument is required.");
    }

    if (!Directory.Exists(context.WebOutputDir.FullPath))
    {
      throw new CakeException(
        $"Web output directory not found: '{context.WebOutputDir.FullPath}'."
      );
    }

    context.Information($"*** Creating web archive {context.WebArchivePath.FullPath}...");

    if (File.Exists(context.WebArchivePath.FullPath))
    {
      File.Delete(context.WebArchivePath.FullPath);
    }

    ZipFile.CreateFromDirectory(
      context.WebOutputDir.FullPath,
      context.WebArchivePath.FullPath,
      CompressionLevel.Optimal,
      includeBaseDirectory: false
    );

    context.Information($"*** Deploying artifacts to {context.TargetPath.FullPath}...");
    context.EnsureDirectoryExists(context.TargetPath);
    CleanTargetDirectory(context.TargetPath);
    SyncArtifacts(context, context.ArtifactsDir, context.TargetPath);
  }

  private static void CleanTargetDirectory(DirectoryPath targetDir)
  {
    foreach (string entryPath in Directory.EnumerateFileSystemEntries(targetDir.FullPath))
    {
      string entryName = Path.GetFileName(entryPath);

      if (TargetRootWhitelist.Contains(entryName))
      {
        continue;
      }

      if (Directory.Exists(entryPath))
      {
        Directory.Delete(entryPath, recursive: true);
      }
      else
      {
        File.Delete(entryPath);
      }
    }
  }

  private static void SyncArtifacts(
    DeployContext context,
    DirectoryPath sourceDir,
    DirectoryPath targetDir
  )
  {
    foreach (string entryPath in Directory.EnumerateFileSystemEntries(sourceDir.FullPath))
    {
      string entryName = Path.GetFileName(entryPath);
      string destinationPath = Path.Combine(targetDir.FullPath, entryName);

      if (Directory.Exists(entryPath))
      {
        DirectoryPath destinationDir = context.Directory(destinationPath);
        context.EnsureDirectoryExists(destinationDir);
        context.CopyDirectory(context.Directory(entryPath), destinationDir);
      }
      else
      {
        File.Copy(entryPath, destinationPath, overwrite: true);
      }
    }
  }
}
