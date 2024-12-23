import DownloadCategory from "@/components/ui/DownloadCategory.jsx"

const page = () => {

  return (
    <div className="flexy sm:!items-start flex-col sm:flex-row w-full gap-8 sm:!justify-center !justify-start">
      <DownloadCategory href={"/wonder-room/tools"} icon="🔧" />
      <DownloadCategory href={"/wonder-room/ideas"} icon="💡" />
      {/* <DownloadCategory href={"/wonder-room/people"} icon="🧑" /> */}
    </div>
  )
}

export default page