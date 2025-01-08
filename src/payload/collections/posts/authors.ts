import { isAdmin } from "@/payload/auth/isAdmin"
import type { CollectionConfig } from 'payload'

export const authors: CollectionConfig = {
  slug: 'authors',
  access: {
    create: isAdmin,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    defaultColumns: ['name', "url", "relatedPosts", "updatedAt", "createdAt"],
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
      relationTo: "media_authors",
    },
    {
      name: 'relatedPosts',
      type: 'join', // https://payloadcms.com/docs/fields/join
      collection: 'posts',
      on: 'postAuthors',
    }
  ],
}
