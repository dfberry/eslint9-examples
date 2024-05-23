const globals = require("globals");
const pluginJs = require("@eslint/js");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = [
  {
    files: ["src/**/*.js"],
    ignores: ["*.config.js"],
    languageOptions: { globals: globals.commonjs },
  },
  pluginJs.configs.recommended, /* js.configs.all or pluginJs.configs.recommended */
  eslintPluginPrettierRecommended,
];
