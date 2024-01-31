import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="px-[16px] text-center h-32 z-20 bg-footer_shade w-full flexy !absolute bottom-[-128px]">
      <div className="flexy flex-col gap-3">
        <p className="!text-primary_text_color">The whole website it's still in progress! 👷‍♂️</p>
        <Link href="credits">Credits</Link>
      </div>
    </footer>
  )
}

export default Footer