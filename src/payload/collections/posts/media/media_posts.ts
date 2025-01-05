import type { CollectionConfig } from 'payload'

export const media_posts: CollectionConfig = {
  slug: 'media_posts',
  upload: true,
  access: {
    read: () => true,
  },
  admin: {
    group: "Media",
    defaultColumns: ["fileName", 'alt', "CreatedAt"],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
