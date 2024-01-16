import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import remarkParseFrontmatter from 'remark-parse-frontmatter';
import readingTime from "remark-reading-time";
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import { unified } from 'unified';
import {visit} from 'unist-util-visit'
import cheerio from 'cheerio';


export const useUnifiedPipeline = async ({ rawMDX }) => {
  const unifiedPipeline = unified()
    .use(remarkParse) // MD to AST
      // | remark transformations
        .use(remarkMdx) // adds support to MDX (should always be early in the pipeline)
        .use(remarkToc, {maxDepth: 4}) // gives TOC only inside the AST
        .use(remarkFrontmatter, ['yaml']) // transforms frontmatter into AST and removes it from rendering 
        .use(remarkParseFrontmatter, // actually give us the frontmatter in "processedMDX.data.frontmatter"
          // { 
          //   properties: {
          //     title: { type: "string", required: true },
          //     tags: { type: "array", maxItems: 8 },
          //   },
          // }
        )
        // .use(() => {
        //   return (tree) => {
        //     console.dir(tree.children[0].value)
        //   }
        // })
        .use(remarkGfm)
        .use(readingTime) // processedMDX.data.readingTime
    .use(remarkRehype) // AST to HAST
      // | rehype transformations
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, {
          behavior: 'prepend',
          group: {
            type: 'element',
            tagName: 'div',
            properties: { className: ['heading-w-link'] },
          },
          content: ({ node }) => ({
            type: 'element',
            tagName: 'span',
            properties: { className: ['autolink-icon'] },
            children: [{ type: 'text', value: '#' }],
          }),
          // content: ({ node }) => {
          //   const defaultLink = node.children[0];
          //   return [
          //     defaultLink,
          //     h('span', {
          //     style: 'display: none; position: absolute; left: 0;'
          //     }, '#'),
          //     h('span', {}, node.children[0].children[0].value)
          //   ];
          // }
        })
        // .use(rehypeAutolinkHeadings, {
        //   behavior: 'wrap',
        // })
        .use(rehypePrettyCode)
    .use(rehypeStringify)
  
  // translates the AST table of contents from remarkToc into an array of objects
    const processedMDX = await unifiedPipeline.process(rawMDX);
    const html = String(processedMDX);
    const $ = cheerio.load(html);
    
    const toc = [];
    $('h1, h2, h3, h4').each((_, el) => {
      const $el = $(el);
      toc.push({
        id: $el.attr('id'),
        level: parseInt($el.prop('tagName')[1]),
        text: $el.text(),
      });
    });

    processedMDX.data.toc = toc

  
  return {processedMDX}
}