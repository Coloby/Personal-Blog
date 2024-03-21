import Link from "next/link"
import DownloadCard from "@/components/ui/DownloadCard"

const page = () => {
  const basePath = "assets/routes_specific/downloads"

  return (
    <div className="flexy sm:!items-start flex-col sm:flex-row w-full gap-8 sm:!justify-center !justify-start">
      <DownloadCard 
        // imgs={[
        //   {
        //     title: "",
        //     img : "",
        //   }
        // ]}
        info={"A vault or folder with customized settings and notes to help newcomers."} href={basePath + "/obsidian/obsidian_starter.zip"}>Obsidian Starter</DownloadCard>
      <DownloadCard 
        
        info={"Mostly stuff for productivity. Requires additional customization to make it really useful."} href={basePath + "/settings/autohotkey/autohotkey.zip"}>AutoHotkey settings</DownloadCard>
    </div>
  )
}

export const metadata = {
  title : "Downloads",
  description : "Little gems from Ed that you can download",
}

export default page