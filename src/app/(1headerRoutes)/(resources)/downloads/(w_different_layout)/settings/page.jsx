import DownloadCard from "@/components/ui/DownloadCard"
import { basePath } from "../../page"

const page = () => {

  return (
    <div className="flexy sm:!items-start flex-col sm:flex-row w-full gap-8 sm:!justify-center !justify-start">
      <DownloadCard 
        
        info={`⚠ Before proceeding ⚠, ensure you have backed up any files you are about to overwrite to avoid data loss. Navigate to the directory 'C:\Users\TheUsernameYouChoseForYourPC\AppData\Roaming\Code\User' (or its equivalent in other operating systems) and replace the existing files with those downloaded from here.`} 
        href={basePath + "/settings/vscode_settings.zip"}>Vscode settings</DownloadCard>
      <DownloadCard 
        
        info={<div>Mostly stuff for productivity. Requires additional customization to make it really useful, and downloading <a href="https://github.com/AutoHotkey/AutoHotkey">autohotkey</a>.</div>} 
        href={basePath + "/settings/autohotkey/autohotkey.zip"}>AutoHotkey settings</DownloadCard>
    </div>
  )
}

export default page