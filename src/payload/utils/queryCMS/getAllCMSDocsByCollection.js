import configPromise from '@/payload/payload.config';
import { getPayload } from "payload";

export const getAllCMSDocsByCollection = async (collection) => {
  const payload = await getPayload({ config : configPromise })
  return await payload.find({
    collection: collection,
    limit: 100,
    draft: false,
    where: {
      _status: {
        equals: 'published',
      },
    },
  });
}