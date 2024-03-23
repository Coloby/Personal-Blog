import DownloadCard from "@/components/ui/DownloadCard"
import { basePath } from "../../page"

const page = () => {

  return (
    <div>
      <DownloadCard 
        // imgs={[
        //   {
        //     title: "",
        //     img : "",
        //   }
        // ]}
        info={"A vault or folder with customized settings and notes to help newcomers."} href={basePath + "/obsidian/obsidian_starter.zip"}>Obsidian Starter</DownloadCard>
    </div>
  )
}

export default page