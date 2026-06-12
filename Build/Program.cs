using Build.Tasks;

using Cake.Common.IO;
using Cake.Common.Solution;
using Cake.Core;
using Cake.Core.IO;
using Cake.Frosting;

namespace Build;

public static class Program
{
  public static int Main(string[] args)
  {
    return new CakeHost().UseContext<BuildContext>().Run(args);
  }
}

public class BuildContext : FrostingContext
{
  public DirectoryPath ArtifactsDir { get; }
  public SolutionParserResult Solution { get; }

  public BuildContext(ICakeContext context)
    : base(context)
  {
    Solution = context.ParseSolution(context.File("../teaching.sln"));
    ArtifactsDir = context.Directory("../.artifacts");
  }
}

[TaskName("Default")]
[IsDependentOn(typeof(BuildTeachingAppTask))]
[IsDependentOn(typeof(BuildTeachingSlidesTask))]
public class DefaultTask : FrostingTask { }
