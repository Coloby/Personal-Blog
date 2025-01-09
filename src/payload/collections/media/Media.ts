import { genericMedia } from "@/payload/constants/collections/defaultColumns"
import { anyone } from "@/payload/features/accessControl/anyone"
import { authenticated } from "@/payload/features/accessControl/authenticated"
import { isAdmin } from "@/payload/features/accessControl/isAdmin"
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    adminThumbnail: "t",
    imageSizes: [
      {
        name: 't',
        fit: 'cover',
        height: 150,
        width: 150,
        generateImageName: ({ originalName, height, sizeName, extension, width }) => {
          return `${sizeName}-${originalName}-${height}-${width}.${extension}`
        },
      },
    ],
  },
  access: {
    create: authenticated,
    read: anyone,
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
