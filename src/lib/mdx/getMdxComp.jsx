import C_TweetEmbed from "@/components/specifically_for_mdx/C_TweetEmbed";
import C_YTEmbed from "@/components/specifically_for_mdx/C_YTEmbed";
import AnchorTag from "@/components/specifically_for_mdx/customElements/AnchorTag";
import ImageTag from "@/components/specifically_for_mdx/customElements/ImageTag";
import fs from "fs";
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import path, { dirname } from "path";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { fileURLToPath } from 'url';
import { defaultProseSettings } from "./proseSettings";

export async function getMdxComp(dir, fileWExtension) {
  const __filename = fileURLToPath(import.meta.url); // using directly __dirname on react server components yields unexpected behaviour. It should be the current directory were this file is, but it's not in rsc
  const __dirname = dirname(__filename);
  const mdxCompsDirPath = path.resolve(__dirname, '../../components/specifically_for_mdx'); 
  let mdxCompsObj = {};

  // gets components to import directly into mdx
  try {
    const mdxComps = fs.readdirSync(mdxCompsDirPath);

    mdxComps.forEach((mdxCompFileWExt) => {
        const mdxCompPath = path.join(mdxCompsDirPath, mdxCompFileWExt);

        // checks if it is a directory
        const stat = fs.statSync(mdxCompPath)
        if (stat.isDirectory()) return

        const mdxCompContent = fs.readFileSync(mdxCompPath, 'utf-8');
        mdxCompsObj[`../../components/specifically_for_mdx/${mdxCompFileWExt}`] = mdxCompContent
    });
  } catch (err) { console.error('Error with mdx components files!:', err.message) }

  const mdxFilePath = path.resolve(__dirname, `../../../assets/content/route_specific_mdx/${dir}/${fileWExtension.replace(/%20/g, ' ')}`); // adds support to files with spaces
  const mdxFileContent = fs.readFileSync(mdxFilePath, 'utf8')
  const mdxSource = mdxFileContent.replace(/^---\s*[\s\S]*?---/, '').trim() // deletes only the first frontmatter section. It stops searching for stuff right after

  try {
    const {code, frontmatter} = await bundleMDX({ // mdx to JS
      source: mdxSource,
      files: mdxCompsObj,
      mdxOptions(options) {
        options.remarkPlugins = [...(options?.remarkPlugins ?? []), 
          remarkGfm,
          // sectionize, // for now it is not needed but it's cool to have it :P
        ];
        options.rehypePlugins = [...(options?.rehypePlugins ?? []),
          // rehypeSanitize,
          rehypePrettyCode,
          rehypeSlug,
          [
            rehypeAutolinkHeadings, {
              behavior: 'wrap',
              headingProperties : {
                class: 'f-w-link prose-a:no-underline',
              },
              content: (node) => {
                return ({
                  type: 'element',
                  tagName: node.tagName,
                  properties: { className: ['autolink-icon'] },
                  children: [{ 
                    type: 'text', 
                    value: node.children[0].value,
                  }],
                })
              },
            }
          ]
        ];
  
        return options;
      },
    })

    const Component = getMDXComponent(code) // executes the code
    // const C_YTEmbed = dynamic(() => import('@/components/specifically_for_mdx/C_YTEmbed'), {
    //   ssr: false, // This disables SSR for this component.
    // });
    function Comp() {
      return (
        <div className={`${defaultProseSettings} mdx-comp`}>
          <Component components={{
            a : AnchorTag,
            C_YTEmbed,
            C_TweetEmbed,
            ImageTag,
          }}/>
        </div>
      )
    }
    
    return (Comp)
  } catch (error) { console.log(`Error in bundleMDX:`, error) }
}