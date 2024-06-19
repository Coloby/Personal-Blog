import C_Markmap from "@/components/clientComps/C_Markmap";
import SettingsBtn from "@/components/logic/settings/SettingsBtn";
import Btn from "@/components/primitives/logic/Btn";
import { defaultProseSettings } from "@/lib/mdx/proseSettings";
import fs from 'fs';
import { Transformer } from 'markmap-lib';
import { fillTemplate } from 'markmap-render';
import path from 'path';

// TODO don't let this code make useless 3rd-party requests. It only needs d3.min.js and index.js. Katex is not needed
const page = async () => {
  const filePath = path.join(process.cwd(), 'sitemap.md');
  const markdownContent = fs.readFileSync(filePath, 'utf8');
  
  // makes enviroment variables work
  function replacePlaceholders(string) {
    return string.replace(/process\.env\.(\w+)/g, (matchingString, envVariable) => {
      return process.env[envVariable] || matchingString;
    });
  }
  const processedMarkdown = replacePlaceholders(markdownContent)

  // creates html mindmap from the processedMarkdown
  const transformer = new Transformer();
  const { root, features } = transformer.transform(processedMarkdown);
  const assets = transformer.getAssets();
  const extra = {
    jsonOptions: {
      colorFreezeLevel: 3,
      initialExpandLevel: 4
    },
  };
  const html = fillTemplate(root, assets, extra);
  
  // gives classes if symbol is present
  // console.log(`html:`, html)
  // const modifiedHtml = html.replace(/^(<div[^>]*>.*?)([\^$])(.*?<\/div>)/gm, (match, group) => {
  //   console.log(`group:`, group)
  //   console.log(`match:`, match)
  //   // Add the "hey" class to the div element
  //   return match.replace(/<div\b/, '<div class="hey"');
  // });

  return (
    <div className={`prose ${defaultProseSettings}`}>
      <div className={`flex flex-col gap-6 absolute right-6 sm:right-12 top-[120px] sm:top-[150px] not-prose z-10`}>
        <SettingsBtn defaultVal={false}>
          <div className="flex flex-col gap-2 border bg-secondary border-primary rounded-xs px-4 py-2 max-w-[270px]">
            <div className="flex flex-col gap-2">
              <h2>Legend</h2>
              <p>^ = to complete</p>
              <p>$ = to create</p>
            </div>
          </div>
          <Btn href="/sitemap/text-view" classContainer="!w-fit !text-center">Switch view</Btn>
        </SettingsBtn>
      </div>
      <div className="!absolute top-16 left-0 !max-w-none">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <C_Markmap />
    </div>
  );
}

export default page