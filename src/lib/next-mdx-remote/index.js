import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

const contentRootDir = path.join(process.cwd(), 'assets', 'content', "mdx_posts")

export const getPostBySlug = async fileNameWExt => {
  const fileNameNoExt = fileNameWExt.replace(/\.mdx$/, '')
  const completeFilePath = path.join(contentRootDir, `${fileNameNoExt}.mdx`)
  const fileContent = fs.readFileSync(completeFilePath, { encoding: 'utf8' })
  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return { 
    meta: { 
      ...frontmatter, 
      slug: fileNameNoExt 
    }, 
    content 
  }
}

export const getAllPostsMeta = async () => {
  const mdxCompleteFileNames = fs.readdirSync(contentRootDir)
  let posts = []

  for (const file of mdxCompleteFileNames) {
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts
}
