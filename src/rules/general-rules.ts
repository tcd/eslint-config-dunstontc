import type { ESLintRules } from "eslint/rules"

export const generalRules: Partial<ESLintRules> = {
    "semi":                     ["warn", "never"],
    "indent":                   ["warn", 4, { "SwitchCase": 1 }],
    "quotes":                   ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }], // https://eslint.org/docs/rules/quotes
    "comma-dangle":             ["warn", "always-multiline"], // https://eslint.org/docs/rules/comma-dangle
    "prefer-const":             ["warn", { "destructuring": "all" }],
    "object-curly-spacing":     ["warn", "always"],
    "keyword-spacing":          ["warn", { "after": true }],
    "space-before-blocks":      ["warn"],
    // "linebreak-style":          ["error", "unix"], // https://eslint.org/docs/rules/linebreak-style
    "no-mixed-spaces-and-tabs": ["error"], // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    "no-trailing-spaces":       ["warn"], // https://eslint.org/docs/rules/no-trailing-spaces
    "func-call-spacing":        ["warn", "never"], // https://eslint.org/docs/rules/func-call-spacing
    "eol-last":                 ["warn", "always"], // https://eslint.org/docs/rules/eol-last
    "no-var":                   ["warn"], // https://eslint.org/docs/rules/no-var
    "space-in-parens":          ["warn", "never"], // https://eslint.org/docs/rules/space-in-parens
    "curly":                    ["warn", "all"], // https://eslint.org/docs/rules/curly
    // In Review
    "space-before-function-paren": ["error", "never"], // https://eslint.org/docs/rules/space-before-function-paren
    "template-curly-spacing":      ["error"], // https://eslint.org/docs/rules/template-curly-spacing
    "comma-spacing":               ["warn", { "before": false, "after": true }], // https://eslint.org/docs/rules/comma-spacing
    "array-bracket-spacing":       ["warn", "never", { "singleValue": false }], // https://eslint.org/docs/rules/array-bracket-spacing
    "block-spacing":               ["warn", "always"], // https://eslint.org/docs/rules/block-spacing
    "computed-property-spacing":   ["error", "never"], // https://eslint.org/docs/rules/computed-property-spacing
    "dot-location":                ["error", "object"], // https://eslint.org/docs/rules/dot-location
    "rest-spread-spacing":         ["error", "never"], // https://eslint.org/docs/rules/rest-spread-spacing
}

