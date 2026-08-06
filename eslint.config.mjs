import cspellConfigs from "@cspell/eslint-plugin/configs";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactNative from "eslint-plugin-react-native";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

/* CSpell ignore words list */
const ignoreWords = ["Nunito", "lato", "Cardano", "Solana", "uuidv4"];

export default defineConfig([
  {
    ignores: ["node_modules/**", "android/**", "ios/**", "build/**", "dist/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  cspellConfigs.recommended,
  {
    rules: {
      "@cspell/spellchecker": [
        "warn",
        {
          checkComments: false,
          autoFix: true,
          cspell: { ignoreWords },
        },
      ],
    },
  },
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        __DEV__: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "react-hooks": pluginReactHooks,
      "react-native": pluginReactNative,
    },
    rules: {
      /* React Native Rules */
      "react-native/no-unused-styles": "error",
      "react-native/split-platform-components": "error",
      "react-native/no-inline-styles": "error",
      "react-native/no-color-literals": "error",
      "react-native/no-single-element-style-arrays": "error",

      /* React Hooks Rules */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off", // Disabled for ESLint 9 compatibility

      /* React Rules */
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/display-name": "off",

      /* General Rules */
      "no-console": "error",
      "no-debugger": "error",
      "no-unused-vars": "off",
      "prefer-const": "error",
      "no-var": "error",
      "no-duplicate-imports": "error",
      "max-lines": ["warn", { max: 500, skipBlankLines: true }],
    },
    settings: {
      react: { version: "detect" },
    },
  },
]);
