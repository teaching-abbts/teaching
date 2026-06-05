import presetWind3 from "@unocss/preset-wind3";
import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig } from "unocss";

export default defineConfig({
  rules: [
    [
      "shadow-filter",
      { filter: "drop-shadow(-0.05em 0.05em rgba(0, 0, 0, 0.7));" },
    ],
  ],
  presets: [
    presetWind3({
      important: true,
    }),
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ["--uno"],
    }),
  ],
});
