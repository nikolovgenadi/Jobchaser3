import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    visualizer(),
    react({
      jsxRuntime: "classic",
      babel: {
        plugins: ["@babel/plugin-transform-react-jsx"],
      },
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ["firebase", "react-router-dom", "/dist/main.js"],
      input: {
        main: "index.html",
      },
    },
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  resolve: {
    alias: {
      "@": "./src",
    },
  },
});
