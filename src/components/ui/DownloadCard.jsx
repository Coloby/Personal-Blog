import Link from "next/link"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn-ui/ui/popover"
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
import { defaultProseSettings } from "@/lib/mdx/proseSettings"
import Image from "next/image"

const DownloadCard = ({title, href, info, imgs}) => {
  const baseUrl = "/assets/routes_specific/downloads/"
  return (
    <div className="flexy flex-col !justify-between outline-2 outline relative outline-offset-[-2px] outline-primary rounded-tl-lg rounded-br-lg w-[264px] min-h-[120px]">
      {info ? (
          <Popover className="">
            <PopoverTrigger className="w-full">
              <div className="absolute top-0 left-0 rounded-tl-lg rounded-br-lg border-2 w-[30px] min-h-[30px] flexy border-primary">i</div>
            </PopoverTrigger>
            <PopoverContent side="top" className="w-full max-w-[264px] sm:max-w-[350px] ffff text-primary_text_color p-4 mb-2 rounded-xs bg-secondary border border-primary">
              <div className={` !text-base ${defaultProseSettings}`}>
                {info}
              </div>
            </PopoverContent>
          </Popover>
        ) : null
      }
      <div className="py-[18px] flexy font-semibold text-xl max-w-[180px] text-center">{title}</div>
      <div className="flex w-full">
        <a href={href} target="_blank" rel="noopener noreferrer" download  className={`h-[32px] w-full text-lg border-2 border-primary rounded-tl-lg bg-secondary flexy ${imgs ? "" : "!rounded-br-lg"}`}>Download</a>
        {imgs? (
          <Dialog>
            <DialogTrigger className=" w-full">
              <div href={href} className="h-[32px] w-full text-lg border-2 border-l-0 border-primary rounded-br-lg bg-secondary flexy">Preview</div>
            </DialogTrigger>
            <DialogContent className="!w-full !h-fit !pb-12 !max-w-[99%] !max-h-[98%]">
              <Carousel>
                <CarouselContent>
                  {imgs.map((img, index) => (
                    <CarouselItem key={index} className="max-h-[880px] !items-start flexy ">
                      <div className="flex flex-col gap-4 !justify-start">  
                        <div className="text-xl text-primary_text_color text-center px-6">{img.title}</div>
                        <div className="w-full h-full">
                        <Image
                          src={baseUrl + img.imgSrc}
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
                <CarouselPrevious className="absolute !top-[270px] sm:!top-14 left-0 border-2 border-primary rounded-tl-lg rounded-br-lg bg-secondary text-primary_text_color" />
                <CarouselNext className=" absolute !top-[270px] sm:!top-14 right-0 border-2 border-primary rounded-tl-lg rounded-br-lg bg-secondary text-primary_text_color"/>
              </Carousel>
            </DialogContent>
          </Dialog>
        ) : null}
      </div>
    </div>
  )
}

export default DownloadCard