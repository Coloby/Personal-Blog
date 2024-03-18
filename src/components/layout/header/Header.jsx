"use client"

import DrawerNavLinks from "@/components/layout/DrawerNavLinks"
import HeaderNavLinks from "@/components/layout/header/HeaderNavLinks"
import HeaderLogo from "@/components/ui/logos/HeaderLogo"
import Link from "next/link"
import { ThemeModeBtn } from "../../logic/ThemeModeBtn"
// @ts-ignore
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/shadcn-ui/Drawer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn-ui/accordion"
// @ts-ignore
import Headroom from "react-headroom"
import SettingsBtn from "@/components/logic/settings/SettingsBtn"
import C_ShareBtns from "@/components/clientComps/C_ShareBtns"

const Header = () => {
  // w-[250px] h-[70px] px-4 bg-gradient-to-r from-fuchsia-950 via-pink-800 to-primary rounded-[84px] shadow border-blue-900 justify-between items-center inline-flex
  return (
    <Headroom style={{ zIndex: "999"}} upTolerance={10} downTolerance={20} className="pointer-events-none">
    <header className=" w-full flexy sticky top-0 ">
      <div className=" border-2 border-primary px-4 gap-12 flexy !h-[72px] max-w-fit mt-4 rounded-tl-[34px] rounded-br-[34px]">
        <div className=" pointer-events-all flex items-center justify-between px-4 gap-12 h-[64px] max-w-fit bg-secondary rounded-tl-[34px] rounded-br-[34px]">
          <Link href={"/"}>
            <HeaderLogo color="text-primary_text_color" width={40} height={36} />
          </Link>
          <div className="">
            <HeaderNavLinks />
          </div>
          <div className="flex gap-4">
            <div className="hidden sm:flexy">
              <ThemeModeBtn />
            </div>
            {/* drawer */}
            <div className="">
              <Sheet>
                <SheetTrigger className="flexy">
                  <svg className="sm:hidden h-[40px] w-[36px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </SheetTrigger>
                <SheetContent className=" ss:w-[200px] dark-theme-mode not-prose text-primary_text_color">
                  <DrawerNavLinks />
                  <Accordion type="single" collapsible defaultValue={"item-idk"} className="flex flex-col gap-4">
                    {/* Me */}
                    <AccordionItem value={"-"} className="border border-primary rounded-xs py-2">
                      <AccordionTrigger className="flexy"><div className="text-center ml-2 !my-0">Me</div></AccordionTrigger>
                      <AccordionContent>
                        <div className="mt-2 flex flex-col">
                          <Link href={"/about"} className="flexy text-base mt-2 py-2 hover:bg-primary w-full"><div>About</div></Link>
                          <Link href={"/now"} className="flexy text-base mt-2 py-2 hover:bg-primary w-full"><div>Now</div></Link>
                          <Link href={"/interests"} className="flexy text-base mt-2 py-2 hover:bg-primary w-full"><div>Interests</div></Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    {/* Resources */}
                    <AccordionItem value={"-3"} className="border border-primary rounded-xs py-2">
                      <AccordionTrigger className="flexy"><div className="text-center ml-2 !my-0">Resources</div></AccordionTrigger>
                      <AccordionContent>
                        <div className="mt-2 flex flex-col">
                          <Link href={`https://edongarden.netlify.app`} target="_blank" rel="noopener noreferrer" className="flexy text-base mt-2 py-2 hover:bg-primary w-full"><div>Notes</div></Link>
                          <Link href={"/downloads"} className="flexy text-base mt-2 py-2 hover:bg-primary w-full"><div>Downloads</div></Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="mt-10 flexy"><ThemeModeBtn /></div>
                  <div className="w-full flex mt-20 justify-center items-center gap-4">
                    <SettingsBtn />
                    <C_ShareBtns />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
    </Headroom>
  )
}

export default Header