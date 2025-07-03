using System.Linq;

using Build.Extensions;

using Cake.Common.Diagnostics;
using Cake.Common.IO;
using Cake.Common.Solution;
using Cake.Common.Tools.Command;
using Cake.Core;
using Cake.Core.IO;
using Cake.Frosting;

namespace Build.Tasks;

public class BuildTeachingSlidesTask : FrostingTask<BuildContext>
{
  public override void Run(BuildContext context)
  {
    context.Information("*** Building Teaching Slides...");
    SolutionProject slidesProject =
      context.Solution.Projects.FirstOrDefault(project => project.Name == "Teaching.Slides")
      ?? throw new CakeException("Teaching.Slides project not found in the solution.");
    var artifactsDir = slidesProject.Path.GetDirectory().Combine(".artifacts");

    CommandSettings pnpmCommand = slidesProject.GetPnpmCommand();
    FilePathCollection days = context.GetFiles($"{slidesProject.Path.GetDirectory()}/slides-day-*.md");

    foreach (FilePath day in days)
    {
      context.Information($"*** Processing {day.FullPath}...");
      string dayName = day.GetFilenameWithoutExtension().ToString().Replace("slides-", string.Empty);

      context.Command(pnpmCommand, $"run build-{dayName}");
      DirectoryPath distDir = slidesProject.Path.GetDirectory().Combine("dist");
      DirectoryPath outputDir = artifactsDir.Combine("nds-web-engineering").Combine(dayName).Combine("slides");
      context.EnsureDirectoryDoesNotExist(outputDir);
      context.EnsureDirectoryExists(outputDir);
      context.CopyDirectory(distDir, outputDir);
    }

    context.CopyDirectory(slidesProject.Path.GetDirectory().Combine("public"), artifactsDir);
  }
}
