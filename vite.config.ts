import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import inlineCompile from "vite-plugin-svelte-inline-compile";

export default defineConfig({
  plugins: [sveltekit(), inlineCompile()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    environment: "happy-dom",
    // environmentMatchGlobs: [["**/*.test.{js,ts}", "happy-dom"]],
    globals: true,
    setupFiles: "./src/tests/setup-dom-env.ts",
  },
});
