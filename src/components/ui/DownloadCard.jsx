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

const DownloadCard = ({children, href, info, imgs}) => {

  return (
    <div className="">
      <div className="flexy flex-col outline-2 outline relative outline-offset-[-2px] outline-primary rounded-tl-lg rounded-br-lg w-[264px] min-h-[90px]">
        {info ? (
            <Popover>
              <PopoverTrigger className="w-full">
                <div className="absolute top-0 left-0 rounded-tl-lg rounded-br-lg border-2 w-[30px] min-h-[30px] flexy border-primary">i</div>
              </PopoverTrigger>
              <PopoverContent side="top" className="text-primary_text_color p-4 mb-2 rounded-xs bg-secondary border border-primary">
                {info}
              </PopoverContent>
            </Popover>
          ) : null
        }
        <div className="py-[18px] flexy font-semibold text-xl max-w-[173px] text-center">{children}</div>
        <div className="flex w-full">
          <Link href={href} className={`h-[32px] w-full text-lg border-2 border-primary rounded-tl-lg bg-secondary flexy ${imgs ? "" : "!rounded-br-lg"}`}>Download</Link>
          {imgs? (
            <Dialog>
              <DialogTrigger className=" w-full">
                <div href={href} className="h-[32px] w-full text-lg border-2 border-l-0 border-primary rounded-br-lg bg-secondary flexy">Preview</div>
              </DialogTrigger>
              <DialogContent>
                <Carousel>
                  <CarouselContent>
                    {imgs.map((img, index) => (
                      <CarouselItem key={index}>
                        <div className="flex flex-col gap-4">  
                          <div className="text-xl">{img.title}</div>
                          <div className="w-full h-full">{img.img}</div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </DialogContent>
            </Dialog>
          ) : null}
        </div>
      </div>
    </div>
    
  )
}

export default DownloadCard