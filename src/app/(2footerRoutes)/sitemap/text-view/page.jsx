import { defaultProseSettings } from "@/lib/mdx/proseSettings";
import SettingsBtn from "@/components/logic/settings/SettingsBtn";
import Btn from "@/components/primitives/logic/Btn";
import { getMdxComp } from "@/lib/mdx/getMdxComp";

const page = async () => {
  const SitemapText = await getMdxComp("","", "sitemap.md")

  return (
    <div className={`prose ${defaultProseSettings}`}>
      <div className={`flex flex-col gap-6 right-6 absolute sm:right-12 not-prose z-10`}>
        <SettingsBtn defaultVal={false}>
          <div className="flex flex-col gap-2 border bg-secondary border-primary rounded-xs px-4 py-2 max-w-[270px]">
            <div className="flex flex-col gap-2">
              <h2>Legend</h2>
              <p>^ = to complete</p>
              <p>$ = to create</p>
            </div>
          </div>
          <Btn href="/sitemap" classContainer="!w-fit !text-center">Switch view</Btn>
        </SettingsBtn>
      </div>
      <div className="prose-h1:!text-[48px] prose-h1:!mt-0 prose-li:!my-0 prose-ul:!my-2">
        <SitemapText />
      </div>
    </div>
  );
}

export default page