import Link from "next/link"
import DownloadCard from "@/components/ui/DownloadCard"
import DownloadCategory from "@/components/ui/DownloadCategory"

export const basePath = "assets/routes_specific/downloads"

const page = () => {

  return (
    <div className="flexy sm:!items-start flex-col sm:flex-row w-full gap-8 sm:!justify-center !justify-start">
      <DownloadCategory href={"/downloads/settings"} icon="⚙️" />
      <DownloadCategory href={"/downloads/beginner-kits"} icon="👶" />
    </div>
  )
}

export const metadata = {
  title : "Downloads",
  description : "Little gems from Ed that you can download",
}

export default page