import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
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
