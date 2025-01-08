import { isContentManager } from "@/payload/auth/butAlsoAdmin/isContentManager"
import { isSelfContentManager } from "@/payload/auth/butAlsoAdmin/isSelf/isSelfContentManager"
import { isAdmin } from "@/payload/auth/isAdmin"
import type { CollectionConfig } from 'payload'
import { genericMedia } from "@/payload/collections/data/defaultColumns"

export const media_downloads: CollectionConfig = {
  slug: 'media_downloads',
  upload: true,
  access: {
    create: isContentManager,
    read: isContentManager,
    update: isSelfContentManager,
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
