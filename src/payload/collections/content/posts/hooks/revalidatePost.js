
import { revalidatePath, revalidateTag } from 'next/cache'
import { getURL } from "next/dist/shared/lib/utils"
// import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, CollectionBeforeChangeHook } from 'payload'
// import type { Post } from '@/payload/payload-types'


export const revalidatePost = ({doc, previousDoc, req: { payload, context },}) => {
  // console.log(`doccec:`, doc)
  if (context.disableRevalidate) return doc
  const path1 = `/blog/${doc.slug}`
  const path2 = `/api/draft-mode?secret=${process.env.DRAFT_MODE_SECRET}&slug=${doc.slug}&collection=posts&path=%2Fblog%2F${doc.slug}`
  const path3 = `http://localhost:3010/api/draft-mode?secret=${process.env.DRAFT_MODE_SECRET}&slug=${doc.slug}&collection=posts&path=%2Fblog%2F${doc.slug}`
  const path = `http://localhost:3010/blog/${doc.slug}`
  payload.logger.info(`Revalidating post at path: ${path}`)
  revalidatePath(path, "page")
  revalidatePath(path1, "page")
  revalidatePath(path2, "page")
  revalidatePath(path3, "page")
  revalidatePath(path)
  revalidatePath(path1)
  revalidatePath(path2)
  revalidatePath(path3)
  // revalidateTag('blog-sitemap')

  // if (doc._status === 'published') {
  //   const path = `/blog/${doc.slug}`
  //   payload.logger.info(`Revalidating post at path: ${path}`)
  //   revalidatePath(path)
  //   revalidateTag('blog-sitemap')
  // }
  // // If the post was previously published, we need to revalidate the old path
  // if (previousDoc._status === 'published' && doc._status !== 'published') {
  //   const oldPath = `/blog/${previousDoc.slug}`
  //   payload.logger.info(`Revalidating old post at path: ${oldPath}`)
  //   revalidatePath(oldPath)
  //   revalidateTag('blog-sitemap')
  // }
  return doc
}

export const revalidateDelete = ({ doc, req: { context } }) => {
  // console.log(`doccceawqqw:`, doc)
  if (context.disableRevalidate) return doc
  
  const path = `/blog/${doc?.slug}`
  revalidatePath(path)
  revalidateTag('blog-sitemap')

  return doc
}
