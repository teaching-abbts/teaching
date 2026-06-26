using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

using Cake.Common.Diagnostics;
using Cake.Common.IO;
using Cake.Common.Solution;
using Cake.Common.Tools.Command;
using Cake.Core;
using Cake.Core.IO;
using Cake.Frosting;

namespace Build.Tasks;

public class BuildTeachingNdsWegTask : FrostingTask<BuildContext>
{
  private sealed record ManifestYear(int Year, List<int> Days);

  private sealed record ManifestRoot(string CoursePath, List<ManifestYear> Years);

  public override void Run(BuildContext context)
  {
    context.Information("*** Building NDS Web Engineering slides...");
    SolutionProject slidesProject =
      context.Solution.Projects.FirstOrDefault(project => project.Name == "Teaching.Slides")
      ?? throw new CakeException("Teaching.Slides project not found in the solution.");

    DirectoryPath slidesProjectDir = slidesProject
      .Path.GetDirectory()
      .Combine("../Teaching.Slides");
    CommandSettings pnpmCommand = new CommandSettings
    {
      ToolName = "pnpm",
      ToolExecutableNames = ["pnpm", "pnpm.cmd", "pnpm.bat", "pnpm.ps1", "pnpm.exe"],
      WorkingDirectory = slidesProjectDir,
    };

    Dictionary<int, HashSet<int>> discoveredDaysByYear = [];

    FilePathCollection slideFiles = context.GetFiles($"{slidesProjectDir}/slides-*-day-*.md");
    IEnumerable<IGrouping<string, FilePath>> slideFilesByYear = slideFiles
      .GroupBy(filePath => ExtractYearInfix(filePath.GetFilenameWithoutExtension().ToString()))
      .OrderByDescending(grouping => grouping.Key);

    foreach (IGrouping<string, FilePath> yearlySlideFiles in slideFilesByYear)
    {
      ProcessSlideFiles(
        context,
        pnpmCommand,
        slidesProjectDir,
        yearlySlideFiles,
        yearlySlideFiles.Key,
        discoveredDaysByYear
      );
    }

    WriteManifest(context, discoveredDaysByYear);

    context.CopyDirectory(slidesProjectDir.Combine("public"), context.AppPublishDir);
  }

  private void ProcessSlideFiles(
    BuildContext context,
    CommandSettings pnpmCommand,
    DirectoryPath projectDir,
    IEnumerable<FilePath> slideFiles,
    string yearInfix,
    Dictionary<int, HashSet<int>> discoveredDaysByYear
  )
  {
    int year = int.Parse(yearInfix);

    foreach (FilePath slideFile in slideFiles)
    {
      context.Information($"*** Processing {slideFile.FullPath}...");
      string filename = slideFile.GetFilenameWithoutExtension().ToString();

      // Extract day name: slides-<year>-day-1 -> day-1
      string dayName = filename.Replace($"slides-{yearInfix}-", string.Empty);
      int dayNumber = ParseDayNumber(dayName);
      TrackDiscoveredDay(discoveredDaysByYear, year, dayNumber);

      context.Command(pnpmCommand, $"run build-{yearInfix}-{dayName}");
      DirectoryPath distDir = projectDir.Combine("dist");
      DirectoryPath outputDir = context
        .AppPublishDir.Combine("nds-web-engineering")
        .Combine(yearInfix)
        .Combine(dayName)
        .Combine("slidev");
      context.EnsureDirectoryDoesNotExist(outputDir);
      context.EnsureDirectoryExists(outputDir);
      context.CopyDirectory(distDir, outputDir);
    }
  }

  private static string ExtractYearInfix(string filename)
  {
    if (!filename.StartsWith("slides-", StringComparison.Ordinal))
    {
      throw new CakeException($"Unsupported slide filename format '{filename}'.");
    }

    int yearStart = "slides-".Length;
    int yearEnd = filename.IndexOf("-day-", StringComparison.Ordinal);
    if (yearEnd <= yearStart)
    {
      throw new CakeException($"Unsupported slide filename format '{filename}'.");
    }

    return filename[yearStart..yearEnd];
  }

  private static int ParseDayNumber(string dayName)
  {
    if (!dayName.StartsWith("day-"))
    {
      throw new CakeException($"Unsupported day naming format '{dayName}'.");
    }

    string suffix = dayName["day-".Length..];
    if (!int.TryParse(suffix, out int dayNumber))
    {
      throw new CakeException($"Could not parse day number from '{dayName}'.");
    }

    return dayNumber;
  }

  private static void TrackDiscoveredDay(
    Dictionary<int, HashSet<int>> discoveredDaysByYear,
    int year,
    int dayNumber
  )
  {
    if (!discoveredDaysByYear.TryGetValue(year, out HashSet<int> days))
    {
      days = [];
      discoveredDaysByYear[year] = days;
    }

    days.Add(dayNumber);
  }

  private static void WriteManifest(
    BuildContext context,
    Dictionary<int, HashSet<int>> discoveredDaysByYear
  )
  {
    List<ManifestYear> years = discoveredDaysByYear
      .OrderByDescending(entry => entry.Key)
      .Select(entry => new ManifestYear(entry.Key, [.. entry.Value.OrderByDescending(day => day)]))
      .ToList();

    ManifestRoot manifest = new("/nds-web-engineering", years);
    string manifestJson = JsonSerializer.Serialize(
      manifest,
      new JsonSerializerOptions { WriteIndented = true }
    );

    DirectoryPath manifestDirectory = context.AppPublishDir.Combine("nds-web-engineering");
    context.EnsureDirectoryExists(manifestDirectory);

    FilePath manifestFile = manifestDirectory.CombineWithFilePath("manifest.json");
    context.Information($"*** Writing course manifest to {manifestFile.FullPath}...");
    File.WriteAllText(manifestFile.FullPath, manifestJson);
  }
}
