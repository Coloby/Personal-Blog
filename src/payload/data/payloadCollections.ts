import { Media } from '@/payload/collections/media/Media'
import { pages } from "@/payload/collections/pages"
import { authors } from "@/payload/collections/posts/authors"
import { posts } from "@/payload/collections/posts/index"
import { downloads } from "@/payload/collections/resources/downloads"
import { tools } from '@/payload/collections/resources/wonder-room/tools'
import { Users } from '@/payload/collections/Users'
import { media_tools } from "@/payload/collections/resources/wonder-room/tools/media_tools"
import { media_downloads } from "@/payload/collections/resources/downloads/media_downloads"
import { media_posts } from "@/payload/collections/posts/media/media_posts"
import { media_authors } from "@/payload/collections/posts/media/media_authors"

export const payloadCollections = [
  Users, 
  authors,
  pages,
  // content
    tools,
    posts,
    downloads,
  // media
    Media,
    media_posts,
    media_tools,
    media_downloads,
    media_authors,
]