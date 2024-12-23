import Link from "next/link"

const page = () => {
  return (
    <div>
      <div className="flexy flex-col gap-4">
        <h1>YOU WOOOOOOOOOOOOOOOON!!!!! nothing :P, for now: 27/Jan/2024, </h1>
        <h1>Still nothing now: 28/Feb/2024</h1>
        <Link href={"/"}>Return home</Link>
      </div>
    </div>
  )
}

export const metadata = {
  title : "You won! Congrats!",
  description : "I still have to decide what you won though :P",
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