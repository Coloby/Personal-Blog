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

import { Media } from './payload/collections/Media'
import { posts } from "./payload/collections/posts/posts"
import { tools } from './payload/collections/resources/wonder-room/tools'
import { Users } from './payload/collections/Users'

import { authors } from "./payload/collections/posts/authors"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    autoLogin : process.env.ENABLE_AUTOLOGIN === 'true' && process.env.NODE_ENV === "development"
      ? {
          email: process.env.AUTOLOGIN_EMAIL,
          password: process.env.AUTOLOGIN_PASSWORD,
          // prefillOnly: true,
        }
      : false,
  },
  collections: [
    Users, 
    Media,
    tools,
    posts,
    authors,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        }
      },
      // @ts-ignore
      bucket: process.env.S3_BUCKET,
      config: {
        forcePathStyle: true, // fixes problems if you use supabase
        credentials: {
          // @ts-ignore
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          // @ts-ignore
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
    seoPlugin({ // Adds a meta field group to every SEO-enabled collection or global, gives fields to let marketers write SEO related content, etc: https://payloadcms.com/docs/plugins/seo#core-features
      collections: [ // SEO-enabled collections
        // 'pages',
      ],
      // uploadsCollection: 'media/seo', // collection used to inject media-related seo tags for the collections mentioned above
      generateTitle: ({ doc }) => doc?.title || doc.metadata["post-title"] || "my title",
      generateDescription: ({ doc }) => doc?.excerpt ? doc.excerpt : "myDescription",
      generateImage: ({ doc }) => doc.metadata["post-image"]
      // generateURL: ({doc}) => doc?.url ? formatSlug(doc.url, "-") : doc.url || "https..."
    })
  ],
})
