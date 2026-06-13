using System.IO;
using System.IO.Compression;

using Cake.Common.Diagnostics;
using Cake.Core;
using Cake.Frosting;

namespace Build.Tasks;

[IsDependentOn(typeof(BuildTeachingAppTask))]
[IsDependentOn(typeof(BuildTeachingSlidesTask))]
[IsDependentOn(typeof(BuildTeachingNdsWeg2026Task))]
public class PackageWebArtifactsTask : FrostingTask<BuildContext>
{
  public override void Run(BuildContext context)
  {
    context.Information($"*** Creating web archive {context.WebArchivePath.FullPath}...");

    if (File.Exists(context.WebArchivePath.FullPath))
    {
      File.Delete(context.WebArchivePath.FullPath);
    }

    ZipFile.CreateFromDirectory(
      context.AppPublishDir.FullPath,
      context.WebArchivePath.FullPath,
      CompressionLevel.Optimal,
      includeBaseDirectory: false
    );
  }
}
