using System.Linq;

using Cake.Common.Diagnostics;
using Cake.Common.IO;
using Cake.Common.Solution;
using Cake.Common.Tools.Command;
using Cake.Core;
using Cake.Core.IO;
using Cake.Frosting;

namespace Build.Tasks;

public class BuildTeachingNdsWeg2026Task : FrostingTask<BuildContext>
{
  public override void Run(BuildContext context)
  {
    context.Information("*** Building NDS Web Engineering 2026 Slides...");
    SolutionProject slidesProject =
      context.Solution.Projects.FirstOrDefault(project => project.Name == "Teaching.Slides")
      ?? throw new CakeException("Teaching.Slides project not found in the solution.");

    DirectoryPath ndsWeg2026ProjectDir = slidesProject
      .Path.GetDirectory()
      .Combine("../abbts-nds-weg-2026");
    CommandSettings pnpmCommand = new CommandSettings
    {
      ToolName = "pnpm",
      ToolExecutableNames = ["pnpm", "pnpm.cmd", "pnpm.bat", "pnpm.ps1", "pnpm.exe"],
      WorkingDirectory = ndsWeg2026ProjectDir,
    };

    FilePathCollection days = context.GetFiles($"{ndsWeg2026ProjectDir}/slides-day-*.md");

    foreach (FilePath day in days)
    {
      context.Information($"*** Processing {day.FullPath}...");
      string dayName = day.GetFilenameWithoutExtension()
        .ToString()
        .Replace("slides-", string.Empty);

      context.Command(pnpmCommand, $"run build-{dayName}");
      DirectoryPath distDir = ndsWeg2026ProjectDir.Combine("dist");
      DirectoryPath outputDir = context
        .AppPublishDir.Combine("nds-web-engineering")
        .Combine("2026")
        .Combine(dayName)
        .Combine("slidev");
      context.EnsureDirectoryDoesNotExist(outputDir);
      context.EnsureDirectoryExists(outputDir);
      context.CopyDirectory(distDir, outputDir);
    }

    context.CopyDirectory(ndsWeg2026ProjectDir.Combine("public"), context.AppPublishDir);
  }
}
