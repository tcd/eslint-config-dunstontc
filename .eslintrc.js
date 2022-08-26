/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: false,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
    ],
    rules: {
        "semi": ["warn", "never"],
        "indent": ["warn", 4, { "SwitchCase": 1 }],
        "quotes": ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "comma-dangle": ["warn", "always-multiline"],
        "prefer-const": ["warn", { "destructuring": "all" }],
        "object-curly-spacing": ["warn", "always"],
        "keyword-spacing": ["warn", { "after": true }],
        "space-before-blocks": ["warn"],
        "linebreak-style": ["error", "unix"],
    },
}
