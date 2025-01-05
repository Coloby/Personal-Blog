import { authenticated } from "@/payload/auth/authenticated"
import { authenticatedOrPublished } from "@/payload/auth/authenticatedOrPublished"
import { formatTitleToSlug } from "@/payload/utils/formatTitleToSlug"
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
  access: {
    create: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    group: "Content",
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
  hooks: {
    // afterRead: [populateAuthors],
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
          async ({ data, originalDoc }) => data?.metadata["postTitle"] // movearound to not show a title field on top of the tabs
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
              type: "row",
              fields: [
                {  
                  name: "postTitle",
                  label: "Title",
                  type: "text",
                  required: true,
                },
                {
                  name: "postImage",
                  label: "Image",
                  type: "upload",
                  relationTo: "media_posts",
                  required: true,
                },
              ]
            },
            {  
              name: "description",
              type: "text",
              required: true,
            },
            {
              name: "postImageCaption",
              label: "Image caption",
              type: "text"
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
              relationTo: 'media_posts',
            }),
            PreviewField({
              titlePath: 'seo.title',
              descriptionPath: 'seo.description',
            }),
          ],
        },
      ],
    },
    // sidebar
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: "DD-MM-YYYY",
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
      name: 'postAuthors',
      type: "relationship",
      relationTo: "authors",
      hasMany: true,
      admin: {
        position: "sidebar"
      },
      required: true
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [formatTitleToSlug('postTitle')]
      },
    },
    // invisible
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: "name",
          type: "text"
        },
        {
          name: "url",
          type: "text"
        },
        {
          name: "authorImage",
          type: "upload",
          relationTo: "media_authors",
        },
        {
          name: 'id',
          type: 'text',
        },
      ],
    },
  ],
}
