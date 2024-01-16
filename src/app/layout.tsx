"use client"

import "@/styles/global.css"
import "@/styles/structural/resetStyle.css"
import "@/styles/structural/themeColors.css"
import "@/styles/structural/themeModes.css"
import "@/styles/tailwind.css"

import { useAtom } from "jotai"
import { Inter as interFont } from "next/font/google"
import { useState } from "react"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/header/Header"
import { themeModeAtom } from "@/stores/AtomStore"

const inter = interFont({ subsets : ["latin"] })

export default function RootLayout({ children } : { children: React.ReactNode}) {
  const [themeColor, setThemeColor] = useState("default")
  const [themeMode, setThemeMode] = useAtom(themeModeAtom)
  
  return (
    <html className={`${themeColor}-theme-color ${themeMode}-theme-mode ${themeMode} `} lang="en" > 
      <body className={`${inter.className} ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}>
        <div className={`bg-body_shade  ss:h-auto text-primary_text_color transition-colors duration-1000 relative `}>
          <Header />
          <main className=" flex h-fit justify-center mt-10 px-[16px] min-h-screen pb-20 ss:min-h-screen relative ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
