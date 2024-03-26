import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/shadcn-ui/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn-ui/ui/carousel"
import React from "react"

const SoftwareCard = ({ title, description, websiteHref, moreInfoHref, imgClasses, imgs, tags}) => {

  return (
    <article className="flex flex-col gap-8 sm:w-[618px]">
      <div className={` w-full relative flex sm:inline flex-col items-center justify-center min-h-[186px] border-2 border-primary rounded-tl-lg rounded-br-lg bg-body_shade px-4 py-9`}>
        <div className="h-[40px] absolute right-0 left-0 m-auto top-[-20px] sm:right-auto sm:left-4 w-fit border-2 border-primary rounded-tl-lg rounded-br-lg bg-body_shade text-xl font-semibold flexy px-4">
          <h2 className="">{title}</h2>
        </div>
        <p className={`max-w-[300px] w-full text-lg`}>{description}</p>
          <Dialog>
            {/* ${imgs[0].imgSrc ? "sm:w-[618px]" : "max-w-[300px]"} */}
            <DialogTrigger className={` w-[272px] overflow-hidden h-[220px] bg-body_shade sm:absolute !mt-5 right-[-2px] !top-[-40px] !my-0  border-2 border-primary rounded-tl-lg rounded-br-lg`} >
            {/* <div > */}
              <Image
                src={imgs[0].imgSrc}
                width={380}
                height={330}
                priority={false}
                className={`${imgClasses} hover:scale-[1.4] transition-all w-[272px] h-[216px] object-cover   rounded-tl-lg rounded-br-lg`}
                alt=""
              />
            {/* </div> */}
            </DialogTrigger>
            <DialogContent className="!w-full !h-fit !pb-12 !max-w-[99%] !max-h-[98%] ">
              <Carousel>
                <CarouselContent>
                  {imgs.map((img, index) => (
                      <CarouselItem key={img + index} className="max-h-[880px] !items-start flexy ">
                        <div className="flex flex-col gap-4">  
                          <div className="text-xl text-primary_text_color text-center">{img.title}</div>
                          <div className="w-full h-full">
                          <Image
                            src={img.imgSrc}
                            width={1920}
                            height={1080}
                            className={`${img.imgClasses} transition-all w-full h-full max-h-[880px] max-w-[1500px] object-cover   rounded-tl-lg rounded-br-lg`}
                            alt=""
                            priority={false}
                          />
                          </div>
                        </div>
                      </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute !top-[270px] sm:!top-14 left-0 border-2 border-primary rounded-tl-lg rounded-br-lg bg-secondary text-primary_text_color"/>
                <CarouselNext className=" absolute !top-[270px] sm:!top-14 right-0 border-2 border-primary rounded-tl-lg rounded-br-lg bg-secondary text-primary_text_color"/>
              </Carousel>
            </DialogContent>
          </Dialog>
        <div className="flex w-full absolute right-0 left-0 m-auto sm:right-auto sm:left-4 bottom-[-16px] max-w-[300px]">
          {moreInfoHref ? (
            <Link href={moreInfoHref} className="h-[32px] w-full text-lg border-2 border-primary rounded-tl-lg bg-secondary flexy">More info</Link>
          ) : null}
          <Link href={websiteHref ? websiteHref : ""} target="_blank" rel="noopener noreferrer" className={`h-[32px] w-full text-lg border-2 border-primary ${moreInfoHref ? "border-l-0" : "rounded-br-lg rounded-tl-lg"} rounded-br-lg bg-secondary flexy`}>Website</Link>
        </div>
      </div>
      <div className="flexy flex-wrap gap-1 w-full !justify-around  border-2 max-h-[120px] border-primary rounded-tl-lg rounded-br-lg bg-body_shade px-4 py-1 sm:py-[2px]">
        {tags.map((tag, index) => {
          // if (tag === tags[tags.length - 1]) return ( <div>{tag}</div> )
          return (<React.Fragment key={tag + index}>
            <div className="mx-4">{tag}</div>
            {/* <div>·</div> */}
          </React.Fragment>)
        })}
      </div>
    </article>
  )
}

export default SoftwareCard