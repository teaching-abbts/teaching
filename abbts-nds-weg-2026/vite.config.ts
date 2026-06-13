import "@slidev/types";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/test/",
  plugins: [],
  slidev: {
    icons: {
      customCollections: {
        ingtes: FileSystemIconLoader("./assets", (svg) =>
          svg
            .replace(
              / width="\d+(\.\d+)?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)?"/,
              ' width="1.2em"',
            )
            .replace(
              / height="\d+(\.\d+)?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)?"/,
              ' height="1.2em"',
            ),
        ),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
