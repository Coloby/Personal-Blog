import HeaderLogo from "@/components/ui/logos/HeaderLogo"
import Link from "next/link"
import { ThemeModeBtn } from "../logic/ThemeModeBtn"

const Header = () => {

  return (
    <header className=" relative w-full flexy">
      <div className="flex items-center justify-between px-4 gap-12 h-[64px] sticky max-w-fit">
        <Link href={"/"}>
          <HeaderLogo color="text-primary_text_color" width={40} height={36} />
          {/* <Image
            src="/assets/media/logos/github.svg"
            width={80}
            height={36}
            // priority={true}
            // quality={100}
            className="h-[36px] w-[80px] filter brightness-0 text-white fill-white"
            color="white"
            // quality={100}
            alt="logo"
            // sizes="(max-width: 31px) 100%"
          /> */}
        </Link>
        <div className="">
          {/* <nav className=" space-x-10 md:flex hidden justify-center items-center "> */}
          <nav className=" space-x-10 flex justify-center items-center ">
            <ul className="flexy gap-4 items-center">
              <li className="hidden sm:block">
                <Link href="/" className="">Home</Link>
              </li>
              <li className="hidden sm:block">
                <Link href="/blog" className="">Blog</Link>
              </li>
              <li className="sm:hidden">
                <Link href="/blog" className="">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-4">
          <div className="hidden sm:flexy">
            <ThemeModeBtn />
          </div>
          <button className="sm:hidden">
            <svg className="h-[40px] w-[36px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header