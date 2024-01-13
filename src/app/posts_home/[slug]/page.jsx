import { getPostBySlug } from '@/lib/next-mdx-remote';
import { Parser } from 'html-to-react';
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
import { unified } from 'unified';


const Page = async ({ params }) => {
  console.log(`params:`, params)
  let { f, content, rawMDX } = await getPostBySlug(params.slug)

  const unifiedPipeline = unified()
    .use(remarkParse) // MD to AST
      // | remark transformations
        .use(remarkMdx) // adds support to MDX (should always be early in the pipeline)
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
  
  const processedMDX = await unifiedPipeline.process(rawMDX);
  const frontmatter = processedMDX.data.frontmatter
  console.log(`frontmatter:`, frontmatter)
  const parser = new Parser();
  const reactElementFromMDX = parser.parse(processedMDX.value);

  // useEffect(() => {
  //   const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

  //   const headingArr = [];
  //   headings.forEach((heading) => {
  //     const id = heading.id;
  //     const level = +heading.tagName.replace('H', '');
  //     const text = heading.textContent + '';

  //     headingArr.push({ id, level, text });
  //   });

  //   setToc(headingArr);
  // }, [props.slug]);

  return (
    <section className=' max-w-full md:max-w-prose prose prose-purple sm:prose-lg sm:prose-code:text-base prose-p:dark:text-[#D9D9D9]  prose-li:dark:text-[#D9D9D9] prose-img:rounded-xs  dark:prose-invert'>
      <article className="">
        <div className="flexy flex-col">
          <div className=" max-w-[500px]">
            <img className=" object-cover h-[200px]" src={frontmatter.thumbnail ? "/assets/media/imgs/"+frontmatter.thumbnail : "https://picsum.photos/500/500?random=2"} alt="" />
          </div>
        </div>
        <span className="flex flex-wrap gap-4 mb-4"><address>{frontmatter.authors.join(", ")}</address> | <time>{frontmatter.publishDate}</time> | {processedMDX.data.readingTime.text}</span>
        <h1 className="">{frontmatter.title}</h1>
        <div className="lead text-primary_text_color">{frontmatter.description}</div>
        <div className=" max-w-full md:max-w-prose prose prose-purple sm:prose-lg sm:prose-code:text-base prose-p:dark:text-[#D9D9D9]  prose-li:dark:text-[#D9D9D9] prose-img:rounded-xs  dark:prose-invert">{reactElementFromMDX}</div>
      </article>
    </section>
  )
}
// strong
// prose-headings:text-red-900
export default Page
