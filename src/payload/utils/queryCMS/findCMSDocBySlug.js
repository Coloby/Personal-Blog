import configPromise from '@/payload/payload.config';
import { getPayload } from 'payload';

const payload = await getPayload({ config : configPromise })
export const findCMSDocBySlug = async (collectionSlug, slug) => await payload.find({
  collection: collectionSlug,
  where: {
    slug: {
      equals: slug
    },
    _status: {
      equals: 'published',
    },
  },
});