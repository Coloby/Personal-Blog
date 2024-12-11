"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/primitives/shadcn-ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/primitives/shadcn-ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/primitives/shadcn-ui/popover"
import { defaultProseSettings } from "@/lib/mdx/proseSettings"
import { scrollbar } from "@/lib/tailwind-scrollbar/settings"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Stars from "./Stars"
import { currentCategoryTagsAtom, getCategoryTagsAtom } from "@/features/cards/stores/AtomStore";
import { useAtom } from "jotai"

const DetailedCard = ({ config }) => {
  const { score, iconPath, websiteUrl, websiteLabel, title, moreInfoUrl, imgs, Tags, description, imgClasses = "scale[1.3]"} = config ?? {}
  const [currentCategoryTags, _] = useAtom(currentCategoryTagsAtom)
  const currentCategoryTag = getCategoryTagsAtom(currentCategoryTags || "tools").init
  const FlattenedTags = Tags?.flatMap(tag => Object.values(tag)).flat();
  
  return (
    <article className={`flex flex-col sm:items-end gap-8 sm:justify-end ${Tags ? "pb-[88px] sm:pb-[56px]" : "pb-[88px] sm:pb-[56px]"}  pt-[28px] hd:pt-0 sm:w-[638px] hd:w-[718px]`}>
      <div className={`w-[100vw] sm:w-[638px] hd:w-full relative flex flex-col items-center ml-[-16px] min-h-[186px] sm:border-2 border-l-0 border-r-0 border-primary bg-body_shade px-4 py-9
        sm:justify-end hd:mt-[26px]  sm:h-[240px] hd:h-[242px] sm:inline sm:border-l-2 sm:border-r-2 sm:rounded-tl-lg sm:rounded-br-lg`}>
        <div className="flex flex-col gap-24">
          {/* title box */}
            <div className="w-full sm:!w-[324px] flexy h-[100px]  absolute right-0 left-0 m-auto top-[-28px] hd:top-[-28px] sm:right-auto sm:left-4  border-2 border-primary border-x-0 sm:border-x-2 sm:rounded-tl-lg sm:rounded-br-lg bg-body_shade text-xl font-semibold p-4">
              <div className="w-[288px] gap-4 items-center flex ">
                {iconPath ? (
                  <div className="w-[68px] h-[68px]">
                    <Image
                      src={iconPath}
                      width={68}
                      height={68}
                      priority={false}
                      className={`w-full h-full object-fit   rounded-tl-lg rounded-br-lg`}
                      alt=""
                    />
                  </div>
                ) : null}
                <div className="flex flex-col gap-[6px]">
                  <h2 className="!text-[20px] card-title">{title}</h2>
                  {score && <Stars score={score} /> || null}
                </div>
              </div>
            </div>
          {/* description */}
            <div className="flexy sm:justify-start w-full">
              <p className={`mt-[55px] !leading-[26px] !max-w-[400px] w-full sm:w-[324px] sm:h-[96px] text-lg ${defaultProseSettings} prose-p:!inline prose-a:!inline sm:max-h-[112px]`}>{description}</p>
            </div>
        </div>
        <div className="sm:w-[280px] hd:h-[268px] sm:h-[240px] h-[288px] w-full max-w-[390px] hd:max-w-[999px] hd:w-[362px] mt-6 sm:mt-0 sm:absolute right-[-84px] sm:right-[-2px] hd:right-[-4px] top-[-2px] hd:top-[-28px]">
          {/* image/video box dialog+carousel & small btns*/}
            <div className="relative h-full ">
              <Dialog className="h-full w-full">
                <Carousel className="h-full w-full">
                  <DialogTrigger className={` h-full w-full  overflow-hidden bg-body_shade  right-[-2px] !top-[-38px] z-20 !my-0 outline-double -outline-offset-2  outline-2 outline-primary rounded-tl-lg rounded-br-lg`} >
                    <CarouselContent className="h-full">
                      {imgs.map((img, index) => (
                        <CarouselItem key={`${img} + ${index}carousel`} className="h-full w-full !items-start flexy ">
                          <Image
                            src={img.imgSrc}
                            width={680}
                            height={630}
                            className={`${imgClasses} sm:hover:scale-[1.4] border-2 border-primary transition-all w-full hd:h-[268px] sm:h-[240px] h-[288px] object-cover   rounded-tl-lg rounded-br-lg`}
                            alt=""
                            priority={false}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </DialogTrigger>
                  <div className={`${!imgs[1] && "!hidden"} z-10  h-[40px] w-[80px] border-2 border-primary rounded-tl-[15px] rounded-br-[15px] !flex !items-center absolute left-0 right-0 m-auto bottom-[-18px] bg-primary-foreground text-primary_text_color`}>
                    <CarouselPrevious className="!w-full !static !flex !items-center !justify-center !max-w-[40px] !border-0 !-translate-y-0">
                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 3.17104V3.1714L14.25 16.5005L14.25 16.5008C14.2507 16.9803 14.1167 17.45 13.8637 17.8555C13.6109 18.2608 13.2496 18.5855 12.8219 18.7921C12.3061 19.0376 11.7324 19.1321 11.1661 19.0649C10.6002 18.9978 10.0641 18.7718 9.61885 18.4125L1.61576 11.7512C1.34451 11.5136 1.12678 11.22 0.977379 10.8901C0.827569 10.5593 0.75 10.1998 0.75 9.83594C0.75 9.47212 0.827569 9.11261 0.977379 8.7818C1.12678 8.4519 1.34451 8.1583 1.61576 7.9207L9.61747 1.26044C9.61794 1.26006 9.61841 1.25968 9.61889 1.2593C10.0641 0.90003 10.6002 0.674101 11.1661 0.606968C11.7324 0.539787 12.3062 0.634298 12.822 0.879848C13.2497 1.08645 13.6109 1.41104 13.8637 1.81637C14.1167 2.22193 14.2507 2.69161 14.25 3.17104ZM11.1996 16.3598L11.61 16.7032V16.168L11.61 3.66214V3.13553L11.202 3.46843L3.63469 9.64223L3.40025 9.8335L3.6323 10.0277L11.1996 16.3598Z" fill="white" stroke="#1F014B" strokeWidth="0.5"/></svg>
                    </CarouselPrevious>
                    <CarouselNext className="!w-full !static !flex !items-center !justify-center !max-w-[40px] flexy !border-0 !-translate-y-0">
                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 3.17104V3.1714L14.25 16.5005L14.25 16.5008C14.2507 16.9803 14.1167 17.45 13.8637 17.8555C13.6109 18.2608 13.2496 18.5855 12.8219 18.7921C12.3061 19.0376 11.7324 19.1321 11.1661 19.0649C10.6002 18.9978 10.0641 18.7718 9.61885 18.4125L1.61576 11.7512C1.34451 11.5136 1.12678 11.22 0.977379 10.8901C0.827569 10.5593 0.75 10.1998 0.75 9.83594C0.75 9.47212 0.827569 9.11261 0.977379 8.7818C1.12678 8.4519 1.34451 8.1583 1.61576 7.9207L9.61747 1.26044C9.61794 1.26006 9.61841 1.25968 9.61889 1.2593C10.0641 0.90003 10.6002 0.674101 11.1661 0.606968C11.7324 0.539787 12.3062 0.634298 12.822 0.879848C13.2497 1.08645 13.6109 1.41104 13.8637 1.81637C14.1167 2.22193 14.2507 2.69161 14.25 3.17104ZM11.1996 16.3598L11.61 16.7032V16.168L11.61 3.66214V3.13553L11.202 3.46843L3.63469 9.64223L3.40025 9.8335L3.6323 10.0277L11.1996 16.3598Z" fill="white" stroke="#1F014B" strokeWidth="0.5"/></svg>
                    </CarouselNext>
                  </div>
                </Carousel>
                <DialogContent className="!w-full !h-fit !pb-12 !max-w-[99%] !max-h-[98%] ">
                  <Carousel>
                    <CarouselContent>
                      {imgs.map((img, index) => (
                          <CarouselItem key={`${img} + ${index}second-carousel`} className="max-h-[880px] !items-start flexy ">
                            <div className="flex flex-col gap-4">  
                              <div className="text-xl text-primary_text_color text-center">{img.title}</div>
                              <div className="w-full h-full">
                              <Image
                                src={img.imgSrc}
                                width={1920}
                                height={1080}
                                className={`${img.imgClasses} transition-all w-full h-full max-h-[880px] max-w-[1500px] object-cover   rounded-tl-[22px] rounded-br-[22px]`}
                                alt=""
                                priority={false}
                              />
                              </div>
                            </div>
                          </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className={`${!imgs[1] && "!hidden"} absolute top-10 right-10 border-2 border-primary rounded-tl-lg rounded-br-lg bg-secondary text-primary_text_color flexy w-[80px] h-[40px]`}>
                      <CarouselPrevious className="!-translate-y-0 !border-0 !static !w-[40px] h-[40px]"/>
                      <CarouselNext className="!-translate-y-0 !border-0 !static !w-[40px] h-[40px] "/>
                    </div>
                  </Carousel>
                </DialogContent>
              </Dialog>
            </div>
        </div>
        <div className="absolute bottom-[-88px] w-full sm:bottom-[-20px] flexy !gap-[-4px] !flex-col ">
          {/* main btns */}
            <div className="flex w-full z-[8] flexy sm:justify-start overflow-hidden">
              <div className="w-full flex mx-4 sm:mx-0 max-w-[400px] sm:max-w-[324px]">
                {moreInfoUrl ? (
                  <Link href={moreInfoUrl} className="h-[40px] w-full text-lg border-2 border-primary rounded-tl-lg bg-secondary flexy">{"More info"}</Link>
                ) : null}
                {websiteUrl ? (
                  <Link href={ websiteUrl} target="_blank" rel="noopener noreferrer" className={`h-[40px] w-full text-lg border-2 border-primary ${moreInfoUrl ? "border-l-0" : "rounded-br-[30px] rounded-tl-[30px]"} rounded-br-[30px] bg-secondary flexy`}>{websiteLabel ? websiteLabel : "Website"}</Link>
                ) : null}
              </div>
            </div>
            <div className="absolute border-b-2 border-primary w-full h-[2px] top-[19px] sm:hidden z-[1]"></div>
          {/* Tags */}
            <div className={`${!Tags && "hidden"} sm:w-[638px] hd:w-[720px] flex sm:absolute sm:bottom-[-38px] sm:left-[-18px] w-full justify-between items-center border-t-0 border-2 sm:border-x-2 sm:border-t-2 border-x-0 border-primary sm:rounded-tl-lg sm:rounded-br-lg bg-body_shade max-h-[40px]`}>
              {FlattenedTags ? (
                <div className="w-full overflow-hidden relative !z-20"> 
                  {/*  inset-shadow */}
                    <div className="flex w-fit max-h-10 pl-4 items-center relative gap-4 sm:py-[2px] !z-10">
                      {FlattenedTags.map((tag, index) => {
                        return (
                          <React.Fragment key={tag + index}>
                            <p className="max-h-5 w-fit text-sm !min-w-fit  whitespace-nowrap relative !z-10">{tag}</p>
                          </React.Fragment>
                        )
                      })}
                    </div>
                </div>
              ) : null}
              <Popover >
                <PopoverTrigger className="!w-[40px]  !min-w-[40px]" >
                  <div className="!w-[40px] !min-w-[40px] h-[40px] flexy rotate-[-90deg] scale-[0.8]">
                    <svg width="15" height="20" viewBox="0 0 15 20" className="!w-[40px]" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 3.17104V3.1714L14.25 16.5005L14.25 16.5008C14.2507 16.9803 14.1167 17.45 13.8637 17.8555C13.6109 18.2608 13.2496 18.5855 12.8219 18.7921C12.3061 19.0376 11.7324 19.1321 11.1661 19.0649C10.6002 18.9978 10.0641 18.7718 9.61885 18.4125L1.61576 11.7512C1.34451 11.5136 1.12678 11.22 0.977379 10.8901C0.827569 10.5593 0.75 10.1998 0.75 9.83594C0.75 9.47212 0.827569 9.11261 0.977379 8.7818C1.12678 8.4519 1.34451 8.1583 1.61576 7.9207L9.61747 1.26044C9.61794 1.26006 9.61841 1.25968 9.61889 1.2593C10.0641 0.90003 10.6002 0.674101 11.1661 0.606968C11.7324 0.539787 12.3062 0.634298 12.822 0.879848C13.2497 1.08645 13.6109 1.41104 13.8637 1.81637C14.1167 2.22193 14.2507 2.69161 14.25 3.17104ZM11.1996 16.3598L11.61 16.7032V16.168L11.61 3.66214V3.13553L11.202 3.46843L3.63469 9.64223L3.40025 9.8335L3.6323 10.0277L11.1996 16.3598Z" fill="white" stroke="#1F014B" strokeWidth="0.5"/></svg>
                  </div>
                </PopoverTrigger>
                <PopoverContent className={` ${scrollbar} no-scrollbar flex items-start j bg-body_shade absolute !left-[-284px] overflow-y-scroll top-[-5px] sm:top-[-6px] max-h-[400px] !w-[284px] text-primary_text_color border-2 border-primary !rounded-tr-[0] !rounded-bl-[0] !rounded-tl-[0]`}>
                  <div className="flex flex-col gap-5">
                    {currentCategoryTag && Object.keys(currentCategoryTag).map((category, index) => {
                      return (
                        <div key={`${category} + ${index}category`} className="flex flex-col gap-1">
                          <h2 className="text-lg">{category}</h2>
                          <ul className="flex items-center gap-2">
                            {currentCategoryTag[category].map((catTag, tagIndex) => (
                              FlattenedTags.map((tag) => {
                                if (catTag === tag) {
                                  return <li key={`${category}-${catTag}`} className="text-sm border w-fit rounded-sm flexy border-primary px-2 h-[30px]">{catTag}</li>
                                }
                              })
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
        </div>
      </div>
    </article>
  )
}

export default DetailedCard