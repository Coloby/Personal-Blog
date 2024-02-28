"use client"

import FontOptionsBtn from "@/components/logic/settings/FontOptionsBtn";
import TextDecorationsBtn from "@/components/logic/settings/TextDecorationsBtn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn-ui/accordion";
import { useEffect } from "react";

export const handleOnCHange = (fontSize) => {
  const paragraphs = document.querySelectorAll("article p")
  const lis = document.querySelectorAll("article li")
  paragraphs.forEach((paragraph) => {
    paragraph.style.fontSize = `${fontSize}px`;
  });
  lis.forEach((li) => {
    li.style.fontSize = `${fontSize}px`;
  });
  localStorage.setItem('fontSize', fontSize);
}

export const handleCheck = (isActive) => {
  const links = document.querySelectorAll("article a")
  const italics = document.querySelectorAll("article em")
  const bolds = document.querySelectorAll("article strong")
  if (!isActive) {
    // links.forEach((link) => {
    //   link.classList.add("!text-primary_text_color", "prose-a:!text-primary_text_color")
    // })
    italics.forEach((italic) => {
      italic.classList.add("!text-primary_text_color", "prose-em::!text-primary_text_color");
    });
    bolds.forEach((bold) => {
      bold.classList.add("!text-primary_text_color", "prose-strong::!text-primary_text_color");
    });
  } else {
    italics.forEach((italic) => {
      italic.classList.remove("!text-primary_text_color", "prose-em::!text-primary_text_color");
    });
    bolds.forEach((bold) => {
      bold.classList.remove("!text-primary_text_color", "prose-strong::!text-primary_text_color");
    });
  }
  localStorage.setItem('isActive', isActive);
}

const SettingsAccordionBtn = () => {
  useEffect(() => {
    handleCheck(localStorage.getItem('isActive') ? localStorage.getItem('isActive') === 'true' : "true")
    handleOnCHange(localStorage.getItem('fontSize') ? localStorage.getItem('fontSize') : 18)
  }, [])
  
  return (<>
  {/* <div className="absolute left-0"> */}
    {/* <Headroom style={{ zIndex: "999"}} upTolerance={10} downTolerance={20} className=""> */}
      <Accordion type="single" collapsible defaultValue="de" className="not-prose">
        <AccordionItem value="ded">
          <AccordionTrigger>
            <div>
              <div className="p-2 border-rose-600 border bg-[#1f014b] rounded-xs w-fit">
                <svg className=" text-primary_text_color text-[36px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 7h-9m3 10H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></g></svg>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4 mt-4">
              <FontOptionsBtn />
              <TextDecorationsBtn />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    {/* </Headroom> */}
  {/* // </div> */}
  
  </>)
}

export default SettingsAccordionBtn