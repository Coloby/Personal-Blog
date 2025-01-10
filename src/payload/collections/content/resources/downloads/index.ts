import { isContentManager } from "@/payload/features/accessControl/butAlsoAdmin/isContentManager"
import { isSelfContentOwner } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/isSelfContentOwner"
import { isSelfContentOwnerOrPublished } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/OR/isSelfContentOwnerOrPublished"
import { isAdmin } from "@/payload/features/accessControl/isAdmin"
import { formatFieldToSlug } from "@/payload/utils/formatFieldToSlug"
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
    read: isSelfContentOwnerOrPublished,
    update: isSelfContentOwner,
    delete: isAdmin,
    readVersions: isSelfContentOwner,
  },
  admin: {
    group: "Content",
    defaultColumns: ['title', 'contentOwner', 'score', "_status", 'downloadUrl', 'updatedAt', 'createdAt',],
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
      type: "row",
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'download url',
          type: 'text',
          required: true,
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
      required: true
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
