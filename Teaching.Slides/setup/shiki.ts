import { defineShikiSetup } from "@slidev/types";

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: "dark-plus",
      light: "light-plus",
    },
    langs: [
      "css",
      "html",
      "js",
      "json",
      "kotlin",
      "md",
      "scss",
      "ts",
      "vue",
      "vue-html",
    ],
  };
});
