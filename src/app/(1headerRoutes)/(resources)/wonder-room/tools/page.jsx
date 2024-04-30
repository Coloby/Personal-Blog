import DetailedCard from "@/components/ui/DetailedCard";
import { getFrontmatterBySlug } from "@/lib/mdx/mdxManager";

const page = async () => {
  const ObsidianData = (await getFrontmatterBySlug("header_routes/(resources)/wonder-room/tools/(moreInfoTools)/", "obsidian.mdx")).frontmatter;
  const SyncthingData = (await getFrontmatterBySlug("header_routes/(resources)/wonder-room/tools/(moreInfoTools)/", "syncthing.mdx")).frontmatter;

  return (
    <div className="flexy !items-start gap-[100px] sm:gap-[58px] max-w-[1484px] flex-wrap">
      <DetailedCard 
        websiteUrl={"https://obsidian.md/"} 
        moreInfoUrl={"/wonder-room/tools/obsidian"}
        imgClasses={"scale[1.3]"}
        imgs={[
          {
            title: "",
            imgSrc: "/assets/routes_specific/wonder-room/tools/obsidian/2.png"
          },{
            title: "",
            imgSrc: ObsidianData.thumbnail,
          },
        ]}
        title={ObsidianData.title}
        score={4.2}
        iconPath={"/assets/routes_specific/wonder-room/tools/obsidian/logo.svg"}
        description={ObsidianData.description}
        tags={ObsidianData.tags}
      />
      <DetailedCard 
        websiteUrl={"https://syncthing.net/"} 
        moreInfoUrl={"/wonder-room/tools/syncthing"}
        imgClasses={"scale[1.3]"}
        imgs={[
          {
            title: "",
            imgSrc: SyncthingData.thumbnail
          }
          
        ]}
        title={SyncthingData.title}
        score={4}
        iconPath={"/assets/routes_specific/wonder-room/tools/syncthing/logo.svg"}
        description={SyncthingData.description}
        tags={SyncthingData.tags}
      />
    </div>
  )
}

export default page