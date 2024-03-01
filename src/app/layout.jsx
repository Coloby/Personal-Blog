import "@/styles/global.css"
import "@/styles/structural/marquee.css"
import "@/styles/structural/resetStyle.css"
import "@/styles/tailwindcss.css"

import "@/styles/structural/colors/textColors.css"
import "@/styles/structural/colors/themeColors.css"
import "@/styles/structural/colors/themeModes.css"

// import "@/styles/structural/lib/rehypePrettyCode.css"
// import "@/styles/structural/lib/shadcnStuff.css"

import C_Layout from "@/components/clientComps/C_Layout"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/header/Header"

export default function RootLayout({ children }) {
  
  return (
    <C_Layout>
      <div className={`bg-body_shade  ss:h-auto text-primary_text_color transition-colors duration-1000 relative `}>
        <Header />
        <main className=" flex h-fit justify-center mt-[100px] px-[16px] pb-[320px] min-h-screen !w-full ">{children}</main>
        <Footer />
      </div>
    </C_Layout>
  )
}

// add <meta name="darkreader-lock"> metadata to disable dark reader in specific pages
export const metadata = {
  generator: 'Next.js',
  applicationName: `Ed's personal website`,
  authors: [{ name: 'Ed', url: 'edondigital.netlify.app' }], // mostly content creators and writers
  creator: 'Ed', // contributors that are not only content creators or writers
  publisher: 'Ed', // who makes the content avaible
  icons: { // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#icon
    icon: '/assets/favicons/favicon.ico',
    apple: '/assets/favicons/apple-touch-icon.png',
  },
  formatDetection: { // to prevent browser hyperlinking these automatically
    email: false,
    address: false,
    telephone: false,
  },
  // metadataBase & alternates - essential when you have languages in the route like /en-US
    metadataBase: new URL('https://edondigital.netlify.app/'),
    alternates: {
      canonical: '/', // still useful even if the content is the original one but essential if it's a duplicate
    },
  openGraph: {
    title : {
      default : "Ed's personal website",
      template : "%s" // template: '%s | Acme'    outputs based on specified title but adds | Acme. E.g: Output: <title>About | Acme</title>
    },
    description: 'My personal website to share anything useful about myself',
    url: 'https://edondigital.netlify.app/',
    siteName: `Ed's corner`,
    images: [
      {
        url: '/assets/routes_specific/home/white_cat.png',
        width: 800,
        height: 600,
        alt: '',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: `Ed's personal website`,
    description: 'My personal website to share anything useful about myself',
    card: 'summary_large_image',
    images: {
      url: '/assets/routes_specific/home/white_cat.png',
      alt: '',
    },
    // needs Twitter Developer Account
      // siteId: '39819038120933981903812093',
      // creatorId: '39819038120933981903812093',
      // creator: '@nextjs',
      // app: {
      //   name: 'twitter_app',
      //   id: {
      //     iphone: 'twitter_app://iphone',
      //     ipad: 'twitter_app://ipad',
      //     googleplay: 'twitter_app://googleplay',
      //   },
      //   url: {
      //     iphone: 'https://iphone_url',
      //     ipad: 'https://ipad_url',
      //   },
      // },
  },
  // themeColor: "#9333ea", // gives theme color to discord social card
  // referrer: 'origin-when-cross-origin', // handles how many info the referer header will send when user navigates
  // keywords: ['Next.js', 'React', 'JavaScript'],
}