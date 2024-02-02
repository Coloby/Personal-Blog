import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn-ui/accordion";
import fs from 'fs';
import path from 'path';
import { useUnifiedPipeline } from "./unifiedPipeline";


export const getRawMdxBySlug = async (dir, fileNameWExt) => {
  const contentRootDir = path.join(process.cwd(), 'assets', 'content', "route_specific_mdx", dir)
  const fileNameNoExt = fileNameWExt.replace(/\.mdx$/, '')
  const completeFilePath = path.join(contentRootDir, `${fileNameNoExt.replace(/%20/g, ' ')}.mdx`) // .replace adds support for files w spaces

  try {
    const rawMDX = fs.readFileSync(completeFilePath, { encoding: 'utf8' })
    return { rawMDX }
  } catch (error) { throw new Error('Resource not found') }
}

export const getFrontmatterBySlug = async (fileNameWExt, index) => {
  const rawMDX = await getRawMdxBySlug("blog", fileNameWExt)
  const { processedMDX } = await useUnifiedPipeline(rawMDX)
  const frontmatter = processedMDX.data.frontmatter
  frontmatter.authors = frontmatter.authors.join(", ")
  frontmatter.slug = fileNameWExt;
  frontmatter.readingTime = processedMDX.data.readingTime.text
  frontmatter.index = index

  return { frontmatter }
}

export const getAllArticlesFrontmatter = async () => {
  const contentRootDir = path.join(process.cwd(), 'assets', 'content', "route_specific_mdx", "blog")
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

export const getTOCComponentFromSlug = async (fileNameWExt) => {
  const rawMDX = await getRawMdxBySlug("blog", fileNameWExt)
  const { processedMDX } = await useUnifiedPipeline(rawMDX)
  const TOC = processedMDX.data.toc

  const TOCComponent = () => {
    return (
      <nav className="mb-12">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Table of contents</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 not-prose !list-disc">
                {TOC.map((header) => {
                  const paddingVariants = {
                    1: 'text-xl',
                    2: 'text-xl !list-none',
                    3: 'ml-[25px] sm:ml-[45px] text-lg !list-none',
                    4: 'ml-[50px] sm:ml-[70px] text-base',
                  }
                  let paddingLevel = header.level
                  return (
                    <li key={header.id} className={paddingVariants[paddingLevel] + " !mb-4"}>
                      <a href={`#${header.id}`} className=" text-[#9333ea] dark:text-[hsl(271,91%,70%)] hover:underline">
                        {header.text.slice(1)}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
    );
  };

  return { TOCComponent }

}
