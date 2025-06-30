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

public class BuildContext : FrostingContext
{
  public BuildContext(ICakeContext context)
    : base(context) { }
}

[TaskName("Default")]
public class DefaultTask : FrostingTask { }
