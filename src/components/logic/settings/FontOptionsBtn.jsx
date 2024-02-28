"use client"
import { Slider } from "@/components/shadcn-ui/ui/slider"
import { useEffect, useState } from "react"
import { handleOnCHange } from "./SettingsAccordionBtn"


const FontOptionsBtn = () => {
  const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 18)
  
  useEffect(() => {
    handleOnCHange(localStorage.getItem('fontSize') ? localStorage.getItem('fontSize') : 18)
    setFontSize(localStorage.getItem('fontSize') ? localStorage.getItem('fontSize') : 18)
  }, [])

  return (
    <div>
      <div className="flex-col !justify-start !items-start gap-4 w-[270px] p-4 border-rose-600 border bg-[#1f014b] rounded-xs flexy">
        <div className="flexy !justify-start">
          <div className=" text-primary_text_color text-[24px] px-1">🅰</div>
          <div className="flexy text-lg">Font size: {fontSize}</div>
        </div>
        <div className="w-full h-[20px] ">
          <Slider className="w-full" type="number"
            defaultValue={[fontSize]} max={40} min={6} step={1}
            onValueChange={(e) => {
              handleOnCHange(e[0])
              setFontSize(e[0])
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default FontOptionsBtn