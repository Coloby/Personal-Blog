import { getPostBySlug } from '@/lib/next-mdx-remote'

const Page = async ({ params }) => {
  const { meta, content } = await getPostBySlug(params.slug)

  return (
    <section className=' max-w-full md:max-w-prose prose prose-purple sm:prose-lg sm:prose-code:text-base prose-p:dark:text-[#D9D9D9]  prose-li:dark:text-[#D9D9D9] prose-img:rounded-xs  dark:prose-invert'>
      <article className="">
        <div className="flexy flex-col">
          <div className=" max-w-[500px]">
            <img className=" object-cover h-[200px]" src={meta.thumbnail ? "/assets/media/imgs/"+meta.thumbnail : "https://picsum.photos/500/500?random=2"} alt="" />
          </div>
        </div>
        <span className="flex flex-wrap gap-4 mb-4"><address>{meta.author}</address> | <time>{meta.publishDate}</time></span>
        <h1 className="">{meta.title}</h1>
        <div className="lead text-primary_text_color">{meta.description}</div>
        <div className=''>{content}</div>
      </article>
    </section>
  )
}
// strong
// prose-headings:text-red-900
export default Page
