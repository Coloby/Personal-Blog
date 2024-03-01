"use client"

import {
  Dialog,
  DialogContent
} from "@/components/shadcn-ui/ui/dialog"
import { defaultProseSettings } from "@/lib/mdx/proseSettings"
import Image from "next/image"
import { useState } from "react"
import BigBtn from "../logic/BigBtn"

const page = ({ children }) => {
  // const [interest, setInterest] = useState(Object.keys(children)[0])
  const [interest, setInterest] = useState("")
  const [activeInterest, setActiveInterest] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = (_interest) => {
    if (_interest === interest) {
      setInterest("")
      setActiveInterest("")
      return
    }
    setActiveInterest(_interest)
    setInterest(_interest)
    const mediaQuery = window.matchMedia('(max-width:  1279px)')
    if (mediaQuery.matches) setIsOpen(true)
  }
  const handleVariant = (_interest) => {
    return activeInterest === _interest ? "active" : "muted"
  }
  let InterestComp = children[interest]
  
  return (
    <section className={`${defaultProseSettings} prose !max-w-none w-full h-full`}>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <div className="prose-p:text-[20px] prose-h2:mt-0 prose-h2:mb-[30px] prose-h3:mt-[30px]">
            {children[interest]}
          </div>
        </DialogContent>
      </Dialog>
      <div className=" gap-[6%] xl:!h-[calc(100vh-180px)] min-h-[740px] h-full w-full flexy flex-row !items-start">
        <div className={`hidden xl:block absolute top-24 left-[-40px] z-30 ${children[interest] ? "!hidden" : ""}`}>
          <Image
            src="/assets/routes_specific/interests/statue.png"
            width={1123}
            height={640}
            className=" aspect-w-1 aspect-h-1 scale-[0.9] object-cover not-prose w-full h-full border-b-4  border-[#F91F5B]"
            alt=""
            priority={true}
          />
          {/* <div className="!hidden xl:!block  w-full h-full"></div> */}
        </div>
        <div className="!hidden xl:!flex !h-[700px] !max-w-[39%] !w-full prose-h2:mt-0 prose-h2:mb-[30px] prose-h3:mt-[30px] overflow-scroll overflow-x-hidden no-scrollbar sm:overscroll-contain">
          {InterestComp}
        </div>
        <div className="!hidden xl:!block border-r-4 border-[#F91F5B] w-1 h-full"></div>
        <div className="flexy flex-col gap-[100px] max-w-[400px] sm:max-w-[800px] xl:max-w-[43%] w-full h-full xl:max-h-[700px] !items-start">
          <h1 className="text-center !my-0">My interests</h1>
          <div className="flexy flex-col gap-[50px] w-full">
            <h2 className="!my-0 w-full text-left">Primary</h2>
            <div className="flexy flex-col gap-[50px] w-full not-prose">
              <div className="flex gap-[50px] px-[22px] sm:gap-[100px] w-full flexy flex-col sm:flex-row">
                <BigBtn variant={handleVariant("Programming")} onClick={() => handleClick("Programming")}><h3 className="text-[20px] sm:text-[22px] font-semibold">Programming</h3></BigBtn>
                <BigBtn variant={handleVariant("ContentCreation")} onClick={() => handleClick("ContentCreation")}><h3 className="text-[20px] sm:text-[22px] font-semibold">Content Creation</h3></BigBtn>
              </div>
              <div className="flex gap-[50px] px-[22px] sm:gap-[100px] w-full flexy flex-col sm:flex-row">
                <BigBtn variant={handleVariant("SelfImprovement")} onClick={() => handleClick("SelfImprovement")}><h3 className="text-[20px] sm:text-[22px] font-semibold">Self-Improvement</h3></BigBtn>
                <BigBtn variant={handleVariant("Design")} onClick={() => handleClick("Design")}><h3 className="text-[20px] sm:text-[22px] font-semibold">Design</h3></BigBtn>
              </div>
            </div>
          </div>
          <div className="flexy flex-col gap-[50px] w-full">
            <h2 className="!my-0 w-full text-left">Secondary</h2>
            <div className="flexy flex-col gap-[50px] w-full not-prose">
              <div className="flex gap-[50px] px-[22px] sm:gap-[100px] w-full flexy flex-col sm:flex-row">
                <BigBtn variant={handleVariant("Business")} onClick={() => handleClick("Business")}><h3 className="text-[20px] sm:text-[22px] font-semibold">Business</h3></BigBtn>
                <BigBtn variant={handleVariant("ComputerScience")} onClick={() => handleClick("ComputerScience")}><h3 className="text-[20px] sm:text-[22px] font-semibold">Computer Science</h3></BigBtn>
              </div>
            </div>
          </div>
          </div>
      </div>
      <div className="!border-t-4 border-[#F91F5B] h-[50%] flexy !items-start gap-[6%] mt-24 sm:mt-0 pt-8">
        <div className="!hidden xl:!block w-[39%] h-[300px]">

        </div>
        <div className="!hidden xl:!block w-1 h-[300px]"></div>
        <div className=" w-[43%] h-full">
          <h2>
            About my interests
          </h2>
          <p>The dates you see are based on 24/Feb/2024</p>
          <p>The hyarchy of my interests is highly mutable</p>
          <p>Related topics are sorted based on importancy</p>
        </div>
      </div>
    </section>
  )
}

export default page