import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

export default defineConfig({
  base: './',
  cacheDir: ".vite_cache",
  plugins: [
    visualizer(),
    react({
      jsxRuntime: "classic",
      babel: {
        plugins: ["@babel/plugin-transform-react-jsx"],
        presets: [
          ["@babel/preset-react", {}],
        ],
      },
    }),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  build: {
    sourcemap: true,
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "/src/main.tsx",
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          // jsx_runtime: 'react-jsx',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  // },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  resolve: {
    alias: {
      "@": "./src",
      "@babel/runtime": path.resolve(__dirname, "node_modules/@babel/runtime"),
    },
  },
});
