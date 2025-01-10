import { isAdmin } from "@/payload/features/accessControl/isAdmin"
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
      type: "row",
      fields: [
        {
          name: 'userAuthor',
          label: "User owner",
          type: "relationship",
          relationTo: "users",
          admin: {
            width: "33%",
          },
          filterOptions: {
            roles : {
              equals : "author"
            }
          },
          required: true,
        },
        {

          name: 'name',
          type: 'text',
          admin: {width: "33%"},
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          admin: {width: "33%"},
        },
      ]
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
