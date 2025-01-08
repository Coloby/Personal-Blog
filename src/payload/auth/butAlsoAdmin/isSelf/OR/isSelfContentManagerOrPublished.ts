import type { Access } from 'payload';

// @ts-ignore
export const isSelfContentManagerOrPublished: Access = async ({ req: { user } }) => {
  if (!user) return false; 
  if (user?.roles?.includes('admin')) return true

  return { 
    or : [
      {
        "contentManager.id": { 
          exists: user.id, 
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
