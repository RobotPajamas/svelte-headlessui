import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    environment: "happy-dom",
    environmentMatchGlobs: [["**/*.dom.test.{js,ts}", "happy-dom"]],
    globals: true,
    setupFiles: "./tests/setup-dom-env.ts",
  },
});
