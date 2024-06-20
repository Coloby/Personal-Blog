import DetailedCard from "@/features/cards/components/DetailedCard.jsx";
import { getFrontmatterBySlug } from "@/lib/mdx/mdxManager";

const page = async () => {
  const ObsidianData = (await getFrontmatterBySlug("header_routes/(resources)/wonder-room/tools/(moreInfoTools)/", "obsidian.mdx")).frontmatter;
  const SyncthingData = (await getFrontmatterBySlug("header_routes/(resources)/wonder-room/tools/(moreInfoTools)/", "syncthing.mdx")).frontmatter;
  const braveData = (await getFrontmatterBySlug("header_routes/(resources)/wonder-room/tools/(moreInfoTools)/", "brave.mdx")).frontmatter;

  return (
    <div className="flexy !items-start gap-[100px] sm:gap-[58px] max-w-[1484px] flex-wrap">
      <DetailedCard 
        frontmatter={ObsidianData}
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
        score={4.2}
        iconPath={"/assets/routes_specific/wonder-room/tools/obsidian/logo.svg"}
      />
      <DetailedCard 
        frontmatter={SyncthingData}
        websiteUrl={"https://syncthing.net/"} 
        moreInfoUrl={"/wonder-room/tools/syncthing"}
        imgClasses={"scale[1.3]"}
        imgs={[
          {
            title: "",
            imgSrc: SyncthingData.thumbnail
          }
        ]}
        score={4}
        iconPath={"/assets/routes_specific/wonder-room/tools/syncthing/logo.svg"}
      />
      <DetailedCard 
        frontmatter={braveData}
        websiteUrl={"https://brave.com/"} 
        moreInfoUrl={"/wonder-room/tools/brave"}
        imgClasses={"scale[1.3]"}
        imgs={[
          {
            title: "",
            imgSrc: braveData.thumbnail
          }
        ]}
        score={3.5}
        iconPath={"/assets/routes_specific/wonder-room/tools/brave/icon.svg"}
      />
    </div>
  )
}

export default page