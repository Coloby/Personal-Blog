import C_Cards from "@/features/cards/components/client/C_Cards";
import { getFrontmatterBySlug } from "@/lib/mdx/mdxManager";

const page = async () => {
  let cardConfigurations = [
    {
      title: "Obsidian",
      websiteUrl: "https://obsidian.md/",
      extraImgs: [{
        title: "",
        imgSrc: "/assets/routes_specific/wonder-room/tools/obsidian/2.png"
      }],
      score: 4.2
    },{
      title: "Syncthing",
      websiteUrl: "https://syncthing.net/",
      score: 4
    },{
      title: "Brave",
      websiteUrl: "https://brave.com/",
      score: 3.5
    }
  ];

  const updateCardConfigurations = async () => {
    for (let i = 0; i < cardConfigurations.length; i++) {
      const title = cardConfigurations[i].title;
      const iconPath = `/assets/routes_specific/wonder-room/tools/${title.toLowerCase().replace(" ", "_")}/icon.svg`;
      
      try {
        const frontmatter = (await getFrontmatterBySlug("header_routes/(resources)/wonder-room/tools/(moreInfoTools)/", title.toLowerCase().replace(" ", "_"))).frontmatter
        const imgs = [
          {
            title: "",
            imgSrc: frontmatter.thumbnail
          },
          ...(Array.isArray(cardConfigurations[i].extraImgs) ? cardConfigurations[i].extraImgs : [])
        ]

        const url = `/wonder-room/tools/${title.toLowerCase()}`
        const urlIsFunctioning = async (url) => {
          const res = await fetch(`${process.env.BASE_URL}${url}`)
          return res.ok
        }
        const moreInfoUrl = await urlIsFunctioning(url) && url || ""

        cardConfigurations[i] = {
          ...cardConfigurations[i],
          iconPath,
          url: `/wonder-room/tools/${title.toLowerCase()}`,
          moreInfoUrl: moreInfoUrl,
          imgs: [...imgs],
          Tags: frontmatter.tags,
          description: frontmatter.description,
        };
      } catch (error) {console.error(`Error fetching frontmatter for "${title}" card index "${i}":`, error)}
    }
  }

  await updateCardConfigurations();
  
  return (
    <div id="cards-wrapper-container">
      <C_Cards cardConfigurations={cardConfigurations} categoryTags="tools" />
    </div>
  )
}

export default page