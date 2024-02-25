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
  const contentRootDir = path.join(process.cwd(), 'assets', 'content', "route_specific_mdx", "header_routes", dir)
  const fileNameNoExt = fileNameWExt.replace(/\.mdx$/, '')
  const completeFilePath = path.join(contentRootDir, `${fileNameNoExt.replace(/%20/g, ' ')}.mdx`) // .replace adds support for files with spaces and &

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
  const contentRootDir = path.join(process.cwd(), 'assets', 'content', "route_specific_mdx", "header_routes", "blog")
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
      <nav className="">
        <Accordion type="single" collapsible defaultValue={"item-"+open}>
          <AccordionItem value={`item-${open && true}`}>
            <AccordionTrigger><div className="text-xl sticky top-0 not-prose !mt-0">Table of contents</div></AccordionTrigger>
            <AccordionContent>
              <div className={`${platform === "desktop" ? "max-h-[700px] h-fit overflow-scroll no-scrollbar overscroll-contain" : ""}`}>
                <ul className="space-y-2 not-prose !list-disc ">
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
                      <div key={header.id}>
                        {
                          headerLevel === 2 && i > 0 ? <hr key={`divider-${i}`} className="w-[90%] rounded-xs !my-5" />
                          : ""
                        }
                        <li className={headerVariants[platform][headerLevel] + `not-prose mt-0 !list-none ${headerLevel === 2 ? "!mb-5 !mt-5" : headerLevel === 3 ? "!mb-4 !mt-4" : "!mb-2 !mt-2"}`}>
                          <a href={`#${header.id}`} className=" text-primary_text_color/90 hover:underline hover:text-primary_text_color">
                            {header.text.slice(1)}
                          </a>
                        </li>
                      </div>
                    )
                  })}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
    );
  };

  return { TOCComponent }

}
