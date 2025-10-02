import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
  { files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },
  eslintConfigPrettier,
]);
