import { withPayload } from '@payloadcms/next/withPayload'
/** @type {import('next').NextConfig} */

const splittedLocalhost = process.env.LOCALHOST_URL.split(':')
const localhostPort = splittedLocalhost[splittedLocalhost.length - 1]

const splittedBaseUrl = process.env.BASE_URL.split("//")
const onlyBaseUrl = splittedBaseUrl[splittedBaseUrl.length - 1]

const nextConfig = {
  distDir: 'dist',
  images: {
    remotePatterns: [
      {
        hostname : 'picsum.photos', 
        protocol: 'https',
        port: '',
      },
      {
        hostname : 'images.unsplash.com', 
        protocol: 'https',
        port: '',
      },
      {
        hostname : 'localhost', 
        protocol: 'http',
        pathname: "/api/media/file/**",
        port: localhostPort,
      },
      {
        hostname : onlyBaseUrl, 
        protocol: 'https',
        pathname: "/api/media/file/**",
        port: "",
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
        permanent: true,
      },{
        source: '/robot',
        destination: '/robots.txt',
        permanent: true,
      },{
        source: '/robots',
        destination: '/robots.txt',
        permanent: true,
      },{
        source: '/articles',
        destination: '/blog',
        permanent: true,
      },{
        source: '/letters',
        destination: '/blog',
        permanent: true,
      },{
        source: '/me',
        destination: '/about',
        permanent: true,
      },{
        source: '/socials',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}

export default withPayload(nextConfig)
