import type { CollectionConfig } from 'payload'
import { authenticated } from "../auth/authenticated"

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  auth: true,
  fields: [
    // Email, password, & confirm password added by default
    {
      name: "name",
      type: "text"
    },
    {
      name: 'notes',
      type: 'text',
    },
  ],
}
