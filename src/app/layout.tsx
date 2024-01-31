"use client"

import "@/styles/global.css"
import "@/styles/structural/resetStyle.css"
import "@/styles/structural/themeColors.css"
import "@/styles/structural/themeModes.css"
import "@/styles/structural/marquee.css"
import "@/styles/tailwindcss.css"

import { useAtom } from "jotai"
import { Inter as interFont } from "next/font/google"
import { useState } from "react"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/header/Header"
import ScrollToTopBtn from "@/components/logic/ScrollToTopBtn"
import { themeModeAtom } from "@/stores/AtomStore"
import Image from "next/image"
import Link from "next/link"

const inter = interFont({ subsets : ["latin"] })

export default function RootLayout({ children } : { children: React.ReactNode}) {
  const [themeColor, setThemeColor] = useState("default")
  const [themeMode, setThemeMode] = useAtom(themeModeAtom)
  
  return (
    <html className={`${themeColor}-theme-color ${themeMode}-theme-mode ${themeMode} overflow-x-hidden `} lang="en" > 
      <body className={`${inter.className} ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}>
        <div className={`bg-body_shade  ss:h-auto text-primary_text_color transition-colors duration-1000 relative `}>
          {/* Backgrounds */}
          <div className="flexy w-screen h-full flex-col absolute items-start top-0 left-0 content-start ">
            <Image
              src="/assets/backgrounds/vapo_hero.jpg"
              width={1920}
              height={1080}
              className=" object-cover not-prose h-[1200px] left-0 transition-none z-0 w-screen"
              alt="logo"
              priority={true}
            />
            <div className="bg-gradient-to-t from-[#F91F5B] via-[#1F014B] to-[#1F014B] h-[1200px] w-full "></div>
            <div className="bg-gradient-to-t from-[#1F014B] via-[#1F014B] to-[#F91F5B] h-[1600px] w-full "></div>
            <div className="bg-gradient-to-t from-[#F91F5B] via-[#1F014B] to-[#1F014B] h-[1600px] w-full "></div>
            <div className="bg-gradient-to-t from-[#1F014B] via-[#1F014B] to-[#F91F5B] h-[1600px] w-full "></div>
          </div>
          <Header />
          <main className=" flex h-fit justify-center mt-10 px-[16px] min-h-screen pb-20 ss:min-h-screen relative ">{children}</main>
          <section className="mx-4 h-[800px] my-[60px] overflow-hidden relative flexy">
            <div className="w-full flexy absolute overflow-hidden">
              <Image
                src="/assets/dancing_cat.gif"
                width={800}
                height={400}
                className=" object-cover not-prose h-full w-full transition-none z-[6] max-h-[490px] max-w-[400px] mx-[2px]"
                alt="logo"
                priority={true}
              />
            </div>
            <div className="relative overflow-y-hidden flexy w-full h-full">
              <div className="overflow-hidden border-[2px] border-black rounded-sm flex flex-col  max-w-[800px] bg-[#eaf1f7]">
                <div className="rotate-[-10deg] mt-[300px] w-[120%] ml-[-30px] transform relative z-[6]         bg-gradient-to-br from-yellow-400 to-yellow-800 border border-black border-dashed outline-dashed">
                  <div className="marquee inline-flex items-center gap-x-6 overflow-hidden        whitespace-nowrap text-5xl font-bold leading-relaxed text-gray-50">Building great stuff - Loading the void... - Taking longer than expected - Still not finished - 🚧🚧🚧</div>
                </div>
                <div className=" w-[120%] ml-[-20px] transform relative z-[3]         bg-gradient-to-br from-yellow-400 to-yellow-800 border border-black border-dashed outline-dashed">
                  <div className="marquee2 inline-flex items-center gap-x-6 overflow-hidden        whitespace-nowrap text-5xl font-bold leading-relaxed text-gray-50">Work in progress - Under construction - Please wait... - Hey, it's you! 👷‍♀️ - Drink! - <span><Link href="you_won">You won!</Link></span> </div>
                </div>
                <div className="rotate-[4deg] w-[120%] ml-[-20px] transform relative z-[41]         bg-gradient-to-br from-yellow-400 to-yellow-800 border border-black border-dashed outline-dashed">
                  <div className="marquee inline-flex items-center gap-x-6 overflow-hidden        whitespace-nowrap text-5xl font-bold leading-relaxed text-gray-50">Please wait - It's going to be great - Suprise coming - 👷‍♂️ - Can it even fly? - Posture check</div>
                </div>
                <div className="rotate-[40deg] w-[200%] ml-[-200px] mt-[-50px] transform relative z-[6]         bg-gradient-to-br from-yellow-400 to-yellow-800 border border-black border-dashed outline-dashed">
                  <div className="marquee2 inline-flex items-center gap-x-6 overflow-hidden        whitespace-nowrap text-5xl font-bold leading-relaxed text-gray-50">New stuff is coming out! - 🏗 - Patience is a virtue - Great work takes longer - Are you having fun?</div>
                </div>
              </div>
            </div>
          </section>
          <ScrollToTopBtn />
          <Footer />
        </div>
      </body>
    </html>
  )
}
