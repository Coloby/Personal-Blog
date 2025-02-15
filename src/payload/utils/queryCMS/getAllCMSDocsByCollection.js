import configPromise from '@/payload/payload.config';
import { getPayload } from "payload";

export const getAllCMSDocsByCollection = async (collection, otherOptions, otherFilters) => {
  const payload = await getPayload({ config : configPromise })
  const queryResult = await payload.find({
    collection: collection,
    limit: 100,
    where: {
      ...otherFilters
    },
    ...otherOptions
  });
  return queryResult
}