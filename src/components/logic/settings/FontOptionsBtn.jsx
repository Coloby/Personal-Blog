"use client"
import { Input } from "@/components/shadcn-ui/ui/input"
import { Slider } from "@/components/shadcn-ui/ui/slider"
import { useEffect, useState } from "react"


const FontOptionsBtn = () => {
  const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 18)
  const handleOnCHange = (fontSize) => {
    const paragraphs = document.querySelectorAll("article p")
    const lis = document.querySelectorAll("article li")
    paragraphs.forEach((paragraph) => {
      paragraph.style.fontSize = `${fontSize}px`;
    });
    lis.forEach((li) => {
      li.style.fontSize = `${fontSize}px`;
    });
    localStorage.setItem('fontSize', fontSize);
    setFontSize(fontSize)
  }
  
  useEffect(() => {
    if (localStorage.getItem('fontSize')) {
      handleOnCHange(localStorage.getItem('fontSize'))
    }
  },[])

  return (
    <div>
      <div className="flex-col !justify-start !items-start gap-4 w-[270px] p-4 border-rose-600 border bg-[#1f014b] rounded-xs flexy">
        <div className="flexy !justify-start">
          <div className=" text-primary_text_color text-[24px] px-1">🅰</div>
          <div className="flexy text-lg">Font size: {fontSize}</div>
        </div>
        <div className="w-full h-[20px] ">
          <Slider className="w-full" type="number"
            defaultValue={[fontSize]} max={40} step={1}
            onValueChange={(e) => {handleOnCHange(e[0])}}
          />
        </div>
      </div>
    </div>
  )
}

export default FontOptionsBtn