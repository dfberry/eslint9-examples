import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ["src/**/*.js"],
    ignores: ["*.config.js"],
    languageOptions: { globals: globals.es2021 }},
    pluginJs.configs.recommended, /* js.configs.all or pluginJs.configs.recommended */
    eslintPluginPrettierRecommended,
];