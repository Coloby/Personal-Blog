import fs from 'fs';
import path from 'path';
import { getFrontmatterBySlug } from "../getFrontmatterBySlug";

export const getAllArticlesFrontmatter = async () => {
  const contentRootDir = path.join(process.cwd(), 'assets', 'content', "route_specific_mdx", "header_routes", "blog")
  const mdxPosts = fs.readdirSync(contentRootDir)
  let posts = []
  
  let i = 0
  for (const fileNameWExt of mdxPosts) {
    i++
    const { frontmatter } = await getFrontmatterBySlug(false, "header_routes/blog/", fileNameWExt, i)
    posts.push(frontmatter)
  }
  return posts
}