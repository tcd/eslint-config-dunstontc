/**
 * [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
 */
export const jsdoc = {
    "jsdoc/check-alignment":         ["warn"], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment
    "jsdoc/require-asterisk-prefix": ["warn", "always"], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-asterisk-prefix
    "jsdoc/multiline-blocks":        ["warn", { "noZeroLineText": true, "noSingleLineBlocks": false }], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks
    "jsdoc/check-line-alignment":    ["off"], // ["warn", "always"],
    "jsdoc/check-indentation":       ["off"], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation
}
