"use client"

import { Switch } from "@/components/shadcn-ui/ui/switch"
import { useEffect, useState } from "react"

const TextDecorationsBtn = () => {
  const handleCheck = (isActive) => {
    console.log(`isActive:`, isActive)
    const links = document.querySelectorAll("article a")
    const italics = document.querySelectorAll("article em")
    const bolds = document.querySelectorAll("article strong")
    if (!isActive) {
      // links.forEach((link) => {
      //   link.classList.add("!text-primary_text_color", "prose-a:!text-primary_text_color")
      // })
      italics.forEach((italic) => {
        italic.classList.add("!text-primary_text_color", "prose-em::!text-primary_text_color");
      });
      bolds.forEach((bold) => {
        bold.classList.add("!text-primary_text_color", "prose-strong::!text-primary_text_color");
      });
    } else {
      italics.forEach((italic) => {
        italic.classList.remove("!text-primary_text_color", "prose-em::!text-primary_text_color");
      });
      bolds.forEach((bold) => {
        bold.classList.remove("!text-primary_text_color", "prose-strong::!text-primary_text_color");
      });
    }
    localStorage.setItem('isActive', isActive);
  }

  useEffect(() => {
    if (localStorage.getItem('isActive')) {
      handleCheck(localStorage.getItem('isActive') === 'true')
    }
  }, [])

  return (
    <div className="flex-col not-prose !justify-start !items-start gap-4 w-[270px] p-4 border-rose-600 border bg-[#1f014b] rounded-xs flexy">
      <div className="flexy !justify-start w-full">
        <div className="text-[24px] px-1 flexy">🎨</div>
        <div className="flexy !justify-between w-full">
          <div className="flexy gap-auto not-prose text-lg">Text decorations</div>
          <span className="flexy">
            <Switch defaultChecked={localStorage.getItem('isActive') === "true"} onCheckedChange={(e) => handleCheck(e)} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default TextDecorationsBtn