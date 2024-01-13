import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const contentRootDir = path.join(process.cwd(), 'assets', 'content', "mdx_posts")

export const getPostBySlug = async fileNameWExt => {
  const fileNameNoExt = fileNameWExt.replace(/\.mdx$/, '')
  const completeFilePath = path.join(contentRootDir, `${fileNameNoExt}.mdx`)
  const rawMDX = fs.readFileSync(completeFilePath, { encoding: 'utf8' })
  
  let { frontmatter, content } = await compileMDX({
    source: rawMDX,
    options: { 
      parseFrontmatter: true ,
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    }
  })

  return { 
    frontmatter: { 
      ...frontmatter, 
      slug: fileNameNoExt 
    }, 
    content,
    rawMDX
  }
}

export const getAllPostsFrontmatter = async () => {
  const mdxCompleteFileNames = fs.readdirSync(contentRootDir)
  let posts = []

  for (const file of mdxCompleteFileNames) {
    const { frontmatter } = await getPostBySlug(file)
    posts.push(frontmatter)
  }

  return posts
}
