import { basePath } from "@/constants/routes_specific/downloads/downloads.js"
import DownloadCard from "@/features/cards/components/card/DownloadCard"

const page = () => {

  return (
    <div>
      <DownloadCard 
        imgs={[
          {
            title: "The first thing you'll see",
            imgSrc : "previews/obsidian_starter/obsidian_starter_1.png",
          }, {
            title: "An example of what could be your main note",
            imgSrc : "previews/obsidian_starter/home.png",
          }
        ]}
        info={"A vault or folder with customized settings and notes to help newcomers."} href={basePath + "/obsidian/obsidian_starter.zip"}
        title={"Obsidian Starter"}
      />
    </div>
  )
}

export default page