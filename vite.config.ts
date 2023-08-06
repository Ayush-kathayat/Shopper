import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssnano from "cssnano";
import postcssImport from "postcss-import";
import postcssFlexbugsFixes from "postcss-flexbugs-fixes";
import postcssPresetEnv from "postcss-preset-env";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    postcss: {
      plugins: [
        cssnano(),
        postcssImport(),
        postcssFlexbugsFixes(),
        postcssPresetEnv({
          autoprefixer: {
            flexbox: "no-2009",
          },
          stage: 1,
          features: {
            "custom-media-queries": true,
            "custom-properties": true,
            "gap-properties": true,
            "nesting-rules": true,
          },
        }),
      ],
    },
  },  
  build: {
    sourcemap: true,
  },
});