import { defineShikiSetup } from "@slidev/types";

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: "dark-plus",
      light: "light-plus",
    },
    langs: [
      "csharp",
      "css",
      "html",
      "http",
      "js",
      "json",
      "kotlin",
      "md",
      "scss",
      "ts",
      "vue",
      "vue-html",
      "yaml",
    ],
  };
});
