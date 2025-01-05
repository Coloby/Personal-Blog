import type { CollectionConfig } from 'payload'

export const media_authors: CollectionConfig = {
  slug: 'media_authors',
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
