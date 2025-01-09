import type { CollectionAfterReadHook } from 'payload'

export const populateAuthors: CollectionAfterReadHook = async ({ doc, req, req: { payload } }) => {
  // if (doc?.authors === undefined) return doc
  if (doc?.postAuthors) {
    const authors = []

    for (const author of doc.postAuthors) {
      const authorCollection = await payload.findByID({
        id: typeof author === 'object' ? author?.id : author,
        collection: 'authors',
        depth: 0,
        req,
      })

      if (authorCollection) authors.push(authorCollection)
    }

    doc.populatedAuthors = authors.map((authorDoc) => ({
      name: authorDoc.name,
      url: authorDoc.url,
      authorImage: authorDoc.authorImage
    }))
  }

  return doc
}
