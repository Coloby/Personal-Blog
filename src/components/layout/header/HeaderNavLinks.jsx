import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/shadcn-ui/ui/navigation-menu"
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
      <ul className={"sm:gap-6 items-center justify-center flex w-fit"}>
        {/* <li>{home && <Link href="/" className=" hidden sm:block">Home</Link>}</li> */}
        <li className="min-w-[70px] flexy">{blog && <Link href="/blog" className="text-center">Blog</Link>}</li>
        {/* <li className="sm:min-w-[70px] flexy">{about && <Link href="/about" className="text-center hidden sm:block">About</Link>}</li> */}
        <li className="sm:min-w-[70px] flexy">{contact && <Link href="/contact" className="text-center hidden sm:block">Contact</Link>}</li>
        {/* <li className="sm:min-w-[70px] flexy">{notes && <Link href="https://edongarden.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-center hidden sm:block">Notes</Link>}</li> */}
        <li className="sm:min-w-[70px] flexy">
        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">Me</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href={"/about"} className="w-full flexy !items-start hover:bg-rose-600 !justify-start">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
                <Link href={"/now"} className="w-full flexy !items-start hover:bg-rose-600 !justify-start">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Now</NavigationMenuLink>
                </Link>
                <Link href={"/interests"} className="w-full flexy !items-start hover:bg-rose-600 !justify-start">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Interests</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href={"https://edongarden.netlify.app"} target="_blank" rel="noopener noreferrer" className="w-full flexy !items-start hover:bg-rose-600 !justify-start">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Notes</NavigationMenuLink>
                </Link>
                <Link href={"/downloads"} className="w-full flexy !items-start hover:bg-rose-600 !justify-start">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Downloads</NavigationMenuLink>
                </Link>
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