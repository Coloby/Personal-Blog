import SoftwareCard from "@/components/ui/SoftwareCard"
import { getFrontmatterBySlug } from "@/lib/mdx/mdxManager"

const page = async () => {
  const ObsidianData = (await getFrontmatterBySlug("header_routes/(resources)/wonder-room/tools/(moreInfoTools)/", "obsidian.mdx")).frontmatter;

  return (
    <div className="flexy !items-start gap-16 max-w-[1484px] flex-wrap">
      <SoftwareCard 
        websiteHref={"https://obsidian.md/"} 
        moreInfoHref={"/wonder-room/tools/obsidian"}
        imgClasses={"scale[1.3]"}
        imgs={[
          {
            title: "",
            imgSrc: ObsidianData.thumbnail,
          }
        ]}
        title={ObsidianData.title}
        description={ObsidianData.description}
        tags={ObsidianData.tags}
      />
    </div>
  )
}

export default page