import Link from "next/link"
import { ThemeModeBtn } from "../logic/ThemeModeBtn"

const DrawerNavLinks = ({
  home = false,
  blog = true,
  about = true,
  contact = true,
  notes = true,
}) => {
  return (
    <nav className=" flexy mt-10 flex-col">
      <ul className="flex flex-col gap-6  justify-center items-center py-4 w-full">
        {/* <li>{home && <Link href="/" className="">Home</Link>}</li> */}
        <li className="w-full">{blog && <Link href="/blog" className="p-2 w-full h-full text-center border border-[#F91F5B] rounded-xs min-w-[80px] flexy">Blog</Link>}</li>
        <li className="w-full">{about && <Link href="/about" className="p-2 w-full h-full text-center border border-[#F91F5B] rounded-xs min-w-[80px] flexy">About</Link>}</li>
        <li className="w-full">{contact && <Link href="/contact" className="p-2 w-full h-full text-center border border-[#F91F5B] rounded-xs min-w-[80px] flexy">Contact</Link>}</li>
        <li className="w-full">{notes && <Link href="https://edongarden.netlify.app/" target="_blank" rel="noopener noreferrer" className="p-2 w-full h-full text-center border border-[#F91F5B] rounded-xs min-w-[80px] flexy">Notes</Link>}</li>
      </ul>
      <div className="mt-10"><ThemeModeBtn /></div>
    </nav>
  )
}

export default DrawerNavLinks