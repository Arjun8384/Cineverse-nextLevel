import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "prop-types-exact.d.ts",
    "eslint.config.mjs",
    "next.config.js",
    "tailwind.config.js",
    "postcss.config.js",
  ]),
]);

export default eslintConfig;
