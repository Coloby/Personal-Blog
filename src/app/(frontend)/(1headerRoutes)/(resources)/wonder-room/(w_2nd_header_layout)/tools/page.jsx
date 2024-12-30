import C_Cards from "@/features/cards/components/client/C_Cards";
import { getFrontmatterBySlug } from "@/lib/mdx/mdxManager";
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { Suspense } from "react";
import { getBaseUrl } from "@/utils/baseUrl";

const page = async () => {
  const payload = await getPayload({ config : configPromise })
  let toolsCollection = await payload.find({
    collection: 'tools',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      slug: false,
      createdAt: false
    },
  })

  let cardConfigurations = [
    {
      title: "Brave",
      websiteUrl: "https://brave.com/",
      score: 3.5
    },
    {
      title: "Notion",
      websiteUrl: "https://www.notion.com/",
      score: 3.9,
      extraImgs: [
        {
          title: "",
          url: "/assets/routes_specific/wonder-room/tools/notion/2.png"
        },{
          title: "",
          url: "/assets/routes_specific/wonder-room/tools/notion/3.png"
        },
      ],
    },
    {
      title: "Obsidian",
      websiteUrl: "https://obsidian.md/",
      score: 4.4,
      extraImgs: [
        {
          title: "",
          url: "/assets/routes_specific/wonder-room/tools/obsidian/2.png"
        },{
          title: "",
          url: "/assets/routes_specific/wonder-room/tools/obsidian/3.png"
        }
      ],
    },
    {
      title: "Syncthing",
      websiteUrl: "https://syncthing.net/",
      score: 4
    },
    {
      title: "Inoreader",
      websiteUrl: "https://www.inoreader.com/",
      score: 4.2,
      extraImgs: [
        {
          title: "",
          url: "/assets/routes_specific/wonder-room/tools/inoreader/2.png"
        },{
          title: "",
          url: "/assets/routes_specific/wonder-room/tools/inoreader/3.png"
        }
      ],
    },
    {
      title: "Super Productivity",
      websiteUrl: "https://super-productivity.com/",
      score: 3.2,
      extraImgs: [
        {
          title: "",
          url: "/assets/routes_specific/wonder-room/tools/super_productivity/2.png"
        },{
          title: "",
          url: "/assets/routes_specific/wonder-room/tools/super_productivity/3.png"
        },
      ],
    },
    {
      title: "Activity Watch",
      websiteUrl: "https://activitywatch.net/",
      score: 4.2,
      extraImgs: [
        {
          title: "",
          url: "/assets/routes_specific/wonder-room/tools/activity_watch/2.png"
        },{
          title: "",
          url: "/assets/routes_specific/wonder-room/tools/activity_watch/3.png"
        },
      ],
    },
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
            url: frontmatter.thumbnail
          },
          ...(Array.isArray(cardConfigurations[i].extraImgs) ? cardConfigurations[i].extraImgs : [])
        ]

        const url = `/wonder-room/tools/${title.toLowerCase().replace(" ", "-")}`

        const urlIsFunctioning = async (url) => {
          let res = await fetch(`${getBaseUrl()}${url}`)
          return res.ok
        }
        const moreInfoUrl = await urlIsFunctioning(url) && url || ""

        cardConfigurations[i] = {
          ...cardConfigurations[i],
          icon : iconPath,
          url: `/wonder-room/tools/${title.toLowerCase()}`,
          moreInfoUrl: moreInfoUrl,
          imgs: [...imgs],
          tags: frontmatter.tags,
          description: frontmatter.description,
        };
      } catch (error) {console.error(`Error fetching frontmatter for "${title}" card index "${i}":`, error)}
    }
  }

  await updateCardConfigurations();
  toolsCollection.docs.forEach((post, i) => {
    post.imgs.forEach((img) => img.image.url = `${getBaseUrl()}${img.image.url}`)
    cardConfigurations.push(post)
  })

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