import { genericMedia } from "@/payload/constants/collections/defaultColumns"
import { anyone } from "@/payload/features/accessControl/anyone"
import { isContentManager } from "@/payload/features/accessControl/butAlsoAdmin/isContentManager"
import { isSelfMediaOwner } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/isSelfMediaOwner"
import { isAdmin } from "@/payload/features/accessControl/isAdmin"
import type { CollectionConfig } from 'payload'

export const media_downloads: CollectionConfig = {
  slug: 'media_downloads',
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
      {
        name: 'tCard',
        height: 680,
        width: 630,
        generateImageName: ({ originalName, height, sizeName, extension, width }) => {
          return `${sizeName}-${originalName}-${height}-${width}.${extension}`
        },
      },
    ],
  },
  access: {
    create: isContentManager,
    read: anyone,
    update: isSelfMediaOwner,
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
    // admin
    {
      name: 'mediaOwners',
      type: "relationship",
      relationTo: "users",
      hasMany: true,
      admin: {
        readOnly: true,
        position: "sidebar",
      },
      hooks: {
        beforeChange: [
          async ({ req }) => req.user?.id
        ],
      },
    },
  ],
}
