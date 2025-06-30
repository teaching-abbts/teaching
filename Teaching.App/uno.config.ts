import presetWind4 from "@unocss/preset-wind4";
import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      abbts: {
        blue: "rgba(4, 84, 111, 1)",
      },
    },
  },
  presets: [presetWind4()],
  transformers: [
    transformerDirectives({
      applyVariable: ["--uno"],
    }),
  ],
});
