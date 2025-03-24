import { getMDFromLexical } from "@/payload/features/lexical/getMDFromLexical";
import { getRawMdxByFilePath } from "./localMDX/getRawMdxByFilePath";
import { useUnifiedPipeline } from "./unifiedPipeline";

export const getFrontmatterBySlug = async (CMS, dir, fileNameWExt, index = 0) => {
  const isSlugFromCMS = CMS?.mdxId && true || false
  const rawMDX = isSlugFromCMS ? await getMDFromLexical(CMS.mdxId, CMS.collection) 
    : await getRawMdxByFilePath(dir, fileNameWExt)
  const { processedMDX } = await useUnifiedPipeline(isSlugFromCMS ? {rawMDX} : rawMDX)
  
  const frontmatter = processedMDX.data.frontmatter || {}
  frontmatter.readingTime = processedMDX.data.readingTime.text

  if (isSlugFromCMS) return { frontmatter }

  frontmatter.url = fileNameWExt.replace(/\.mdx|%20/g, '').replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
  frontmatter.index = index

  return { frontmatter }
}





