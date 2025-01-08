import { isAuthor } from "@/payload/auth/butAlsoAdmin/isAuthor"
import { isSelfAuthor } from "@/payload/auth/butAlsoAdmin/isSelf/isSelfAuthor"
import { isAdmin } from "@/payload/auth/isAdmin"
import type { CollectionConfig } from 'payload'
import { genericMedia } from "@/payload/collections/data/defaultColumns"

export const media_posts: CollectionConfig = {
  slug: 'media_posts',
  upload: true,
  access: {
    create: isAuthor,
    read: isAuthor,
    update: isSelfAuthor,
    delete: isAdmin,
  },
  admin: {
    group: "Media",
    defaultColumns: genericMedia,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
