import { isAdmin } from "@/payload/features/accessControl/isAdmin"
import type { CollectionConfig } from 'payload'

export const authors: CollectionConfig = {
  slug: 'authors',
  access: {
    create: isAdmin,
    read: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true
      return {
        "name" : { 
          equals: user?.name,
        }
      }
    },
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    defaultColumns: ['name', "userAuthorOwner", "url", "relatedPosts", "updatedAt", "createdAt"],
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
          name: 'userAuthorOwner',
          label: "User owner",
          type: "relationship",
          relationTo: "users",
          admin: {
            width: "33%",
          },
          filterOptions: {
            or : [
              {
                roles : {
                  equals : "author"
                }
              },
              {
                roles : {
                  equals : "admin"
                }
              },
            ]
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
