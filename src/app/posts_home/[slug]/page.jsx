import { getPostBySlug } from '@/lib/next-mdx-remote'

const getMDXRawContent = async slug => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

const Page = async ({ params }) => {
  const { content } = await getMDXRawContent(params.slug)

  return (
    <section className=' xs:max-w-full'>
      <div className='prose prose-purple prose-lg prose-p:dark:text-[#D9D9D9]  prose-li:dark:text-[#D9D9D9] prose-code:text-base dark:prose-invert'>{content}</div>
    </section>
  )
}
// strong
// prose-headings:text-red-900
// 
export default Page
