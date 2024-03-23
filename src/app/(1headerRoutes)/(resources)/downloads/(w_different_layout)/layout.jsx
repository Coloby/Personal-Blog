import RootLayout from "@/app/layout"
import Link from "next/link"

const layout = ({ children }) => {
  
  return (
    <div  className="w-full flexy flex-col gap-8 !justify-start">
      <Link href={"/downloads"}>Go Back</Link>
      {children}
    </div>
  )
}

export default layout