import * as rules from "./rules"
import { writeFile } from "./write-file"

const base = async () => {
    const content = {
        rules: {
            ...rules.generalRules,
        },
    }
    await writeFile("base.js", content)
}

const typescript = async () => {
    const content = {
        plugins: [
            "@typescript-eslint",
            "import",
            "lodash",
        ],
        rules: {
            ...rules.generalRules,
            ...rules.typescript,
            ...rules.lodash,
            ...rules.jsdoc,
            ...rules.eslintImport,
        },
    }
    await writeFile("index.js", content)
}

const main = async () => {
    await typescript()
}

(async () => {
    main()
        .then(() => {
            process.exit(0)
        })
        .catch((error) => {
            if (error) { console.error(error) }
            process.exit(1)
        })
})()
