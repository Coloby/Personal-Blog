Local API usage
  
  generateImage: async ({ doc }) => {
    const imageUrl = `/api/v1/collections/media/items/${doc.metadata["post-image"]}`;
    const payload = await getPayload({ config: configPromise })

    const result = await payload.findByID({
      collection: 'media', // required
      id: doc.metadata["post-image"], // required
      // depth: 2,
      // locale: 'en',
      // fallbackLocale: false,
      // user: dummyUser,
      // overrideAccess: false,
      // showHiddenFields: true,
    })
    // return `${process.env.NODE_ENV === "development" ? process.env.LOCALHOST_URL : process.env.BASE_URL}${result.url}`;
  }
