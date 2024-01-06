import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/next-mdx-remote'

const Page = async () => {
  const posts = await getAllPostsMeta()

  return (
    <section className='flex-col gap-10'>
      {posts?.map(post => (
        <article 
          className=" mb-10"
          key={post.slug}
        >
          <Link
            href={`posts_home/${post.slug}`}
            key={post?.title}
            className=''
          >
            <h3 className=' text-xl font-semibold'>{post.title}</h3>
            <h4 className=' mt-2 text-md font-semibold max-w-[500px]'>{post.description}</h4>
            <div className="mt-4 flex gap-3 items-center">
              <p className=' text-md'>{post.author}</p>
              <time className='text-[14px] text-gray-600'>{post.publishDate}</time>
            </div>
          </Link>
        </article>
      ))}
    </section>
  )
}

export default Page
