import { getMdxComp } from "@/lib/mdx/getMdxComp"
import Image from "next/image"
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn-ui/accordion"

const page = async () => {
  const MainBioComp = await getMdxComp("about", "main_bio.mdx")
  const FAQ = await getMdxComp("about", "faq.mdx")
  const OtherSmallerThings = await getMdxComp("about", "other_smaller_things.mdx")
  return (
    <div className="prose prose-h2:text-primary_text_color !w-full !max-w-full flexy flex-col gap-20 h-full">
      {/* Backgrounds */}
      <div className="flexy w-full h-full flex-col top-0 absolute items-start left-0 content-start z-1">
        <div className="w-full h-full bg-black/75 absolute top-0 z-[3]"></div>
        <Image
          src="/assets/routes_specific/about/blur_w_rain.jpg"
          width={1920}
          height={1080}
          className=" object-cover not-prose h-[2500px] left-0 transition-none z-[2] w-screen absolute top-0"
          alt="logo"
          priority={true}
        />
        <div className="bg-[#1F014B] h-full absolute w-full z-[1]"></div>
      </div>
      {/* Hero */}
      <div className="w-full justify-center items-center lg:items-start gap-14 xl:gap-20 flex flex-col lg:flex-row z-10">
        <div className="flex">
          <div className="justify-start items-start flex flex-col">
            <h2 className="text-[40px] !mt-0">Hey, I'm Ed</h2>
            <div className="flexy max-w-[400px]"><MainBioComp /></div>
          </div>
        </div>
        <div className=" max-w-[450px] max-h-[450px] xl:w-[550px] xl:h-[550px] relative w-full h-full">
          <Image
            src="/assets/routes_specific/about/cat_into_polaroid.png"
            width={550}
            height={550}
            className=" aspect-w-1 aspect-h-1 object-cover not-prose w-full h-full"
            alt="logo"
            priority={true}
          />
        </div>
      </div>
      {/* Other */}
      <div className="max-w-[1242px] w-full justify-end items-center  xl:gap-[300px] mb-52 lg:px-16 flex flex-col xl:flex-row z-10">
        <div className=" w-full max-w-prose flex-col justify-center items-start flex">
          <h2 className="text-[40px]">FAQ</h2>
          <FAQ />
        </div>
        <div className=" max-w-prose flex-col justify-center items-start flex">
          <h2 className="text-[40px]">Other smaller things</h2>
          <OtherSmallerThings />
        </div>
      </div>
    </div>
  )
}

export default page