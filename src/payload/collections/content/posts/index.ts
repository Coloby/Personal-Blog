import { isAuthor } from "@/payload/features/accessControl/butAlsoAdmin/isAuthor"
import { isSelfAuthor } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/isSelfAuthor"
import { isAdmin } from "@/payload/features/accessControl/isAdmin"
import { formatFieldToSlug } from "@/payload/utils/formatFieldToSlug"
import { isSelfAuthorOrPublished } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/OR/isSelfAuthorOrPublished"
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
import { getBaseUrl } from "@/utils/baseUrl"
import { autoFillAuthor } from "./hooks/autoFillAuthor"
// import { revalidateDelete, revalidatePost } from "./hooks/revalidatePost"

export const posts: CollectionConfig = {
  slug: 'posts',
  access: {
    create: isAuthor,
    read: isSelfAuthorOrPublished,
    update: isSelfAuthor,
    delete: isAdmin,
    readVersions: isSelfAuthor,
  },
  admin: {
    group: "Content",
    defaultColumns: ['title', "postAuthors", "publishedAt", 'updatedAt', "createdAt", "_status"],
    useAsTitle: 'title',
    livePreview: {
      url: ({ data, req }) => `${getBaseUrl()}/api/draft-mode?secret=${process.env.DRAFT_MODE_SECRET}&slug=${data.slug}&collection=posts&path=%2Fblog%2F${data.slug}`
      // url: `${getBaseUrl()}/api/draft-mode?secret=${process.env.DRAFT_MODE_SECRET}&slug=titleeeee&collection=posts&path=%2Fblog%2Ftitleeeee`,
    },
    preview: (data, { req }) => `${getBaseUrl()}/api/draft-mode?secret=${process.env.DRAFT_MODE_SECRET}&slug=${data.slug}&collection=posts&path=%2Fblog%2F${data.slug}`,
    // preview: (data, { req }) => `${getBaseUrl()}/blog/titleeeee`,
  },
  versions: { // creates _status :)
    drafts: {
      autosave: {
        interval: 100, // (in milliseconds) for better live preview/draft-mode UX https://payloadcms.com/docs/live-preview/server
      },
    },
    maxPerDoc: 20,
  },
  hooks: {
    // afterChange: [revalidatePost],
    // afterDelete: [revalidateDelete]
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        hidden: true,
      },
      hooks: { 
        beforeChange: [
          async ({ data }) => data?.metadata["postTitle"] // movearound to not show a title field on top of the tabs
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
                  minLength: 2, // to get inspiration for validation: C_Email_form.jsx
                  required: true,
                },
                {
                  name: "postImage",
                  label: "Image",
                  type: "upload",
                  relationTo: "media_posts",
                  // relationTo: ['media_posts', 'media'],
                  required: true,
                },
              ]
            },
            {  
              name: "description",
              type: "text",
              minLength: 8,
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
                required: true,
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
                maxLength: 110,
                required: true,
              }
            }),
            MetaImageField({
              hasGenerateFn: true,
              relationTo: 'media_posts',
              overrides: {
                required: true,
              }
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
          pickerAppearance: 'dayOnly',
          displayFormat: "dd-MM-yyyy",
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) return new Date()
            return 
          },
        ],
      },
      required: true
    },
    {
      name: 'postAuthors',
      type: "relationship",
      relationTo: "authors",
      hasMany: true,
      admin: {
        position: "sidebar"
      },
      hooks: {
        afterRead: [autoFillAuthor]
      },
      required: true
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [formatFieldToSlug('postTitle')]
      },
    },
    // invisible
    {
      name: 'populatedAuthors',
      type: 'array',
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
