import SettingsAccordionBtn from "@/components/logic/settings/SettingsAccordionBtn";
import { getAllArticlesFrontmatter, getFrontmatterBySlug, getTOCComponentFromSlug } from '@/lib/mdx/mdxManager';
import { defaultProseSettings } from "@/lib/mdx/proseSettings";
import { getMdxComp } from "../../../../lib/mdx/getMdxComp";

export async function generateStaticParams() { // build static routes for every mdx article https://nextjs.org/docs/app/api-reference/functions/generate-static-params
  const posts = await getAllArticlesFrontmatter()
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const Page = async ({ params }) => {
  const { frontmatter } = await getFrontmatterBySlug(params.slug)
  const { TOCComponent } = await getTOCComponentFromSlug(params.slug)
  const Component = await getMdxComp("header_routes/blog", params.slug)
  return (
    <section className={`flexy !items-start gap-20 h-fit pb-8 !max-w-full w-full prose ${defaultProseSettings}`}>
      {/* TODO zen mode: hides everything apart from the text */}
      <div className="absolute right-[1470px] top-[160px] max-w-[390px] w-fit h-full flex justify-end !items-start sl:block pb-[320px]">
        <div className="!sticky top-[120px] left-[-1150px] flex flex-col !items-end !justify-end gap-4 settings-btn">
          <SettingsAccordionBtn /> {/* workaround made bcs the AccordionContent component doesn't mount components when hidden. You can find the attributes to change this behaviour in the comment below, but using it will show the components and using "hidden" will make the animations not work at best */}
          {/* forceMount={true} hidden={isHidden} */}
          
        </div>
      </div>
      <div className="absolute right-[45px] top-[120px] max-w-[390px] w-full h-full sl:block pb-[320px] !items-start">
        {/* shadow-violet-500 shadow-[0_10px_10px_-10px] custom-shadow*/}
        <div className="sticky top-[90px]  pb-4 overflow-x-hidden  w-full overflow-scroll no-scrollbar overscroll-contain "><TOCComponent platform={"desktop"} /></div>
      </div>
      <article className="w-full max-w-prose">
        <div className="w-full">
          <div className="flexy flex-col align-top">
            <div className=" flex items-center justify-center h-[176px] max-w-[340px] w-full overflow-hidden rounded-xs m-0 mb-6 ">
              <img className="object-contain xs:object-cover w-full h-full rounded-xs !m-0" src={frontmatter.thumbnail ? "/assets/routes_specific/blog/"+frontmatter.thumbnail : `https://picsum.photos/500/500?random=${frontmatter.index}`} alt="" />
            </div>
          </div>
          <span className="flex flex-wrap gap-x-8 gap-y-1 mb-4"><address>{frontmatter.authors}</address><time>{frontmatter.publishDate}</time><span>{frontmatter.readingTime}</span></span>
          <h1 className="text-bold-gradient">{frontmatter.title}</h1>
          <div className="lead text-primary_text_color">{frontmatter.description}</div>
          <div className="sl:hidden"><TOCComponent platform={"mobile"} open={false} /></div>
        </div>
        <hr />
        <div className="">
          <Component />
        </div>
      </article>
    </section>
  )
}

// strong
// prose-headings:text-red-900

export default Page
