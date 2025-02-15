import { isContentManager } from "@/payload/features/accessControl/butAlsoAdmin/isContentManager"
import { isSelfContentOwner } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/isSelfContentOwner"
import { isSelfContentOwnerOrPublished } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/OR/isSelfContentOwnerOrPublished"
import { isAdmin } from "@/payload/features/accessControl/isAdmin"
import { formatFieldToSlug } from "@/payload/utils/formatFieldToSlug"
import { getBaseUrl } from "@/utils/baseUrl"
import type { CollectionConfig } from 'payload'

export const tools: CollectionConfig = {
  slug: 'tools',
  access: {
    create: isContentManager,
    read: isSelfContentOwnerOrPublished,
    update: isSelfContentOwner,
    delete: isAdmin,
    readVersions: isSelfContentOwner,
  },
  admin: {
    group: "Content",
    defaultColumns: ['title', "contentOwner", 'score', "_status", "publishDate", "websiteUrl", "moreInfoUrl"],
    livePreview: {
      url: ({ data, req }) => `${getBaseUrl()}/api/draft-mode?secret=${process.env.DRAFT_MODE_SECRET}&slug=noslug&collection=tools&path=%2Fwonder-room%2Ftools`
    },
    preview: (data, { req }) => `${getBaseUrl()}/api/draft-mode?secret=${process.env.DRAFT_MODE_SECRET}&slug=noslug&collection=tools&path=%2Fwonder-room%2Ftools`,
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 10,
  },
  fields: [
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
          admin: {width: "14%"},
          min: 0,
          max: 5
        },
        {
          name: 'websiteUrl',
          type: 'text',
          admin: {width: "43%"}
        },
        {
          name: 'moreInfoUrl',
          type: 'text',
          admin: {width: "43%"}
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
              relationTo: "media_tools",
            }
          ]
        },
      ]
    },
    // Sidebar...
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        position: "sidebar"
      }
    },
    {
      name: 'publishedAt',
      label: 'publish date',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          displayFormat: "dd-mm-yyyy",
        }
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) return new Date()
            return 
          },
        ],
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: "media_tools",
      required: true,
      admin: { 
        width: "50%",
        position: "sidebar",
      }
    },
    {
      name: 'contentOwner',
      type: "relationship",
      relationTo: "users",
      admin: {
        readOnly: true,
        position: "sidebar"
      },
      hooks: {
        beforeChange: [
          async ({ req }) => req.user?.id
        ],
      },
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeChange: [formatFieldToSlug('title')]
      },
    },
  ],
}
      