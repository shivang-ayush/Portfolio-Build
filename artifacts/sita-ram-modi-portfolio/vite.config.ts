import { defineConfig } from "vite";
import { copyFile } from "node:fs/promises";
import path from "node:path";

const port = Number(process.env.PORT || 5173);
const root = import.meta.dirname;
const output = path.join(root, "dist/public");

const copyStandaloneScript = {
  name: "copy-standalone-script",
  async closeBundle() {
    await copyFile(path.join(root, "script.js"), path.join(output, "script.js"));
  },
};

export default defineConfig({
  base: process.env.BASE_PATH || "/",
  root,
  plugins: [copyStandaloneScript],
  build: {
    outDir: "dist/public",
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port,
    strictPort: true,
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port,
    allowedHosts: true,
  },
});