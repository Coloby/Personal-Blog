import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
 
export const metadata: Metadata = {
  title : "subPage"
}

const Page = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center justify-between">
      <Link href="/" className=" text-secondary">return home</Link>
    </div>
  )
}

export default Page