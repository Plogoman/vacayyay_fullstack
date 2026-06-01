import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node, // Since you are using a server.js, you likely need node globals, not just browser
        ...globals.browser
      }
    }
  }
];