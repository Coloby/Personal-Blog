import { isContentManager } from "@/payload/features/accessControl/butAlsoAdmin/isContentManager"
import { isSelfContentManager } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/isSelfContentManager"
import { isSelfContentManagerOrPublished } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/OR/isSelfContentManagerOrPublished"
import { isAdmin } from "@/payload/features/accessControl/isAdmin"
import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const downloads: CollectionConfig = {
  slug: 'downloads',
  access: {
    create: isContentManager,
    read: isSelfContentManagerOrPublished,
    update: isSelfContentManager,
    delete: isAdmin,
  },
  admin: {
    group: "Content",
    defaultColumns: ['title', 'contentManager', 'score', 'downloadUrl', 'updatedAt', 'createdAt',],
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            position: "sidebar"
          }
        },
        {
          name: 'download url',
          type: 'text',
          required: true,
          // admin: {
          //   width: 38
          // },
          hooks: {
            beforeChange: [
              async ({ data, originalDoc }) => {
                console.log(`data:`, data)
              }
            ]
          }
        },
        {
          name: 'downloads_score',
          label: "Score",
          type: "number",
          required: true,
          min: 0,
          max: 5,
          admin: {
            width: 5
          },
        },
      ]
    },
    {
      name: 'description',
      type: 'text',
      // required: true,
    },
    {
      name: "download-thumbnail",
      label: "Thumbnail",
      type: "upload",
      relationTo: "media_downloads"
    },
    {
      label: "Carousel images",
      type:"collapsible",
      fields: [
        {
          name: "downloads-carousel-images",
          label: "Images",
          type: "array",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media_downloads",
            }
          ]
        },
      ]
    },
    // sidebar
    {
      name: 'contentManager',
      label: "Content Manager",
      type: "relationship",
      relationTo: "users",
      filterOptions: {
        roles : {
          equals : "contentManager"
        }
      },
      admin: {
        position: "sidebar"
      },
      required: true
    },
    {
      name: 'content',
      label: false,
      type: 'richText',
      required: true,
      admin: {
        position: "sidebar"
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            // BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ]
        },
      }),
    },
  ],
}
