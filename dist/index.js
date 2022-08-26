module.exports = {
    "plugins": [
        "@typescript-eslint",
        "import",
        "lodash"
    ],
    "rules": {
        "semi": [
            "warn",
            "never"
        ],
        "indent": [
            "warn",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            "warn",
            "double",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "comma-dangle": [
            "warn",
            "always-multiline"
        ],
        "prefer-const": [
            "warn",
            {
                "destructuring": "all"
            }
        ],
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "keyword-spacing": [
            "warn",
            {
                "after": true
            }
        ],
        "space-before-blocks": [
            "warn"
        ],
        "no-mixed-spaces-and-tabs": [
            "error"
        ],
        "no-trailing-spaces": [
            "warn"
        ],
        "func-call-spacing": [
            "warn",
            "never"
        ],
        "eol-last": [
            "warn",
            "always"
        ],
        "no-var": [
            "warn"
        ],
        "space-in-parens": [
            "warn",
            "never"
        ],
        "curly": [
            "warn",
            "all"
        ],
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "template-curly-spacing": [
            "error"
        ],
        "comma-spacing": [
            "warn",
            {
                "before": false,
                "after": true
            }
        ],
        "array-bracket-spacing": [
            "warn",
            "never",
            {
                "singleValue": false
            }
        ],
        "block-spacing": [
            "warn",
            "always"
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "dot-location": [
            "error",
            "object"
        ],
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        "@typescript-eslint/ban-ts-comment": [
            "off"
        ],
        "@typescript-eslint/ban-types": [
            "warn",
            {
                "types": {
                    "Function": false
                },
                "extendDefaults": true
            }
        ],
        "@typescript-eslint/no-empty-function": [
            "warn"
        ],
        "@typescript-eslint/no-empty-interface": [
            "off"
        ],
        "@typescript-eslint/no-explicit-any": [
            "off"
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_"
            }
        ],
        "@typescript-eslint/type-annotation-spacing": [
            "warn"
        ],
        "no-unused-vars": "off",
        "lodash/import-scope": [
            "error",
            "method"
        ],
        "jsdoc/check-alignment": [
            "warn"
        ],
        "jsdoc/require-asterisk-prefix": [
            "warn",
            "always"
        ],
        "jsdoc/multiline-blocks": [
            "warn",
            {
                "noZeroLineText": true,
                "noSingleLineBlocks": false
            }
        ],
        "jsdoc/check-line-alignment": [
            "off"
        ],
        "jsdoc/check-indentation": [
            "off"
        ],
        "import/first": [
            "warn"
        ],
        "import/no-unresolved": [
            "error"
        ],
        "import/order": [
            "warn",
            {
                "newlines-between": "always",
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "object"
                ],
                "pathGroups": [
                    {
                        "pattern": "@app/*",
                        "group": "internal"
                    }
                ]
            }
        ]
    }
}
