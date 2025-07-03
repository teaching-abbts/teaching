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

public class BuildTeachingAppTask : FrostingTask<BuildContext>
{
  public override void Run(BuildContext context)
  {
    SolutionProject teachingApp =
      context.Solution.Projects.FirstOrDefault(project => project.Name == "Teaching.App")
      ?? throw new CakeException("Teaching.App project not found in the solution.");

    context.Information("*** Building Teaching App...");
    CommandSettings pnpmCommand = teachingApp.GetPnpmCommand();
    context.Command(pnpmCommand, "install");
    context.Command(pnpmCommand, "run build");

    context.Information("*** Copying artifacts to .artifacts directory...");
    DirectoryPath artifactsDir = teachingApp.Path.GetDirectory().Combine("../.artifacts");
    context.EnsureDirectoryDoesNotExist(artifactsDir);
    context.EnsureDirectoryExists(artifactsDir);
    context.CopyDirectory(teachingApp.Path.GetDirectory().Combine("dist"), artifactsDir);
  }
}