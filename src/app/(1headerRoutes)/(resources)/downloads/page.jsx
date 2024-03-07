import Link from "next/link"

const page = () => {
  const basePath = "assets/routes_specific/downloads"

  return (
    <div className="flex flex-col gap-4 items-start justify-start">
      <Link href={basePath + "/obsidian/obsidian_starter.zip"} download={true}>Obsidian Starter</Link>
      <Link href={basePath + "/settings/autohotkey/autohotkey.zip"} download={true}>AutoHotkey settings</Link>
    </div>
  )
}

export const metadata = {
  title : "Downloads",
  description : "Little gems from Ed that you can download",
}

export default page