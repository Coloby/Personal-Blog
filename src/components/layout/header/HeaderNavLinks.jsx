import React from 'react'
import Link from "next/link"

const HeaderNavLinks = ({
  blog = true,
  home = true,
}) => {
  return (
    <nav className=" space-x-10 flexy ">
      <ul className={"sm:gap-8 items-center justify-center flex"}>
        <li>
          {home && <Link href="/" className=" hidden sm:block">Home</Link>}
        </li>
        <li>
          {blog && <Link href="/blog" className="">Blog</Link>}
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNavLinks