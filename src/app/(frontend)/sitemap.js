import { getAllCMSDocsByCollection } from "@/payload/utils/queryCMS/getAllCMSDocsByCollection"

export default async function sitemap() {
  const CMSposts = await getAllCMSDocsByCollection("posts")
  const sitemapPosts = CMSposts.docs.map((post) => {
    const isoDate = post.updatedAt

    return {
      url: `${process.env.BASE_URL}/blog/`+post.slug,
      lastModified: isoDate, // if wrong, they will ignore this
      changeFrequency: "monthly",
      priority: 0.5
    }
  })

  return [
    ...sitemapPosts,
    {
      url: `${process.env.BASE_URL}`,
      // lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/now`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/about`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${process.env.BASE_URL}/contact`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${process.env.BASE_URL}/interests`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${process.env.BASE_URL}/credits`,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${process.env.BASE_URL}/work-in-progress`,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${process.env.BASE_URL}/you-won`,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${process.env.BASE_URL}/blog`,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${process.env.BASE_URL}/downloads`,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]
}