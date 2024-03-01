import Link from "next/link"

const page = () => {
  return (
    <div className="flexy gap-4 flex-col">
      🔨 Work In progress... 🔨
      <Link href={"/"}>Return home</Link>
    </div>
  )
}

export const metadata = {
  title : "Work In Progress - Please be patient",
  description : "This page is a work in progress!",
  robots: {
    index: false, // index this page
    follow: true, // index the links mentioned in this page
    nocache: false, // cache this page
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true, // index images
      'max-video-preview': -1, // video previews in Google search results
      'max-image-preview': 'large', // maximum image preview size in Google search results
      'max-snippet': -1, // preview/snippet of the page's content
    },
  },
}

export default page