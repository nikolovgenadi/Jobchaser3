import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
      "@router": path.resolve(__dirname, "node_modules/react-router-dom"),
    },
  },
  build: {
    outDir: "/dist",
    rollupOptions: {
      external: ["/node_modules/react/jsx-runtime"],
      input: {
        main: "/src/main.tsx",
        preview: "/src/preview.tsx",
      },
    },
  },
});
