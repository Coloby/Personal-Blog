import { getAllArticlesFrontmatter } from '@/lib/mdx/mdxManager'

export default async function sitemap() {
  const posts = await getAllArticlesFrontmatter()
  const sitemapPosts = posts.map((post) => {
    const dateString = post.last_modified
    const [day, month, year] = dateString.split('/');
    const dateObject = new Date(year, month - 1, day); // JavaScript counts months from 0, so subtract 1 from the month
    const isoDate = dateObject.toISOString();

    return {
      url: `${process.env.BASE_URL}/blog/`+post.slug.replace(/\s+/g, '%20').toLowerCase(),
      lastModified: isoDate, // if wrong, they will ignore this
      changeFrequency: "monthly",
      priority: 0.5
    }
  })

  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/now`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${process.env.BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${process.env.BASE_URL}/interests`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${process.env.BASE_URL}/credits`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${process.env.BASE_URL}/work-in-progress`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${process.env.BASE_URL}/you-won`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${process.env.BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...sitemapPosts,
  ]
}