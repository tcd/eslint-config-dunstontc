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

const main = async () => {
    await base()
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
