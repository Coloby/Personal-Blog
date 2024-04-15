"use client"

import FontOptionsBtn from "@/components/logic/settings/FontOptionsBtn";
import TextDecorationsBtn from "@/components/logic/settings/TextDecorationsBtn";
import { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn-ui/ui/popover"


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

const SettingsBtn = ({ children, defaultVal = true }) => {
  useEffect(() => {
    handleCheck(localStorage.getItem('isActive') ? localStorage.getItem('isActive') === 'true' : "true")
    handleOnCHange(localStorage.getItem('fontSize') ? localStorage.getItem('fontSize') : 18)
  }, [])
  
  return (<>
    <Popover className="relative">
      <PopoverTrigger>
        <div>
          <div className="p-2 border-primary border bg-secondary rounded-xs w-fit">
            <svg className=" text-primary_text_color text-[36px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 7h-9m3 10H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></g></svg>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="!p-0">
        <div className={`flex flex-col gap-4 mt-4 mb-4 !text-primary_text_color`}>
          {defaultVal && (<>
            <FontOptionsBtn />
            <TextDecorationsBtn />
          </>)}
          {children}
        </div>
      </PopoverContent>
    </Popover>
  </>)
}

export default SettingsBtn