import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/next-mdx-remote'

const Page = async () => {
  const posts = await getAllPostsMeta()

  return (
    <section className='py-24'>
      <div className=''>
        {/* <h1 className='text-3xl font-bold'>All Posts</h1> */}
        <div className='flex-col gap-3 mt-6'>
          {posts?.map(post => (
            <article 
              className=" w-full my-10 !mb-10"
              key={post.slug}
            >
              <Link
                href={`posts_home/${post.slug}`}
                key={post?.title}
                className='p-8 rounded-md shadow-md'
              >
                <h3 className=' text-xl font-semibold'>{post.title}</h3>
                <h4 className=' text-md font-semibold'>{post.description}</h4>
                <p className='mt-4 text-sm'>{post.author}</p>
                <time className='text-[12px] text-gray-400'>{post.publishDate}</time>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page
