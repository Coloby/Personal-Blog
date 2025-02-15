import C_Cards from "@/features/cards/components/client/C_Cards";
import { getAllCMSDocsByCollection } from "@/payload/utils/queryCMS/getAllCMSDocsByCollection";
import { Suspense } from "react";
import { draftMode } from 'next/headers';
import { RefreshRouteOnSave } from '@/payload/features/livePreview/RefreshRouteOnSave';

const page = async () => {
  const { isEnabled } = await draftMode()
  const isDraftModeEnabled = isEnabled
  const extraQueryOptions = isDraftModeEnabled ? {
    draft: true
  } : {}
  let toolsCollection = await getAllCMSDocsByCollection("tools", extraQueryOptions)
  console.log(`toolsCollection:`, toolsCollection)

  toolsCollection.docs.forEach((tool, i) => {
    tool.imgs.forEach((img) => img.image.url = `${img.image.url}`)
  })

  return (
    <div id="cards-wrapper-container">
      <Suspense>
        <RefreshRouteOnSave />
        <C_Cards cardConfigurations={toolsCollection.docs} categoryTags="tools" />
      </Suspense>
    </div>
  )
}

export const metadata = {
  title : "Tools",
  description : "Tools suggested from Ed",
}

export default page