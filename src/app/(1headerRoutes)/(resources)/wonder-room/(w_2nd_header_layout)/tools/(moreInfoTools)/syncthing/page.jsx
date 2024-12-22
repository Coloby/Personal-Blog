import { getMdxComp } from "@/lib/mdx/getMdxComp";
import { getFrontmatterBySlug } from "@/lib/mdx/mdxManager";
import Image from "next/image";
import GetAuthorsComp from "@/utils/GetAuthorsComp";
import { defaultProseSettings } from "@/lib/mdx/proseSettings";

const page = async () => {
  const Component = await getMdxComp("header_routes/(resources)/wonder-room/tools/(moreInfoTools)/", "syncthing.mdx")
  const { frontmatter } = await getFrontmatterBySlug("header_routes/(resources)/wonder-room/tools/(moreInfoTools)/", "syncthing.mdx")
  const authors = GetAuthorsComp(frontmatter.authors)

  return (
    <section className={`flexy !items-start gap-20 h-fit pb-8 !max-w-full w-full prose ${defaultProseSettings}`}>
      <article className="w-full max-w-prose">
        <div className="w-full">
          <div className="flexy flex-col align-top">
            <div className=" flex items-center justify-center h-[176px] max-w-[340px] w-full overflow-hidden rounded-xs m-0 mb-6 ">
              <Image
                src={frontmatter.thumbnail}
                width={840}
                height={550}
                className="object-contain xs:object-cover w-full h-full rounded-xs !m-0"
                alt=""
                priority={true}
              />
            </div>
          </div>
          <span className="flex flex-wrap gap-x-8 gap-y-1 mb-4"><address className="flexy">{authors}</address><time>{frontmatter.publishDate}</time><span>{frontmatter.readingTime}</span></span>
          <h1 className="text-bold-gradient">{frontmatter.title}</h1>
          <div className="lead text-primary_text_color">{frontmatter.description}</div>
        </div>
        <hr />
        {/* MdxComp */}
        <div className="">
          <Component />
        </div>
      </article>
    </section>
    
  )
}

export default page