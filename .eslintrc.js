/* eslint-disable unicorn/prefer-module */
import eslintConfig from "src/tools/eslint";

const { config: sharedConfig } = eslintConfig;

sharedConfig.overrides[0].parserOptions = {
  project: ["./tsconfig.json"],
  tsconfigRootDir: __dirname,
};

module.exports = sharedConfig;
