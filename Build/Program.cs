using Build.Tasks;

using Cake.Common.IO;
using Cake.Common.Solution;
using Cake.Common.Tools.Command;
using Cake.Core;
using Cake.Frosting;

namespace Build;

public static class Program
{
  public static int Main(string[] args)
  {
    return new CakeHost().UseContext<BuildContext>().Run(args);
  }
}

public class BuildContext(ICakeContext context) : FrostingContext(context)
{
  public SolutionParserResult Solution { get; } =
    context.ParseSolution(context.File("../teaching.sln"));
}

[TaskName("Default")]
[IsDependentOn(typeof(BuildTeachingAppTask))]
[IsDependentOn(typeof(BuildTeachingSlidesTask))]
public class DefaultTask : FrostingTask { }
