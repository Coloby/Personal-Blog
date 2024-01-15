import { Parser } from 'html-to-react';
import { useUnifiedPipeline } from "./unifiedPipeline";
import fs from 'fs';
import path from 'path';

const contentRootDir = path.join(process.cwd(), 'assets', 'content', "mdx_posts")

export const getRawMdxBySlug = async (fileNameWExt) => {
  const fileNameNoExt = fileNameWExt.replace(/\.mdx$/, '')
  const completeFilePath = path.join(contentRootDir, `${fileNameNoExt.replace(/%20/g, ' ')}.mdx`) // .replace adds support for files w spaces

  try {
    const rawMDX = fs.readFileSync(completeFilePath, { encoding: 'utf8' })
    return { rawMDX }
  } catch (error) {
    throw new Error('Resource not found');
  }
}

export const getReactElemBySlug = async (fileNameWExt) => {
  const rawMDX = await getRawMdxBySlug(fileNameWExt)
  const { processedMDX } = await useUnifiedPipeline(rawMDX)
  const parser = new Parser();
  const reactElementFromMDX = parser.parse(processedMDX.value);

  return { reactElementFromMDX }
}

export const getFrontmatterBySlug = async (fileNameWExt, index) => {
  const rawMDX = await getRawMdxBySlug(fileNameWExt)
  const { processedMDX } = await useUnifiedPipeline(rawMDX)
  const frontmatter = processedMDX.data.frontmatter
  frontmatter.authors = frontmatter.authors.join(", ")
  frontmatter.slug = fileNameWExt;
  frontmatter.readingTime = processedMDX.data.readingTime.text
  frontmatter.index = index

  return { frontmatter }
}

export const getAllPostsFrontmatter = async () => {
  const mdxPosts = fs.readdirSync(contentRootDir)
  let posts = []
  let i = 0
  for (const fileNameWExt of mdxPosts) {
    i++
    const { frontmatter } = await getFrontmatterBySlug(fileNameWExt, i)
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
