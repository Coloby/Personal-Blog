import type { CollectionConfig } from 'payload'

export const browser_extensions: CollectionConfig = {
  slug: 'browser_extensions',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
