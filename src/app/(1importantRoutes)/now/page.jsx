import { getMdxComp } from "@/lib/mdx/getMdxComp"
import { defaultProseSettings } from "@/lib/mdx/proseSettings"

const page = async () => {
  const NowComp = await getMdxComp("important_routes/now", "now.mdx")

  return (
    <section>
      <div className={`${defaultProseSettings} prose prose-h1:text-primary_text_color`}>
        <h1>What I'm up to Now</h1>
        <h2>Updated: 22/Feb/2024</h2>
        <NowComp />
      </div>
    </section>
  )
}

export default page