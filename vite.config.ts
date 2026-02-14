import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  build: {
    target: "es2018",
    sourcemap: false,
    cssCodeSplit: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "animation-vendor": ["framer-motion"],
        },
        // Optimize file naming
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    minify: "esbuild",
    // Inline small assets as base64
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: [],
  },
  esbuild: {
    legalComments: "none",
    drop: ["console", "debugger"],
    treeShaking: true,
  },
});
