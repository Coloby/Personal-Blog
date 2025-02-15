import type { Access } from 'payload';

// @ts-ignore
export const isSelfContentOwnerOrPublished: Access = async ({ req: { user } }) => {
  if (!user) return false; 
  if (user?.roles?.includes('admin')) return true

  return { // that's a query constraint https://youtu.be/DoPLyXG26Dg?t=432.
    or : [
      {
        "contentOwner.id": { 
          equals: user.id, 
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
