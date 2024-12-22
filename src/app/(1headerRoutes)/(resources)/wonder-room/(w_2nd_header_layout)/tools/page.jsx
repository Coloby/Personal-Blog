import C_Cards from "@/features/cards/components/client/C_Cards";
import { getFrontmatterBySlug } from "@/lib/mdx/mdxManager";
import { Suspense } from "react";

const page = async () => {
  let cardConfigurations = [
    {
      title: "Obsidian",
      websiteUrl: "https://obsidian.md/",
      score: 4.4,
      extraImgs: [
        {
          title: "",
          imgSrc: "/assets/routes_specific/wonder-room/tools/obsidian/2.png"
        },{
          title: "",
          imgSrc: "/assets/routes_specific/wonder-room/tools/obsidian/3.png"
        }
      ],
    },{
      title: "Syncthing",
      websiteUrl: "https://syncthing.net/",
      score: 4
    },{
      title: "Brave",
      websiteUrl: "https://brave.com/",
      score: 3.5
    },{
      title: "Activity Watch",
      websiteUrl: "https://activitywatch.net/",
      score: 4.2,
      extraImgs: [
        {
          title: "",
          imgSrc: "/assets/routes_specific/wonder-room/tools/activity_watch/2.png"
        },{
          title: "",
          imgSrc: "/assets/routes_specific/wonder-room/tools/activity_watch/3.png"
        },
      ],
    },{
      title: "Super Productivity",
      websiteUrl: "https://super-productivity.com/",
      score: 3.2,
      extraImgs: [
        {
          title: "",
          imgSrc: "/assets/routes_specific/wonder-room/tools/super_productivity/2.png"
        },{
          title: "",
          imgSrc: "/assets/routes_specific/wonder-room/tools/super_productivity/3.png"
        },
      ],
    },{
      title: "Notion",
      websiteUrl: "https://www.notion.com/",
      score: 3.9,
      extraImgs: [
        {
          title: "",
          imgSrc: "/assets/routes_specific/wonder-room/tools/notion/2.png"
        },{
          title: "",
          imgSrc: "/assets/routes_specific/wonder-room/tools/notion/3.png"
        },
      ],
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

        const url = `/wonder-room/tools/${title.toLowerCase().replace(" ", "-")}`
        console.log(`url:`, url)
        const urlIsFunctioning = async (url) => {
          let res = await fetch(`${process.env.BASE_URL}${url}`)
          if (!res.ok && process.env.NODE_ENV === "development") res = await fetch(`${process.env.LOCALHOST_URL}${url}`)
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
      <Suspense>
        <C_Cards cardConfigurations={cardConfigurations} categoryTags="tools" />
      </Suspense>
    </div>
  )
}

export const metadata = {
  title : "Tools",
  description : "Tools suggested from Ed",
}

export default page