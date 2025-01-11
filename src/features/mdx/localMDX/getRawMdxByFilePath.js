import path from "path"
import fs from 'fs';

export const getRawMdxByFilePath = async (dir, fileNameWExt) => {
  const contentRootDir = path.join(process.cwd(), 'assets', 'content', "route_specific_mdx", dir)
  const fileNameNoExt = fileNameWExt.replace(/\.mdx$/, '')
  const completeFilePath = path.join(contentRootDir, `${fileNameNoExt.replace(/%20/g, ' ')}.mdx`) // .replace adds support for files with spaces and &

  try {
    const rawMDX = fs.readFileSync(completeFilePath, { encoding: 'utf8' })
    return { rawMDX }
  } catch (error) { throw new Error(`Resource not found for: ${completeFilePath}`) }
}