import React from "react"
import { ThemeModeBtn } from "../logic/ThemeModeBtn"
import Link from "next/link"
import Image from "next/image"

const Header = () => {

  return (
    <header className="between flex items-center justify-center">
      <Link href={"/"}>
        <Image
          src="/assets/media/logos/github.svg"
          width={50}
          height={50}
          // priority={true}
          // quality={100}
          className="h-[45px] w-[80px]"
          color="white"
          // quality={100}
          alt="logo"
          // sizes="(max-width: 31px) 100%"
        />
      </Link>
      <div className="flex items-center space-x-10 h-[64px]">
        <nav className=" space-x-10">
          <Link href="/sub_page" className="">goSubPage</Link>
          <Link href="/posts_home" className="">Blog</Link>
        </nav>
        <ThemeModeBtn />
      </div>
    </header>
  )
}

export default Header