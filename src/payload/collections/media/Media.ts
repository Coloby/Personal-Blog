import type { CollectionConfig } from 'payload'
import { genericMedia } from "@/payload/collections/data/defaultColumns"
import { authenticated } from "@/payload/auth/authenticated"
import { isAdmin } from "@/payload/auth/isAdmin"

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  access: {
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: isAdmin
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
