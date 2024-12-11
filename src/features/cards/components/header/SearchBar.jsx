import { Input } from "@/components/primitives/shadcn-ui/input"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/primitives/shadcn-ui/popover"

export function SearchBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  let defaultInputValue
  let currentSearch = searchParams.get("search") || "";
  if (currentSearch) defaultInputValue = currentSearch

  return (
    <div className="flexy h-[40px] flex gap-[10px] w-fit px-3 min-w-[72px]">
      <Popover className="z-10 md:hidden" >
        <PopoverTrigger>
          <svg className={`md:hidden text-white fill-white stroke-white ${currentSearch && "!stroke-primary !fill-primary"}`} width="19" height="18" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg"><path d="M16.677 17.1925L10.415 10.9305C9.915 11.3565 9.34 11.6862 8.69 11.9195C8.04 12.1528 7.38667 12.2695 6.73 12.2695C5.12867 12.2695 3.77333 11.7152 2.664 10.6065C1.55467 9.49783 1 8.14283 1 6.5415C1 4.94016 1.554 3.5845 2.662 2.4745C3.77 1.3645 5.12467 0.808831 6.726 0.807498C8.32733 0.806164 9.68333 1.36083 10.794 2.4715C11.9047 3.58216 12.46 4.93783 12.46 6.5385C12.46 7.23316 12.337 7.9055 12.091 8.5555C11.845 9.2055 11.5217 9.7615 11.121 10.2235L17.383 16.4845L16.677 17.1925ZM6.731 11.2685C8.05767 11.2685 9.17767 10.8118 10.091 9.8985C11.0043 8.98516 11.461 7.86483 11.461 6.5375C11.461 5.21016 11.0043 4.09016 10.091 3.1775C9.17767 2.26483 8.05767 1.80816 6.731 1.8075C5.40433 1.80683 4.284 2.2635 3.37 3.1775C2.456 4.0915 1.99933 5.2115 2 6.5375C2.00067 7.8635 2.45733 8.9835 3.37 9.8975C4.28267 10.8115 5.40267 11.2682 6.73 11.2675" fill="white"/><path d="M6.731 11.2685C8.05767 11.2685 9.17767 10.8118 10.091 9.8985C11.0043 8.98516 11.461 7.86483 11.461 6.5375C11.461 5.21016 11.0043 4.09016 10.091 3.1775C9.17767 2.26483 8.05767 1.80816 6.731 1.8075C5.40433 1.80683 4.284 2.2635 3.37 3.1775C2.456 4.0915 1.99933 5.2115 2 6.5375C2.00067 7.8635 2.45733 8.9835 3.37 9.8975C4.28267 10.8115 5.40267 11.2682 6.73 11.2675M16.677 17.1925L10.415 10.9305C9.915 11.3565 9.34 11.6862 8.69 11.9195C8.04 12.1528 7.38667 12.2695 6.73 12.2695C5.12867 12.2695 3.77333 11.7152 2.664 10.6065C1.55467 9.49783 1 8.14283 1 6.5415C1 4.94016 1.554 3.5845 2.662 2.4745C3.77 1.3645 5.12467 0.808831 6.726 0.807498C8.32733 0.806164 9.68333 1.36083 10.794 2.4715C11.9047 3.58216 12.46 4.93783 12.46 6.5385C12.46 7.23316 12.337 7.9055 12.091 8.5555C11.845 9.2055 11.5217 9.7615 11.121 10.2235L17.383 16.4845L16.677 17.1925Z" /></svg>
        </PopoverTrigger>
        <PopoverContent className={`  no-scrollbar flex items-start bg-body_shade overflow-y-scroll !translate-y-[5px] md:!translate-y-[14px] !w-[284px] text-primary_text_color border-2 border-primary !rounded-tr-[0] !rounded-bl-[0] !rounded-tl-[0]`}>
        <div className="flex flex-col gap-5  w-full">
          <Input placeholder="Search for tools" defaultValue={defaultInputValue} 
            type="text" 
            className="w-[60%] peer md:block placeholder !border-0 !bg-transparent formInputElem" 
            name="search for tools mobile input"
            id="idk2"
            onChange={(e) => {
              const newSearch = e.target.value
              const updatedParams = new URLSearchParams(searchParams);
              updatedParams.set("search", newSearch);
              router.replace(`${pathname}?${updatedParams.toString()}`);
            }} 
          />
        </div>

        </PopoverContent>
      </Popover>
      <svg className={` md:block hidden text-white fill-white stroke-white `} width="19" height="18" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg"><path d="M16.677 17.1925L10.415 10.9305C9.915 11.3565 9.34 11.6862 8.69 11.9195C8.04 12.1528 7.38667 12.2695 6.73 12.2695C5.12867 12.2695 3.77333 11.7152 2.664 10.6065C1.55467 9.49783 1 8.14283 1 6.5415C1 4.94016 1.554 3.5845 2.662 2.4745C3.77 1.3645 5.12467 0.808831 6.726 0.807498C8.32733 0.806164 9.68333 1.36083 10.794 2.4715C11.9047 3.58216 12.46 4.93783 12.46 6.5385C12.46 7.23316 12.337 7.9055 12.091 8.5555C11.845 9.2055 11.5217 9.7615 11.121 10.2235L17.383 16.4845L16.677 17.1925ZM6.731 11.2685C8.05767 11.2685 9.17767 10.8118 10.091 9.8985C11.0043 8.98516 11.461 7.86483 11.461 6.5375C11.461 5.21016 11.0043 4.09016 10.091 3.1775C9.17767 2.26483 8.05767 1.80816 6.731 1.8075C5.40433 1.80683 4.284 2.2635 3.37 3.1775C2.456 4.0915 1.99933 5.2115 2 6.5375C2.00067 7.8635 2.45733 8.9835 3.37 9.8975C4.28267 10.8115 5.40267 11.2682 6.73 11.2675" fill="white"/><path d="M6.731 11.2685C8.05767 11.2685 9.17767 10.8118 10.091 9.8985C11.0043 8.98516 11.461 7.86483 11.461 6.5375C11.461 5.21016 11.0043 4.09016 10.091 3.1775C9.17767 2.26483 8.05767 1.80816 6.731 1.8075C5.40433 1.80683 4.284 2.2635 3.37 3.1775C2.456 4.0915 1.99933 5.2115 2 6.5375C2.00067 7.8635 2.45733 8.9835 3.37 9.8975C4.28267 10.8115 5.40267 11.2682 6.73 11.2675M16.677 17.1925L10.415 10.9305C9.915 11.3565 9.34 11.6862 8.69 11.9195C8.04 12.1528 7.38667 12.2695 6.73 12.2695C5.12867 12.2695 3.77333 11.7152 2.664 10.6065C1.55467 9.49783 1 8.14283 1 6.5415C1 4.94016 1.554 3.5845 2.662 2.4745C3.77 1.3645 5.12467 0.808831 6.726 0.807498C8.32733 0.806164 9.68333 1.36083 10.794 2.4715C11.9047 3.58216 12.46 4.93783 12.46 6.5385C12.46 7.23316 12.337 7.9055 12.091 8.5555C11.845 9.2055 11.5217 9.7615 11.121 10.2235L17.383 16.4845L16.677 17.1925Z" /></svg>
      {/* <div className={`absolute underline text-primary ${!currentSearch && "hidden"} z-0`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> */}
      <Input placeholder="Search for tools" defaultValue={defaultInputValue} 
        type="text" 
        className="w-[60%] peer hidden md:block placeholder !border-0 !bg-transparent formInputElem" 
        name="search for tools"
        id="idk"
        onChange={(e) => {
          const newSearch = e.target.value
          const updatedParams = new URLSearchParams(searchParams);
          updatedParams.set("search", newSearch);
          router.replace(`${pathname}?${updatedParams.toString()}`);
        }} 
      />
    </div>
  )
}

export default SearchBar