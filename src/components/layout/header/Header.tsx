"use client"

import HeaderLogo from "@/components/ui/logos/HeaderLogo"
import Link from "next/link"
import { ThemeModeBtn } from "../../logic/ThemeModeBtn"
import HeaderNavLinks from "@/components/layout/header/HeaderNavLinks"
import DrawerNavLinks from "@/components/layout/DrawerNavLinks"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn-ui/Drawer"


const Header = () => {
  // w-[250px] h-[70px] px-4 bg-gradient-to-r from-fuchsia-950 via-pink-800 to-rose-600 rounded-[84px] shadow border-blue-900 justify-between items-center inline-flex
  return (
    <header className=" w-full flexy sticky top-0 z-50">
      <div className=" flex items-center justify-between px-4 gap-12 h-[64px] max-w-fit bg-gradient-to-r from-fuchsia-950/90 via-pink-800/90 to-rose-600/90 rounded-[84px] mt-4">
        <Link href={"/"}>
          <HeaderLogo color="text-primary_text_color" width={40} height={36} />
          {/* <Image
            src="/assets/logos/github.svg"
            width={80}
            height={36}
            // priority={true}
            // quality={100}
            className="h-[36px] w-[80px] filter brightness-0 text-white fill-white"
            color="white"
            // quality={100}
            alt="logo"
            // sizes="(max-width: 31px) 100%"
          /> */}
        </Link>
        <div className="">
          <HeaderNavLinks />
        </div>
        <div className="flex gap-4">
          <div className="hidden sm:flexy">
            <ThemeModeBtn />
          </div>
          <div className="">
            <Sheet>
              <SheetTrigger className="flexy">
                <svg className="sm:hidden h-[40px] w-[36px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </SheetTrigger>
              <SheetContent className=" w-[200px] dark-theme-mode not-prose text-primary_text_color">
                <DrawerNavLinks />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header