import { genericMedia } from "@/payload/constants/collections/defaultColumns"
import { anyone } from "@/payload/features/accessControl/anyone"
import { isAuthor } from "@/payload/features/accessControl/butAlsoAdmin/isAuthor"
import { isSelfAuthor } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/isSelfAuthor"
import { isSelfMediaOwner } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/isSelfMediaOwner"
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
      filterOptions: {
        roles : {
          equals : "author"
        }
      },
      hooks: {
        beforeChange: [
          async ({ req }) => {
            console.log(`req:`, req.user)
            return req.user?.id
          }
        ],
      },
    },
  ],
}
