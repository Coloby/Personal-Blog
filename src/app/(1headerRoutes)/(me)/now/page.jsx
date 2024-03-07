import { getMdxComp } from "@/lib/mdx/getMdxComp"
import { defaultProseSettings } from "@/lib/mdx/proseSettings"

const page = async () => {
  const NowComp = await getMdxComp("header_routes/(me)/now", "now.mdx")

  return (
    <section>
      <div className={`${defaultProseSettings} prose prose-h1:text-primary_text_color prose-h2:text-[18px] prose-h2:font-normal`}>
        <h1>What I'm up to Now</h1>
        <NowComp />
      </div>
    </section>
  )
}

export const metadata = {
  title : "Now - What is Ed up to?",
  description : "The latest of what I'm doing/thinking",
}

export default page