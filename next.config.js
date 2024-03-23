/** @type {import('next').NextConfig} */
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
    ]
  },
  async redirects() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
        permanent: true,
      },{
        source: '/sitemap',
        destination: '/sitemap.xml',
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

module.exports = nextConfig
