import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "https://0.0.0.0:8080",
  },
  test: {
    // Add the line below to add Jsdom to Vite.
    environment: "jsdom",
    // Make all imports from Vitest global so that we don’t manually import(e.g. expect, describe, it) in each test file.
    globals: true,
    setupFiles: "./tests/setup.js", // assuming the test folder is in the root of our project
  },
});
