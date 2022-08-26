export const eslintImport = {
    "import/first": ["warn"],
    "import/no-unresolved": ["error"],
    "import/order": ["warn", {
        "newlines-between": "always",
        "groups": [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            // "type",
        ],
        "pathGroups": [
            {
                "pattern": "@app/*",
                "group": "internal",
                // "position": "after",
            },
        ],
        // "distinctGroup": false,
    }],
}
