import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/primitives/shadcn-ui/navigation-menu"
import Link from "next/link"

const HeaderNavLinks = ({
  home = true,
  blog = true,
  about = true,
  contact = true,
  notes = true,
}) => {
  return (
    <nav className=" space-x-10 flexy">
      <ul className={"md:gap-6 items-center justify-center flex w-fit"}>
        <li className="min-w-[70px] flexy">{blog && <Link href="/blog" className="text-center">Blog</Link>}</li>
        <li className="md:min-w-[70px] flexy">{contact && <Link href="/contact" className="text-center hidden md:block">Contact</Link>}</li>
        <li className="md:min-w-[70px] flexy">
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">Me</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href={"/about"} className={"!w-[196px] text-center !rounded-[0px] flexy hover:bg-primary !justify-start" + navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                <NavigationMenuLink href={"/now"} className={"!w-[196px] text-center !rounded-[0px] flexy hover:bg-primary !justify-start" + navigationMenuTriggerStyle()}>Now</NavigationMenuLink>
                <NavigationMenuLink href={"/interests"} className={"!w-[196px] text-center !rounded-[0px] flexy hover:bg-primary !justify-start" + navigationMenuTriggerStyle()}>Interests</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href={process.env.NEXT_PUBLIC_NOTES_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className={"!w-[196px] text-center !rounded-[0px] flexy hover:bg-primary !justify-start" + navigationMenuTriggerStyle()}>Notes</NavigationMenuLink>
                <NavigationMenuLink href={"/wonder-room"} className={"!w-[196px] text-center !rounded-[0px] flexy hover:bg-primary !justify-start" + navigationMenuTriggerStyle()}>Wonder room</NavigationMenuLink>
                <NavigationMenuLink href={"/downloads"} className={"!w-[196px] text-center !rounded-[0px] flexy hover:bg-primary !justify-start" + navigationMenuTriggerStyle()}>Downloads</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNavLinks