"use client"

import "@/styles/structural/resetStyle.css"
import "@/styles/structural/themeColors.css"
import "@/styles/structural/themeModes.css"
import "@/styles/tailwind.css"
import "@/styles/global.css"

import { Inter as interFont} from "next/font/google"
import { useEffect, useState } from "react"
import { useAtom } from "jotai"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { themeModeAtom } from "@/stores/AtomStore"

const inter = interFont({ subsets : ["latin"] })

export default function RootLayout({ children } : { children: React.ReactNode}) {
  const [themeColor, setThemeColor] = useState("default")
  const [themeMode, setThemeMode] = useAtom(themeModeAtom)
  const [env, setEnv] = useState("production")

  useEffect(() => {
    setEnv(process.env.NODE_ENV);
  }, [])

  return (
    <html lang="en" className={`${themeColor}-theme-color ${themeMode}-theme-mode`}>
      <body className={`${inter.className} ${env === "development" ? "debug-screens" : ""} bg-body_shade px-[14px] min-h-screen text-primary_text_color`}>
        <Header />
        <main className="flex justify-center mt-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
