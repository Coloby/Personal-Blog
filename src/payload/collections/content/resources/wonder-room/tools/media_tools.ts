import { genericMedia } from "@/payload/constants/collections/defaultColumns"
import { anyone } from "@/payload/features/accessControl/anyone"
import { isContentManager } from "@/payload/features/accessControl/butAlsoAdmin/isContentManager"
import { isSelfContentManager } from "@/payload/features/accessControl/butAlsoAdmin/isSelf/isSelfContentManager"
import { isAdmin } from "@/payload/features/accessControl/isAdmin"
import type { CollectionConfig } from 'payload'

export const media_tools: CollectionConfig = {
  slug: 'media_tools',
  upload: true,
  access: {
    create: isContentManager,
    read: anyone,
    update: isSelfContentManager,
    delete: isAdmin,
  },
  admin: {
    group: "Media",
    defaultColumns: genericMedia,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
