import { defineMermaidSetup } from "@slidev/types";
import mermaid from "mermaid";

mermaid.registerIconPacks([
  {
    name: "devicons",
    loader: () =>
      import("@iconify-json/devicon").then((module) => module.icons),
  },
]);

export default defineMermaidSetup(() => {
  return {
    theme: "default",
    look: "handDrawn",
  };
});
