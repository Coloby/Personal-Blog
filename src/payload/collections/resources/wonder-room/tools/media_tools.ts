import type { CollectionConfig } from 'payload'

export const media_tools: CollectionConfig = {
  slug: 'media_tools',
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
