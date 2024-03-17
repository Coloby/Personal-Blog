"use client"
// ShareCount buttons has been disabled for privacy concerns

import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/shadcn-ui/accordion"
import { 
  TwitterShareButton, 
  TwitterIcon,

  EmailShareButton, 
  EmailIcon,

  LinkedinShareButton, 
  LinkedinIcon,

  FacebookShareButton, 
  FacebookIcon,
  FacebookShareCount,

  RedditShareButton, 
  RedditIcon,
  RedditShareCount,

  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

const C_ShareBtns = ({ url }) => {
  return (
    <Accordion type="single" collapsible defaultValue="fe" className="not-prose !text-primary_text_color">
      <AccordionItem value="cae">
        <AccordionTrigger>
          <div>
            <div className="p-2 border-primary border bg-secondary rounded-xs w-fit flexy">
              <svg className=" text-primary_text_color text-[36px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 14.25a3.24 3.24 0 0 0-2.62 1.35L9.59 13a3.39 3.39 0 0 0 .16-1a3.39 3.39 0 0 0-.16-1l5.29-2.6a3.23 3.23 0 1 0-.63-1.9a2.94 2.94 0 0 0 .05.5L8.83 9.75a3.19 3.19 0 0 0-2.33-1a3.25 3.25 0 0 0 0 6.5a3.19 3.19 0 0 0 2.33-1L14.3 17a2.94 2.94 0 0 0-.05.51a3.25 3.25 0 1 0 3.25-3.25Zm0-9.5a1.75 1.75 0 1 1-1.75 1.75a1.76 1.76 0 0 1 1.75-1.75m-11 9A1.75 1.75 0 1 1 8.25 12a1.76 1.76 0 0 1-1.75 1.75m11 5.5a1.75 1.75 0 1 1 1.75-1.75a1.76 1.76 0 0 1-1.75 1.75"/></svg>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4 mt-4 share-btns">
            <div className="flex !items-center !justify-start !border-primary !border rounded-xs" >
              <TwitterShareButton url={url} className="w-[270px] h-[62px] !justify-between p-4 !bg-secondary flex rounded-xs !items-center">
                <div className="flex !items-center !justify-start ml-4 gap-3">
                  <TwitterIcon size={32} round />
                  <span className="text-lg">Twitter</span>
                </div>
                <div className="mr-4">
                  {/* <TwitterShareCount url={url} /> */}
                </div>
              </TwitterShareButton>
            </div>
            <div className="flex !items-center !justify-start !border-primary !border rounded-xs" >
              <RedditShareButton url={url} className="w-[270px] h-[62px] !justify-between p-4 !bg-secondary flex rounded-xs !items-center">
                <div className="flex !items-center !justify-start ml-4 gap-3">
                  <RedditIcon size={32} round />
                  <span className="text-lg">Reddit</span>
                </div>
                <div className="mr-4">
                  {/* <RedditShareCount url={url} /> */}
                </div>
              </RedditShareButton>
            </div>
            <div className="flex !items-center !justify-start !border-primary !border rounded-xs" >
              <WhatsappShareButton url={url} className="w-[270px] h-[62px] !justify-between p-4 !bg-secondary flex rounded-xs !items-center">
                <div className="flex !items-center !justify-start ml-4 gap-3">
                  <WhatsappIcon size={32} round />
                  <span className="text-lg">Whatsapp</span>
                </div>
                <div className="mr-4">
                  {/* <WhatsappShareCount url={url} /> */}
                </div>
              </WhatsappShareButton>
            </div>
            <div className="flex !items-center !justify-start !border-primary !border rounded-xs" >
              <FacebookShareButton url={url} className="w-[270px] h-[62px] !justify-between p-4 !bg-secondary flex rounded-xs !items-center">
                <div className="flex !items-center !justify-start ml-4 gap-3">
                  <FacebookIcon size={32} round />
                  <span className="text-lg">Facebook</span>
                </div>
                <div className="mr-4">
                  {/* <FacebookShareCount url={url} /> */}
                </div>
              </FacebookShareButton>
            </div>
            <div className="flex !items-center !justify-start !border-primary !border rounded-xs" >
              <LinkedinShareButton url={url} className="w-[270px] h-[62px] !justify-between p-4 !bg-secondary flex rounded-xs !items-center">
                <div className="flex !items-center !justify-start ml-4 gap-3">
                  <LinkedinIcon size={32} round />
                  <span className="text-lg">LinkedIn</span>
                </div>
                <div className="mr-4">
                  {/* <LinkedinShareCount url={url} /> */}
                </div>
              </LinkedinShareButton>
            </div>
            <div className="flex !items-center !justify-start !border-primary !border rounded-xs" >
              <EmailShareButton url={url} subject="" body="" className= "w-[270px] h-[62px] p-4 !bg-secondary  flex rounded-xs !items-center !justify-start">
                <div className="flex !items-center !justify-start ml-4 gap-3">
                  <EmailIcon size={32} round />
                  <span className="text-lg">E-mail</span>
                </div>
                <div className="mr-4">
                </div>
              </EmailShareButton>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default C_ShareBtns