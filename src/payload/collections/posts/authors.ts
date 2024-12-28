import type { CollectionConfig } from 'payload'

export const authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'author',
  },
  fields: [
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'website link',
      type: 'text',
    },
    {
      name: "author image",
      type: "upload",
      relationTo: "media",
    }
  ],
}
