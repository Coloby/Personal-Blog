// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from "@payloadcms/storage-s3"
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { payloadCollections } from "@/payload/constants/payloadConfig/payloadCollections"
import { Users } from '@/payload/collections/Users'
import { payloadMediaCollections } from "./constants/payloadConfig/payloadMediaCollections"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const payloadConfig = buildConfig({
  collections: payloadCollections,
  editor: lexicalEditor(),
  sharp,
  telemetry : false,
  secret: process.env.PAYLOAD_SECRET || '',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // autoLogin : process.env.ENABLE_AUTOLOGIN === 'true' && process.env.NODE_ENV === "development"
    //   ? {
    //       email: process.env.AUTOLOGIN_EMAIL,
    //       password: process.env.AUTOLOGIN_PASSWORD,
    //       // prefillOnly: true,
    //     }
    //   : false,
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // for security reasons
    upload: {
      limits: {
        fileSize: 6000000000, // 6GB, written in bytes
      },
    },
    defaultMaxTextLength: 8000,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.NODE_ENV === "development" ? process.env.DEV_DATABASE_URI : process.env.PROD_DATABASE_URI,
      // connectionString: process.env.PROD_DATABASE_URI,
    },
  }),
  plugins: [
    payloadCloudPlugin(),
    s3Storage({ // When enabled, this package will automatically set disableLocalStorage to true for each collection.
      // @ts-ignore
      collections: payloadMediaCollections,
      // @ts-ignore
      bucket: process.env.NODE_ENV === "development" ? process.env.DEV_S3_BUCKET : process.env.PROD_S3_BUCKET,
      config: {
        forcePathStyle: true, // fixes problems if you use supabase
        credentials: {
          // @ts-ignore
          accessKeyId: process.env.NODE_ENV === "development" ? process.env.DEV_S3_ACCESS_KEY_ID : process.env.PROD_S3_ACCESS_KEY_ID,
          // @ts-ignore
          secretAccessKey: process.env.NODE_ENV === "development" ? process.env.DEV_S3_SECRET_ACCESS_KEY : process.env.PROD_S3_SECRET_ACCESS_KEY,
        },
        region: process.env.NODE_ENV === "development" ? process.env.DEV_S3_REGION : process.env.PROD_S3_REGION,
        endpoint: process.env.NODE_ENV === "development" ? process.env.DEV_S3_ENDPOINT : process.env.PROD_S3_ENDPOINT,
      },
    }),
    seoPlugin({ // Adds a meta field group to every SEO-enabled collection or global, gives fields to let marketers write SEO related content, etc: https://payloadcms.com/docs/plugins/seo#core-features
      collections: [ // SEO-enabled collections
        // 'pages',
      ],
      // uploadsCollection: 'media/seo', // collection used to inject media-related seo tags for the collections mentioned above
      generateTitle: ({ doc }) => doc?.title || doc.metadata["post-title"] || "my title",
      generateDescription: ({ doc }) => doc?.excerpt ? doc.excerpt : "myDescription",
      generateImage: ({ doc }) => doc.metadata["postImage"]
      // generateURL: ({doc}) => doc?.url ? formatSlug(doc.url, "-") : doc.url || "https..."
    })
  ],
})

export default payloadConfig
