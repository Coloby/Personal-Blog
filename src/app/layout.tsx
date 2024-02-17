"use client"

import "@/styles/global.css"
import "@/styles/structural/marquee.css"
import "@/styles/structural/resetStyle.css"
import "@/styles/tailwindcss.css"

import "@/styles/structural/colors/themeColors.css"
import "@/styles/structural/colors/themeModes.css"
import "@/styles/structural/colors/textColors.css"

// import "@/styles/structural/lib/rehypePrettyCode.css"
// import "@/styles/structural/lib/shadcnStuff.css"

import { useAtom } from "jotai"
import { Inter as interFont } from "next/font/google"
import { useState } from "react"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/header/Header"
import ScrollToTopBtn from "@/components/logic/ScrollToTopBtn"
import { themeModeAtom } from "@/stores/AtomStore"

const inter = interFont({ subsets : ["latin"] })

export default function RootLayout({ children } : { children: React.ReactNode}) {
  const [themeColor, setThemeColor] = useState("default")
  const [themeMode, setThemeMode] = useAtom(themeModeAtom)
  
  return (
    <html className={`${themeColor}-theme-color ${themeMode}-theme-mode ${themeMode} overflow-x-hidden `} lang="en" > 
      <body className={`${inter.className} ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}>
        <div className={`bg-body_shade  ss:h-auto text-primary_text_color transition-colors duration-1000 relative `}>
          <Header />
          <main className=" flex h-fit justify-center mt-[100px] px-[16px] pb-[320px] min-h-screen !w-full ">{children}</main>
          <ScrollToTopBtn />
          <Footer />
        </div>
      </body>
    </html>
  )
}
