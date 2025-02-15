import { isAdmin, isAdminField } from "@/payload/features/accessControl/isAdmin"
import type { CollectionConfig } from 'payload'
import { isSelfAuthor } from "../features/accessControl/butAlsoAdmin/isSelf/isSelfAuthor"

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', "roles", "email", "notes", 'adminNotes', "createdAt", "updatedAt"],
  },
  access: {
    create: isAdmin,
    read: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true
      return {
        "name" : { 
          equals: user?.name,
        }
      }
    },
    update: isAdmin,
    delete: isAdmin,
    unlock: isAdmin,
    // admin: isAdmin,
  },
  auth: {
    tokenExpiration: 7200, // (7200 = 2h) How many seconds to keep the user logged in 
    lockTime: 900 * 1000, // (in milliseconds. 900 * 1000 = 15m) Time period to allow the max login attempts 
    maxLoginAttempts: 4, // Automatically lock a user out after X amount of failed logins
    // verify: true, // Require email verification before being allowed to authenticate
  },
  fields: [
    // Email, password, & confirm password added by default
    {
      name: "name",
      type: "text"
    },
    {
      name: 'roles',
      saveToJWT: true, // so we can use from `req.user`
      type: 'select',
      hasMany: true,
      defaultValue: ['author'],
      options: [
        // extra permissions for...
        {
          label: 'Admin', // anything but not Owner
          value: 'admin',
        },
        {
          label: "Author", // posts-related
          value: 'author',
        },
        {
          label: "Content manager", // wonder-room & downloads
          value: 'contentManager',
        },
        {
          label: "Owner", // posts-related
          value: 'owner',
        },
      ],
    },
    {
      name: 'notes',
      type: 'text',
      access: {
        update: ({ req: { user } }) => {
          if (user) return true
          return false
        },
      }
    },
    {
      name: "adminNotes",
      type: "text",
      access: {
        read: isAdminField
      }
    }
  ],
}
