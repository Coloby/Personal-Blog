import { getAllArticlesFrontmatter } from '@/lib/mdx/mdxManager'

export default async function sitemap() {
  const posts = await getAllArticlesFrontmatter()
  const sitemapPosts = posts.map((post) => {
    const dateString = post.last_modified
    const [day, month, year] = dateString.split('/');
    const dateObject = new Date(year, month - 1, day); // JavaScript counts months from 0, so subtract 1 from the month
    const isoDate = dateObject.toISOString();

    return {
      url: "https://edondigital.netlify.app/blog/"+post.slug.replace(/\s+/g, '%20').toLowerCase(),
      lastModified: isoDate, // if wrong, they will ignore this
      changeFrequency: "monthly",
      priority: 0.5
    }
  })

  return [
    {
      url: 'https://edondigital.netlify.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://edondigital.netlify.app/now',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://edondigital.netlify.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://edondigital.netlify.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://edondigital.netlify.app/interests',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://edondigital.netlify.app/credits',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: 'https://edondigital.netlify.app/work-in-progress',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://edondigital.netlify.app/you-won',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://edondigital.netlify.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...sitemapPosts,
  ]
}