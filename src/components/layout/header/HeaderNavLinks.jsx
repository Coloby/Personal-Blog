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
        <li className="sm:min-w-[70px] flexy">{about && <Link href="/about" className="text-center hidden sm:block">About</Link>}</li>
        <li className="sm:min-w-[70px] flexy">{contact && <Link href="/contact" className="text-center hidden sm:block">Contact</Link>}</li>
        <li className="sm:min-w-[70px] flexy">{notes && <Link href="https://edongarden.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-center hidden sm:block">Notes</Link>}</li>
      </ul>
    </nav>
  )
}

export default HeaderNavLinks