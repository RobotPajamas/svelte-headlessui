import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import type { Plugin } from "vite";
import { compile } from "svelte/compiler";

export default defineConfig({
  plugins: [sveltekit(), myPlugin()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    environment: "happy-dom",
    environmentMatchGlobs: [["**/*.dom.test.{js,ts}", "happy-dom"]],
    globals: true,
    setupFiles: "./tests/setup-dom-env.ts",
  },
});

function myPlugin(config = {}): Plugin {
  // Regex for files ending in .test.js, .test.ts, .spec.js, or .spec.ts
  const fileRegex = /(\.test|\.spec)\.(js|ts)$/;
  return {
    name: "svelte-inline-compile",
    transform(code, id) {
      console.log(id);
      if (fileRegex.test(id)) {
        // console.log(code);
        // const renderRegex = /render\((.*)\);/;
        // Regex for finding all content between render( and ); but not including the render( and ); It should cross multiple lines
        // For instance, the regex should capture the "compile(<div />)" portion
        // render(compile(<div />));
        const renderRegex = /compile\(([\s\S]*?)\)/;
        const matchedCode = code.match(renderRegex);
        // console.log(matchedCode);
        const replacement = compileSvelte(matchedCode[1]);
        // console.log(replacement);
        const newCode = code.replace(renderRegex, replacement);
        console.log(newCode);
        return {
          code: newCode,
          map: null,
        };
      }
    },
  };
}

function compileSvelte(template: string) {
  const componentSrc = compile(template, {
    format: "cjs",
    css: true,
    accessors: true,
    dev: true,
  }).js.code.replace("exports.default =", "return");

  return `(function() { 
    ${componentSrc} 
  })()`;
}
