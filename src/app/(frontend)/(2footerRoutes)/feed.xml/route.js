// This is the RSS feed. Made using route handlers https://nextjs.org/docs/app/api-reference/file-conventions/route
import { getAllCMSDocsByCollection } from "@/payload/utils/queryCMS/getAllCMSDocsByCollection"
import RSS from "rss"

export async function GET() {
  const CMSposts = await getAllCMSDocsByCollection("posts")

  const feed = new RSS({
    title: "Ed's personal website",
    description: "My personal website to share anything useful about myself",
    site_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    feed_url: `${process.env.NEXT_PUBLIC_BASE_URL}/feed.xml`,
    copyright: `${new Date().getFullYear()} Ed's personal website`,
    language: "en",
    pubDate: new Date(),
  })

  CMSposts.docs.map((post) => {
    const isoDate = post.updatedAt

    feed.item({
      title: post.title,
      description: post.description,
      date: isoDate,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    })
  })

  return new Response(feed.xml(),{
    headers: {
      'Content-Type': 'application/xml; charset=utf-8', // to signal that this is xml
    }
  })
}