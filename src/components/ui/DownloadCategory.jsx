import Link from "next/link"

const DownloadCategory = ({href, icon}) => {
  const lastSegment = href.split('/').pop()
  const title = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1).split("-").join(" ")

  return (
    <Link href={href} className="p-4 flexy flex-col border-2 rounded-xs border-primary min-w-[232px]">
      <h2 className="text-xl">{title}</h2>
      <div className="text-[36px]">{icon}</div>
    </Link>
  )
}

export default DownloadCategory