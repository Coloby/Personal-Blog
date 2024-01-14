import { Parser } from 'html-to-react';
import { useUnifiedPipeline } from "./unifiedPipeline";
import fs from 'fs';
import path from 'path';

const contentRootDir = path.join(process.cwd(), 'assets', 'content', "mdx_posts")

export const getRawMdxBySlug = async (fileNameWExt) => {
  const fileNameNoExt = fileNameWExt.replace(/\.mdx$/, '')
  const completeFilePath = path.join(contentRootDir, `${fileNameNoExt}.mdx`)

  const rawMDX = fs.readFileSync(completeFilePath, { encoding: 'utf8' })
  return { rawMDX }
}

export const getReactElemBySlug = async (fileNameWExt) => {
  const rawMDX = await getRawMdxBySlug(fileNameWExt)
  const { processedMDX } = await useUnifiedPipeline(rawMDX)
  const parser = new Parser();
  const reactElementFromMDX = parser.parse(processedMDX.value);

  return { reactElementFromMDX }
}

export const getFrontmatterBySlug = async (fileNameWExt) => {
  const rawMDX = await getRawMdxBySlug(fileNameWExt)
  const { processedMDX } = await useUnifiedPipeline(rawMDX)
  const frontmatter = processedMDX.data.frontmatter
  frontmatter.slug = fileNameWExt;
  frontmatter.readingTime = processedMDX.data.readingTime.text

  return { frontmatter }
}

export const getAllPostsFrontmatter = async () => {
  const mdxPosts = fs.readdirSync(contentRootDir)
  let posts = []

  for (const fileNameWExt of mdxPosts) {
    const { frontmatter } = await getFrontmatterBySlug(fileNameWExt)
    posts.push(frontmatter)
  }

  return posts
}

// useEffect(() => {
  //   const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

  //   const headingArr = [];
  //   headings.forEach((heading) => {
  //     const id = heading.id;
  //     const level = +heading.tagName.replace('H', '');
  //     const text = heading.textContent + '';

  //     headingArr.push({ id, level, text });
  //   });

  //   setToc(headingArr);
  // }, [props.slug]);
