/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    domains: ['picsum.photos', "images.unsplash.com"],
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
