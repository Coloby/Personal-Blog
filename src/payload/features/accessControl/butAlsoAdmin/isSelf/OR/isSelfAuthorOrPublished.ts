import type { Access } from 'payload';
import configPromise from '@/payload/payload.config';
import { getPayload } from 'payload';

export const isSelfAuthorOrPublished: Access = async ({ data, req: { user } }) => {
  if (!user) return false; // Reject anyone not logged-in
  if (user?.roles?.includes('admin')) return true

  const payload = await getPayload({ config : configPromise })
  const author = await payload.find({
    collection: "authors",
    where: {
      "userAuthorOwner.id": { // https://payloadcms.com/docs/queries/overview#nested-properties
        equals: user?.id 
      },
    },
  })
  // @ts-ignore
  const isUserOwnsPost = author.docs[0]?.userAuthorOwner.id === user.id
  if (isUserOwnsPost) return true // if the owner of the doc has the same id of the current user, the current user is the owner of the doc, so allowed

  return { 
    _status: {
      equals: 'published',
    },
  }
}
