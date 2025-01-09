import { genericMedia } from "@/payload/constants/collections/defaultColumns"
import { anyone } from "@/payload/features/accessControl/anyone"
import { isAuthor } from "@/payload/features/accessControl/butAlsoAdmin/isAuthor"
import { isSelfAuthor } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/isSelfAuthor"
import { isAdmin } from "@/payload/features/accessControl/isAdmin"
import type { CollectionConfig } from 'payload'

export const media_posts: CollectionConfig = {
  slug: 'media_posts',
  upload: true,
  access: {
    create: isAuthor,
    read: anyone,
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
