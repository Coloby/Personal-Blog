import Link from "next/link"
// TODO add <meta name="darkreader-lock"> to metadata to disable dark reader in specific pages

export const metadata = {
  title : {
    default : "Home",
    template : "%s"
  },
  description : "Generated by create next app"
}

export default async function Home() {

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Link href="/sub_page" className=" text-xl">goSubPage</Link>
      <Link href="/posts_home" className="">Blog</Link>
    </div>
  )
}
