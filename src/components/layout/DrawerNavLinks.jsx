import React from 'react'
import Link from "next/link"
import { ThemeModeBtn } from "../logic/ThemeModeBtn"

const DrawerNavLinks = ({
  blog = true,
  home = true,
}) => {
  return (
    <nav className=" flexy mt-10">
      <ul className="flex flex-col gap-4  justify-center items-center ">
        <li>
          {home && <Link href="/" className="">Home</Link>}
        </li>
        <li>
          {blog && <Link href="/blog" className="">Blog</Link>}
        </li>
        <li>
          <ThemeModeBtn />
        </li>
      </ul>
    </nav>
  )
}

export default DrawerNavLinks