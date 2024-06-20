import { basePath } from "@/constants/routes_specific/downloads/downloads.js"
import DownloadCard from "@/features/cards/components/DownloadCard.jsx"

const page = () => {

  return (
    <div className="flexy sm:!items-start flex-col sm:flex-row w-full gap-8 sm:!justify-center !justify-start">
      <DownloadCard 
        info={<div className=" break-words whitespace-pre-wrap">⚠ Before proceeding ⚠, ensure you have backed up any files you are about to overwrite to avoid data loss. Navigate to the directory: <br /> 'C:/Users/TheUsernameYouChoseForYourPC/AppData/Roaming/Code/User' (or its equivalent in other operating systems) <br /><br />and replace the existing files with those downloaded from here.</div>} 
        href={basePath + "/settings/vscode_settings.zip"}
        title={"Vscode settings"}
      />
      <DownloadCard 
        info={<div>Mostly stuff for productivity. Requires additional customization to make it really useful, and to download <a href="https://github.com/AutoHotkey/AutoHotkey">autohotkey</a>.</div>} 
        href={basePath + "/settings/autohotkey/autohotkey.zip"}
        title={"AutoHotkey settings"}
      />
    </div>
  )
}

export default page