"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from "@/components/primitives/shadcn-ui/select"
import { sortSettingAtom } from "@/features/cards/stores/AtomStore"
import { useAtom } from "jotai"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const Selector = () => {
  const [selected, setSelected] = useState("Recommended")
  const [_sortSetting, setSortSetting] = useAtom(sortSettingAtom)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  let defaultSortValue
  const currentSort = searchParams.get("sort") || "";
  if (currentSort) defaultSortValue = currentSort

  return (
    <div>
      <Select 
        onValueChange={(e) => {
          const newSort = e
          const updatedParams = new URLSearchParams(searchParams);
          updatedParams.set("sort", newSort);
          router.replace(`${pathname}?${updatedParams.toString()}`);
          setSortSetting(newSort)
        }} 
        className="border-primary flexy !w-fit md:px-8 h-[40px] !min-w-[72px]"
        value={defaultSortValue || "Recommended"} 
      >
        <SelectTrigger className="md:!w-[210px] !min-w-[72px] !border-none !outline-none !ring-0 flexy !text-base">
          <div className={`md:hidden ${currentSort !== "Recommended" && " !text-primary"}`}>Sort</div>
          <div className="hidden md:flex">
            <div>Sort: {_sortSetting}</div>
            {/* <SelectValue className="!border-none" 
              defaultValue={defaultSortValue || "Recommended"} 
              placeholder={defaultSortValue || "Recommended"} 
            /> */}
          </div>
        </SelectTrigger>
            
        <SelectContent className="text-primary_text_color !top-[-8px] bg-secondary !rounded-br-md  border-2 border-primary">
          <SelectItem className="hover:!bg-primary rounded-[0] h-[40px]" value="Recommended">Recommended</SelectItem>
          <SelectItem className="hover:!bg-primary rounded-[0] h-[40px]" value="Vote">Vote</SelectItem>
          <SelectItem className="hover:!bg-primary rounded-[0] h-[40px]" value="Popularity">Popularity</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Selector