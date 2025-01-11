import C_Cards from "@/features/cards/components/client/C_Cards";
import { getAllCMSDocsByCollection } from "@/features/mdx/mdxManager";
import { getBaseUrl } from "@/utils/baseUrl";
import { Suspense } from "react";

const page = async () => {
  let toolsCollection = await getAllCMSDocsByCollection("tools")
  const baseUrl = getBaseUrl()

  toolsCollection.docs.forEach((tool, i) => {
    tool.imgs.forEach((img) => img.image.url = `${baseUrl}${img.image.url}`)
  })
  
  return (
    <div id="cards-wrapper-container">
      <Suspense>
        <C_Cards cardConfigurations={toolsCollection.docs} categoryTags="tools" baseUrl={baseUrl}/>
      </Suspense>
    </div>
  )
}

export const metadata = {
  title : "Tools",
  description : "Tools suggested from Ed",
}

export default page