import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // TODO fix aliases
      "@": "/src/",
    },
  },
  server: {
    port: 3000,
  },
});
