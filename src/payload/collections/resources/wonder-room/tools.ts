import { anyone } from "@/payload/auth/anyone"
import { authenticated } from "@/payload/auth/authenticated"
import { formatSlug } from "@/payload/utils/formatSlug"
import type { CollectionConfig } from 'payload'

export const tools: CollectionConfig = {
  slug: 'tools',
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
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
          name: 'score',
          type: 'number',
          required: true,
          admin: {width: "10%"}
        },
        {
          name: 'websiteUrl',
          type: 'text',
          admin: {width: "45%"}
        },
        {
          name: 'moreInfoUrl',
          type: 'text',
          admin: {width: "45%"}
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
          options: ["Free", "Freemium", "Paid", "Open source", "Closed source"],
          required: true,
        },
        {
          name: "Features",
          type: "select",
          hasMany: true,
          options: ["+Offline", "Lightweight", "Privacy focused", "High customizability"],
          required: true,
        },
        {
          name: "Platforms",
          type: "select",
          hasMany: true,
          options: ["Android", "iOS", "Mac", "Windows", "Linux", "Self-hosted", "Multi platform", "Web app"],
          required: true,
        },
      ]
    },
    // {
    //   type: "row",
    //   fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: "media",
          required: true,
          admin: { width: "50%" }
        },
    //   ]
    // },
    {
      label: "Carousel-images",
      type:"collapsible",
      fields: [
        {
          name: "imgs",
          label: "Images (first will be the thumbnail)",
          required: true,
          type: "array",
          fields: [
            {
              name: "image",
              label: "",
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
      name: 'publishDate',
      label: 'publish date',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
      