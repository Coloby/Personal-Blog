import type { CollectionConfig } from 'payload'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const downloads: CollectionConfig = {
  slug: 'downloads',
  fields: [
    {
      type: "row",
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          // admin: {
          //   width: 38
          // }
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
          label: "score",
          type: "number",
          required: true,
          admin: {
            width: 5
          },
        },
      ]
    },
    {
      type: "row",
      fields: [
        {
          name: "download-thumbnail",
          label: "thumbnail",
          type: "upload",
          relationTo: "media"
        },
        {
          label: "Carousel-images",
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
                  relationTo: "media",
                }
              ]
            },
          ]
        },
      ]
    },
    {
      name: 'content',
      label: false,
      type: 'richText',
      required: true,
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
