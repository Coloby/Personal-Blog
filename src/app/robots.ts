import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ["/work-in-progress", "/you-won", "/feed.xml"]
    },
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  }
}