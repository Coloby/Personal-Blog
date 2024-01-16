import { getAllPostsFrontmatter, getFrontmatterBySlug, getReactElemBySlug } from '@/lib/mdx/mdxManager';

export async function generateStaticParams() { // build static routes for every mdx article https://nextjs.org/docs/app/api-reference/functions/generate-static-params
  const posts = await getAllPostsFrontmatter()
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const Page = async ({ params }) => {
  let { reactElementFromMDX } = await getReactElemBySlug(params.slug)
  let { frontmatter } = await getFrontmatterBySlug(params.slug)

  return (
    <section className=' h-fit max-w-full md:max-w-prose prose prose-purple sm:prose-lg sm:prose-code:text-base prose-p:dark:text-[#D9D9D9]  prose-li:dark:text-[#D9D9D9] prose-img:rounded-xs  dark:prose-invert'>
      <article className="">
        <div className="flexy flex-col align-top">
          <div className=" flex items-center justify-center h-[200px] max-w-[340px] w-full overflow-hidden rounded-xs m-0 mb-6 ">
            <img className="object-cover w-full h-full rounded-xs !m-0" src={frontmatter.thumbnail ? "/assets/media/imgs/"+frontmatter.thumbnail : `https://picsum.photos/500/500?random=${frontmatter.index}`} alt="" />
          </div>
        </div>
        <span className="flex flex-wrap gap-x-8 gap-y-1 mb-4"><address>{frontmatter.authors}</address><time>{frontmatter.publishDate}</time><span>{frontmatter.readingTime}</span></span>
        <h1 className="">{frontmatter.title}</h1>
        <div className="lead text-primary_text_color">{frontmatter.description}</div>
        <div className=" max-w-full md:max-w-prose prose prose-purple sm:prose-lg sm:prose-code:text-base prose-p:dark:text-[#D9D9D9]  prose-li:dark:text-[#D9D9D9] prose-img:rounded-xs  dark:prose-invert ">
          {reactElementFromMDX}
        </div>
      </article>
    </section>
  )
}

// strong
// prose-headings:text-red-900

export default Page
