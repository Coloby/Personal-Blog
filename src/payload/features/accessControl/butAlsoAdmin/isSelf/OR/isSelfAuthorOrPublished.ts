import type { Access } from 'payload';

// @ts-ignore
export const isSelfAuthorOrPublished: Access = async ({ req: { user } }) => {
  if (!user) return false; // Reject anyone not logged-in
  if (user?.roles?.includes('admin')) return true

  return { // that's a query constraint https://youtu.be/DoPLyXG26Dg?t=432. If any other type of user, only provide access to themselves
    or : [
      {
        "postAuthors.id": { // if id of the document === user.id, return true
          exists: user.id, // https://payloadcms.com/docs/queries/overview#nested-properties
        },
      },
      {
        _status: {
          equals: 'published',
        },
      },
    ]
  }
}
