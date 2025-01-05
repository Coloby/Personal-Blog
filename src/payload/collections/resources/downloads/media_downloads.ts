import type { CollectionConfig } from 'payload'

export const media_downloads: CollectionConfig = {
  slug: 'media_downloads',
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
