import { formatSlug } from "@/payload/utils/formatSlug"
import type { CollectionConfig } from 'payload'

export const tools: CollectionConfig = {
  slug: 'tools',
  fields: [
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
      type: "row",
      fields: [
        {
          name: 'websiteUrl',
          type: 'text',
          // required: true,
        },
        {
          name: 'score',
          type: 'number',
          required: true,
        },
      ]
    },
    {
      name: "tags",
      type: "group",
      fields: [
        {
          name: "License",
          type: "select",
          hasMany: true,
          options: ["Free", "Freemium", "Paid", "Open source", "Closed source"]
        },
        {
          name: "Features",
          type: "select",
          hasMany: true,
          options: ["+Offline", "Lightweight", "Privacy focused", "High customizability"]
        },
        {
          name: "Platforms",
          type: "select",
          hasMany: true,
          options: ["Android", "iOS", "Mac", "Windows", "Linux", "Self-hosted", "Multi platform", "Web app"]
        },
      ]
    },
    {
      type: "row",
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: "media",
          required: true,
          admin: {
            width: "50%"
          }
        },
        {
          name: 'thumbnail',
          type: 'upload',
          relationTo: "media",
          required: true,
          admin: {
            width: "50%"
          }
        },
      ]
    },
    {
      label: "Carousel-images",
      type:"collapsible",
      fields: [
        {
          name: "carousel-images",
          label: "Images",
          type: "array",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
            }
          ]
        },
      ]
    },
    // Sidebar...
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title', "_")],
      },
    },
    {
      name: 'publish date',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
      