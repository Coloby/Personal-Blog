import { genericMedia } from "@/payload/constants/collections/defaultColumns"
import { anyone } from "@/payload/features/accessControl/anyone"
import { isAuthor } from "@/payload/features/accessControl/butAlsoAdmin/isAuthor"
import { isSelfAuthor } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/isSelfAuthor"
import { isAdmin } from "@/payload/features/accessControl/isAdmin"
import type { CollectionConfig } from 'payload'

export const media_authors: CollectionConfig = {
  slug: 'media_authors',
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
