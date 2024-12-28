import { generatePreviewPath } from '@/payload/utils/generatePreviewPath'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  PreviewField
} from '@payloadcms/plugin-seo/fields'
import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', "authors", 'updatedAt', "createdAt"],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'posts',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'posts',
        req,
      }),
    useAsTitle: 'title',
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // for optimal live preview
      },
    },
    maxPerDoc: 20,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        hidden: true,
      },
      hooks: { // collection [hooks](https://payloadcms.com/docs/hooks/collections#beforeoperation)
        beforeChange: [
          async ({ data, originalDoc }) => data?.metadata["post-title"] // movearound to not show a title field on top of the tabs
        ]
      }
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Writing',
          fields: [
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
        },
        {
          name: "metadata",
          label: "Metadata",
          fields: [
            {  
              name: "post-title",
              label: "Title",
              type: "text",
              required: true,
            },
            {
              name: "post-image",
              label: "Image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "categories",
              label: "Categories",
              type: "select",
              hasMany: true,
              options: [
                "self-improvement",
                "tech",
              ]
            }
          ]
        },
        {
          name: 'seo',
          label: 'SEO',
          fields: [
            MetaTitleField({
              hasGenerateFn: true,
              overrides: {
                minLength: 10,
                maxLength: 50,
              }
            }),
            MetaDescriptionField({
              hasGenerateFn: true,
              overrides: {
                // admin : {
                //   components: {
                //     // beforeInput: null,
                //   },
                //   placeholder: "ffff",
                // },
                // label: "hhhhiiiiii",
                minLength: 10,
                maxLength: 85,
              }
            }),
            MetaImageField({
              hasGenerateFn: true,
              relationTo: 'media',
            }),
            PreviewField({
              titlePath: 'seo.title',
              descriptionPath: 'seo.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) return new Date()
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'authors',
      required: true
    },
  ],
}
