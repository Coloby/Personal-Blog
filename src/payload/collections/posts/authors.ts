import { anyone } from "@/payload/auth/anyone"
import { authenticated } from "@/payload/auth/authenticated"
import type { CollectionConfig } from 'payload'

export const authors: CollectionConfig = {
  slug: 'authors',
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    defaultColumns: ['name', "authorImage"],
    useAsTitle: 'name',
  },
  defaultPopulate: {
    name: true,
    url: true,
    authorImage: true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
    },
    {
      name: "authorImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: 'relatedPosts',
      type: 'join', // https://payloadcms.com/docs/fields/join
      collection: 'posts',
      on: 'postAuthors',
    }
  ],
}
