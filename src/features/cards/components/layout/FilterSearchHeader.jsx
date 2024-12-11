"use client"

import Selector from "@/features/cards/components/header/Selector"
import FiltersBtn from "@/features/cards/components/header/FiltersBtn"
import SearchBar from "@/features/cards/components/header/SearchBar"
import Headroom from "react-headroom"
import { Suspense } from "react"

const FilterSearchHeader = ({ children }) => {

  return (
    <>
      <Headroom style={{ zIndex: "998"}} upTolerance={10} downTolerance={20} className="!absolute top-0 !w-full">
        <div className="sticky flexy !items-start !transform-none mt-[86px] left-0 right-0 m-auto !w-full h-[82px] px-4 ">
          <div className=" bg-primary-foreground gap-[-44px] flex items-center flex-col  justify-evenly md:min-w-[740px] md:max-w-[770px] !w-full max-w-[370px] !min-w-[310px] h-[40px] border-2 border-primary rounded-tl-[34px] rounded-br-[34px]">
            <div className="flex w-full justify-evenly h-[40px] mt-[-2px]">
              <Suspense>
                <FiltersBtn />
                <Selector />
                <SearchBar />
              </Suspense>
            </div>
          </div>
        </div>
      </Headroom>
      {children}
    </>
  )
}

export default FilterSearchHeader