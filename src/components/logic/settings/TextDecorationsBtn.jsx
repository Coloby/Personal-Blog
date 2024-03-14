"use client"

import { Switch } from "@/components/shadcn-ui/ui/switch"
import { useEffect } from "react"
import { handleCheck } from "./SettingsAccordionBtn"

const TextDecorationsBtn = () => {
  useEffect(() => {
    handleCheck(localStorage.getItem('isActive') === 'true')
  }, [])

  return (
    <div className="flex-col not-prose !justify-start !items-start gap-4 w-[270px] p-4 border-primary border bg-secondary rounded-xs flexy">
      <div className="flexy !justify-start w-full">
        <div className="text-[24px] px-1 flexy">🎨</div>
        <div className="flexy !justify-between w-full">
          <div className="flexy gap-auto not-prose text-lg">Text decorations</div>
          <span className="flexy">
            <Switch defaultChecked={localStorage.getItem('isActive') ? localStorage.getItem('isActive') === 'true' : "true"} onCheckedChange={(e) => handleCheck(e)} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default TextDecorationsBtn