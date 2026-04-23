import { defineConfig } from "unocss";
import presetWind from "@unocss/preset-wind";

export default defineConfig({
  presets: [presetWind()],
  content: {
    pipeline: {
      include: [
        /src\/.*\.(tsx|ts|jsx|js)$/,
        /index\.html$/,
      ],
    },
  },
});
