import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Remove hash from JS chunk filenames
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        // Remove hash from CSS and image filenames
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
}));
