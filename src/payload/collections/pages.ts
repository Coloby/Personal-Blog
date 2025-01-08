import type { CollectionConfig } from 'payload'
import { isPublished } from "@/payload/auth/butAlsoAdmin/isPublished"
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  PreviewField
} from '@payloadcms/plugin-seo/fields'
import { generatePreviewPath } from "../utils/generatePreviewPath"
import { isAdmin } from "../auth/isAdmin"

export const pages: CollectionConfig = {
  slug: 'pages',
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: isPublished,
    update: isAdmin,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  // hooks: {
  //   afterChange: [revalidatePage],
  //   beforeChange: [populatePublishedAt],
  //   beforeDelete: [revalidateDelete],
  // },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 30,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        // {
        //   fields: [hero],
        //   label: 'Hero',
        // },
        // {
        //   fields: [
        //     {
        //       name: 'layout',
        //       type: 'blocks',
        //       blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock],
        //       required: true,
        //       admin: {
        //         initCollapsed: true,
        //       },
        //     },
        //   ],
        //   label: 'Content',
        // },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            MetaTitleField({
              hasGenerateFn: true,
            }),
            // MetaImageField({
            //   relationTo: 'media',
            // }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  
}
