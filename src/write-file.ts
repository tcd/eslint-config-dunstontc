import { resolve } from "path"
import { writeFile as writeFileNode } from "fs/promises"

export const writeFile = async (file: `${string}.js`, content: any) => {
    const filePath = resolve(process.cwd(), "dist", file)
    const fileContent = `module.exports = ${JSON.stringify(content, null, 4)}`
    await writeFileNode(filePath, fileContent)
    console.log(`file written: ${filePath}`)
}
