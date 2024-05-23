import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ["src/**/*.js"],
    ignores: ["*.config.js"],
    languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    eslintPluginPrettierRecommended,
    ...tseslint.configs.recommended,
];