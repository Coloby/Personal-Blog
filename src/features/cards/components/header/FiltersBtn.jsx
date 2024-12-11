"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/primitives/shadcn-ui/popover"
import { Toggle } from "@/components/primitives/shadcn-ui/ui/toggle"
import { useAtom } from "jotai"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { currentCategoryTagsAtom, getCategoryTagsAtom } from "@/features/cards/stores/AtomStore";

const FiltersBtn = () => {
  const [currentCategoryTags, _] = useAtom(currentCategoryTagsAtom)
  const currentCategoryTag = getCategoryTagsAtom(currentCategoryTags || "tools").init
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [btnActive, setBtnActive] = useState(searchParams?.get("filters")?.split(',') || [])
  const [activeFilters, setActiveFilters] = useState(searchParams.get("filters") && searchParams.get("filters").split(",").length || 0 || 0)
  
  const onTagBtnClick = (e, tag) => {
    setBtnActive(prev => {
      const indexOfBtnPressed = prev.indexOf(tag);

      if (indexOfBtnPressed < 0) {
        return [...prev, tag];
      }
      return [...prev.slice(0, indexOfBtnPressed), ...prev.slice(indexOfBtnPressed + 1)];
    });

    const newFilter = e.target.innerText
    let currentFilters = searchParams.get("filters") || "";

    const updateFilters = (updatedFilters) => {
      updatedFilters[0] === "" && updatedFilters.shift() // .split() creates array [""] if the array given is empty...
      setActiveFilters(updatedFilters.length || 0)
      const updatedParams = new URLSearchParams(searchParams);

      updatedParams.set("filters", updatedFilters.join(","));
      router.replace(`${pathname}?${updatedParams.toString()}`);
    }

    if (currentFilters.includes(newFilter)) {
      const updatedFilters = currentFilters.split(",").filter(filter => filter !== newFilter);
      updateFilters(updatedFilters)
    } else {
      const updatedFilters = [...(currentFilters.split(",")), newFilter];
      updateFilters(updatedFilters)
    }
  }

  return (
    <div className=" border-primary flexy w-fit px-3 min-w-[72px] ">
      <Popover >
        <PopoverTrigger>
          <div className={`${activeFilters && "text-primary md:text-primary_text_color"}`}>Filters {activeFilters > 0 && `(${activeFilters})`}</div>
        </PopoverTrigger>
        <PopoverContent className={` no-scrollbar flex items-start bg-body_shade overflow-y-scroll  !translate-y-[2px]  !w-[284px] text-primary_text_color border-2 border-primary !rounded-tr-[0] !rounded-bl-[0] !rounded-tl-[0]`}>
          <div className="flex flex-col gap-5">
            {Object.keys(currentCategoryTag).map((category, i) => {
              return (
                <div key={i + category} className="flex flex-wrap gap-1 ">
                  <h2 className="text-lg pr-4 flexy pb-1">{category}</h2>
                  <ul className="flex flex-wrap items-center gap-2">
                    {currentCategoryTag[category].map((tag) => {
                      return (
                        <Toggle key={tag + category} className={`!p-0 ${btnActive.includes(tag) ? "bg-primary" : ""}`}
                          pressed={(e) => currentFilters.contain(e) ? true : false}
                        >
                          <li onClick={(e) => onTagBtnClick(e, tag)} className="text-sm border w-fit rounded-sm flexy border-primary px-2 h-[40px]">{tag}</li>
                        </Toggle>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default FiltersBtn