"use client"

import { Inter as interFont } from "next/font/google"
import { useAtom } from "jotai"
import { useState } from "react"
import { themeModeAtom } from "@/stores/AtomStore"
import ScrollToTopBtn from "@/components/logic/ScrollToTopBtn"
import { scrollbar } from "@/lib/tailwind-scrollbar/settings"

const inter = interFont({ subsets : ["latin"] })

const C_Layout = ({children}) => {
  const [themeColor, setThemeColor] = useState("default")
  const [themeMode, setThemeMode] = useAtom(themeModeAtom)


  return (
    <html className={`${themeColor}-theme-color ${themeMode}-theme-mode ${themeMode} overflow-x-hidden bg-body_shade ${scrollbar} `} lang="en" > 
      <body className={`${inter.className} ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}>
        {children}
        <ScrollToTopBtn />
      </body>
    </html>

  )
}

export default C_Layout