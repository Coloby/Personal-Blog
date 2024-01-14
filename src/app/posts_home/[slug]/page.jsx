import { getFrontmatterBySlug, getReactElemBySlug } from '@/lib/mdx/mdxManager';

const Page = async ({ params }) => {
  let { reactElementFromMDX } = await getReactElemBySlug(params.slug)
  let { frontmatter } = await getFrontmatterBySlug(params.slug)

  return (
    <section className=' max-w-full md:max-w-prose prose prose-purple sm:prose-lg sm:prose-code:text-base prose-p:dark:text-[#D9D9D9]  prose-li:dark:text-[#D9D9D9] prose-img:rounded-xs  dark:prose-invert'>
      <article className="">
        <div className="flexy flex-col">
          <div className=" max-w-[500px]">
            <img className=" object-cover h-[200px]" src={frontmatter.thumbnail ? "/assets/media/imgs/"+frontmatter.thumbnail : "https://picsum.photos/500/500?random=2"} alt="" />
          </div>
        </div>
        <span className="flex flex-wrap gap-4 mb-4"><address>{frontmatter.authors.join(", ")}</address> | <time>{frontmatter.publishDate}</time> | {frontmatter.readingTime}</span>
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
