import RootLayout from "@/app/layout"
import Btn from "@/components/logic/Btn"
import Link from "next/link"

const layout = ({ children }) => {
  
  return (
    <div  className="w-full flexy flex-col gap-10 !justify-start">
      <Btn href={"/downloads"}>Go Back</Btn>
      {children}
    </div>
  )
}

export default layout