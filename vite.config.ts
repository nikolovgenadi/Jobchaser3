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
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    rollupOptions: {
      external: ["/node_modules/react/jsx-runtime"],
    },
  },
});
