import type { FieldHook } from 'payload'
import configPromise from '@/payload/payload.config';
import { getPayload } from 'payload';

export const autoFillAuthor : FieldHook = async ({ data, draft, context, req : { user }, req }) => {
  if (!data || !user || !draft || context?.isAuthorFilled || data?.postAuthors[0] !== undefined) return
  
  const payload = await getPayload({ config : configPromise })
  const author = await payload.find({
    collection: "authors",
    where: {
      "userAuthorOwner.name": {
        contains: user?.name 
      },
    },
    req
  })
  data.postAuthors[0] = author?.docs[0].id
  await req.payload.update({
    collection: "posts",
    id: data.id,
    data: {
      postAuthors : [author.docs[0].id]
    },
    draft: true, // also to skip validation
    overwriteExistingFiles: true,
    context: { // to avoid infinite loop https://payloadcms.com/docs/hooks/context#preventing-infinite-loops
      isAuthorFilled : true
    },
    req
  })
  return
}