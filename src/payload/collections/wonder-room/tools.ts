import type { CollectionConfig, FieldHook } from 'payload'

const format = (val: string): string =>
  val
    .replace(/ /g, '_')
    .replace(/[^\w-/]+/g, '')
    .toLowerCase()
const formatSlug = (fallback: string): FieldHook => ({ value, originalDoc, data }) => {
  if (typeof value === 'string') return format(value)
  const fallbackData = data?.[fallback] || originalDoc?.[fallback]
  if (fallbackData && typeof fallbackData === 'string') return format(fallbackData)

  return value
}

export const tools: CollectionConfig = {
  slug: 'tools',
  upload: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'score',
      type: 'number',
      required: true,
    },
    {
      name: 'publish_date',
      type: 'date',
      required: true,
    },
    {
      name: 'last_modified',
      type: 'date',
      required: true,
    },
    {
      name: 'websiteUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: "media",
      required: true,
    },
    {
      name: 'authors',
      type: 'array',
      fields: [
        {
          name: "name",
          type: "text",
          required: true
        },
        {
          name: "url",
          type: "text",
          required: true
        }
      ],
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: "Licenses",
          type: "array",
          fields: [
            {
              name: "name",
              type: "text"
            },
          ],
          required: true
        },
        {
          name: "Features",
          type: "array",
          fields: [
            {
              name: "name",
              type: "text"
            },
          ],
          required: true
        },
        {
          name: "Platforms",
          type: "array",
          fields: [
            {
              name: "name",
              type: "text"
            },
          ],
          required: true
        }
      ],
      required: true
    },
  ],
}
      
// websiteUrl
// score
// title: Activity Watch
// description: An automatic time tracker with customizable visualizations. It never shares your data, everything it's local! you can download plugins :)
// thumbnail: /assets/routes_specific/wonder-room/tools/activity_watch/1.png
// publishDate: 21/12/2024
// last_modified: 21/12/2024
// authors: [{name : Ed, url : /about}]
// tags:
//   - Licenses:
//     - "Free" 
//     - "Open source" 
//   - Features:
//     - "Privacy focused"
//     - "+Offline"
//   - Platforms:
//     - Self-hosted
//     - Multi platform