import cheerio from 'cheerio';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import remarkParseFrontmatter from 'remark-parse-frontmatter';
import readingTime from "remark-reading-time";
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import { unified } from 'unified';

export const useUnifiedPipeline = async ({ rawMDX }) => {
  const processUntilHeading = 4
  const unifiedPipeline = unified()
    .use(remarkParse) // MD to AST
      // | remark transformations
        .use(remarkMdx) // AST to mdxAST - adds support to MDX (should always be early in the pipeline)
        .use(remarkToc, {maxDepth: processUntilHeading}) // creates TOC (only inside the AST itself. We get it though our custom code below)
        .use(remarkFrontmatter, ['yaml']) // transforms frontmatter into AST and removes it from rendering 
        .use(remarkParseFrontmatter, // give us the frontmatter in "processedMDX.data.frontmatter"
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
        .use(readingTime) // it's in "processedMDX.data.readingTime"
    .use(remarkRehype) // AST to HAST. 
      // | rehype transformations
        // .use(rehypeSanitize)
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
    .use(rehypeStringify) // HAST to HTML string
  
  // translates the AST table of contents from remarkToc into an array of objects
    let headerString = "";
    for (let i = 1; i <= processUntilHeading; i++) {
      headerString += `h${i}`;
      if (i < processUntilHeading) { headerString += ", " }
    }

    const processedMDX = await unifiedPipeline.process(rawMDX);
    const html = String(processedMDX);
    const $ = cheerio.load(html);
    const toc = [];

    $(headerString).each((_, el) => {
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
