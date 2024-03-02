// This is the RSS feed
import RSS from "rss"
import { getAllArticlesFrontmatter } from '@/lib/mdx/mdxManager'

// guid
// categories


export async function GET() {
  const posts = await getAllArticlesFrontmatter()

  const feed = new RSS({
    title: "Ed's personal website",
    description: "My personal website to share anything useful about myself",
    site_url: `${process.env.BASE_URL}/`,
    feed_url: `${process.env.BASE_URL}/feed.xml`,
    copyright: `${new Date().getFullYear()} Ed's personal website`,
    language: "en",
    pubDate: new Date(),
  })

  posts.map((post) => {
    const dateString = post.publishDate
    const [day, month, year] = dateString.split('/');
    const dateObject = new Date(year, month - 1, day); // JavaScript counts months from 0, so subtract 1 from the month
    const isoDate = dateObject.toISOString();

    feed.item({
      title: post.title,
      description: post.description,
      date: isoDate,
      url: `${process.env.BASE_URL}/blog/${post.slug.replace(/\s+/g, '%20').toLowerCase()}`,
    })
  })

  return new Response(feed.xml(),{
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    }
  })
}