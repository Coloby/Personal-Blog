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

  const TOCComponent = ({ platform = "mobile", open = true }) => {
    return (
      <nav className="mb-12">
        <Accordion type="single" collapsible defaultValue={"item-"+open}>
          <AccordionItem value={`item-${open && true}`}>
            <AccordionTrigger><div className="text-xl">Table of contents</div></AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 not-prose !list-disc">
                {TOC.map((header, i) => {
                    const headerVariants = {
                    mobile : {
                      1: '',
                      2: 'text-xl !list-none',
                      3: 'ml-[25px] sm:ml-[45px] text-lg !list-none',
                      4: 'ml-[50px] sm:ml-[70px] text-base !list-none',
                    },
                    desktop : {
                      1: '',
                      2: 'text-lg !list-none',
                      3: 'ml-[35px] text-base !list-none',
                      4: 'ml-[70px] text-base !list-none',
                    }
                  }
                  let headerLevel = header.level
                  return (
                    // <li key={header.id} className={headerVariants[platform][headerLevel] + `!list-none mb-4 ${headerLevel === 3 || 4 ? "!mt-0" : ""} ${TOC[headerLevel + 1].level === 3 || 4 ? "!mb-0" : ""}`}>
                    <>
                      {TOC[headerLevel].level === 2 && i > 0 ?
                      <div className="!h-[0.5px] !border-[0.5px] w-[90%] border-[#374151] rounded-xs !my-5"></div>
                      :
                      ""
                      }
                      <li key={header.id} className={headerVariants[platform][headerLevel] + `not-prose mt-0 !list-none ${headerLevel === 2 ? "!mb-5 !mt-5" : headerLevel === 3 ? "!mb-4 !mt-4" : "!mb-0 !mt-0"}`}>
                        <a href={`#${header.id}`} className=" text-primary_text_color/80 hover:underline hover:text-primary_text_color">
                          {header.text.slice(1)}
                        </a>
                      </li>
                    </>
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
