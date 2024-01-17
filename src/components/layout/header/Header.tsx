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

  return (
    <header className=" w-full flexy sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 gap-12 h-[64px] max-w-fit bg-box_shade rounded-lg mt-2">
        <Link href={"/"}>
          <HeaderLogo color="text-primary_text_color" width={40} height={36} />
          {/* <Image
            src="/assets/media/logos/github.svg"
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
          {/* <nav className=" space-x-10 md:flex hidden justify-center items-center "> */}
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
                {/* <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader> */}
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