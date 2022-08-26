import type { ESLintRules } from "eslint/rules"
import type { Linter } from "eslint"
import type { RuleName } from "typescript/eslint"

type Rules = Partial<ESLintRules> & Partial<Record<RuleName, Linter.RuleEntry>>

export const typescript: Rules = {
    "@typescript-eslint/ban-ts-comment": ["off"],
    "@typescript-eslint/ban-types": ["warn", { "types": { "Function": false }, "extendDefaults": true } ],
    "@typescript-eslint/no-empty-function": ["warn"],
    "@typescript-eslint/no-empty-interface": ["off"], // https://github.com/typescript-eslint/typescript-eslint
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
    "@typescript-eslint/type-annotation-spacing": ["warn"],
    "no-unused-vars": "off", // This doesn't play nice with TypeScript
}
