using System.Linq;

using Build.Extensions;

using Cake.Common.Diagnostics;
using Cake.Common.IO;
using Cake.Common.Solution;
using Cake.Common.Tools.Command;
using Cake.Core;
using Cake.Core.IO;
using Cake.Frosting;

using Path = System.IO.Path;

namespace Build.Tasks;

public class BuildTeachingSlidesTask : FrostingTask<BuildContext>
{
  public override void Run(BuildContext context)
  {
    context.Information("*** Building Teaching Slides...");
    SolutionProject slidesProject =
      context.Solution.Projects.FirstOrDefault(project => project.Name == "Teaching.Slides")
      ?? throw new CakeException("Teaching.Slides project not found in the solution.");

    CommandSettings pnpmCommand = slidesProject.GetPnpmCommand();
    FilePathCollection days = context.GetFiles(
      $"{slidesProject.Path.GetDirectory()}/*/slides-day-*.md"
    );

    foreach (FilePath day in days)
    {
      context.Information($"*** Processing {day.FullPath}...");
      string year =
        Path.GetFileName(Path.GetDirectoryName(day.FullPath))
        ?? throw new CakeException($"Could not determine year from path '{day.FullPath}'.");
      string dayName = day.GetFilenameWithoutExtension()
        .ToString()
        .Replace("slides-", string.Empty);

      DirectoryPath distDir = slidesProject.Path.GetDirectory().Combine(year).Combine("dist");
      context.EnsureDirectoryDoesNotExist(distDir);
      context.CreateDirectory(distDir);

      context.Command(pnpmCommand, $"run build-{year}-{dayName}");
      DirectoryPath outputDir = context
        .AppPublishDir.Combine("nds-web-engineering")
        .Combine(year)
        .Combine(dayName)
        .Combine("slidev");
      context.EnsureDirectoryDoesNotExist(outputDir);
      context.EnsureDirectoryExists(outputDir);
      context.CopyDirectory(distDir, outputDir);
    }

    context.CopyDirectory(
      slidesProject.Path.GetDirectory().Combine("public"),
      context.AppPublishDir
    );
  }
}
