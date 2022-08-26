import type { ESLintRules } from "eslint/rules"
import type { rules  } from "@typescript-eslint/eslint-plugin"

export const generalRules: Partial<ESLintRules> = {
    "@typescript-eslint/no-empty-interface": ["off"],
    "no-unused-vars": "off", // This doesn't play nice with TypeScript
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/type-annotation-spacing": ["warn"],
    "@typescript-eslint/ban-ts-comment": ["off"],
    "@typescript-eslint/no-empty-function": ["warn"],
    "@typescript-eslint/ban-types": ["warn", { "types": { "Function": false }, "extendDefaults": true } ],
}