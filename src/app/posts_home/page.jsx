import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/next-mdx-remote'

const Page = async () => {
  const posts = await getAllPostsMeta()

  return (
    <section className=' flex-wrap flex gap-x-16 gap-y-10 w-md lg:w-[1334px] h-[340px] justify-center'>
      {posts?.map(post => (
        <article 
          className="max-w-[500px] relative h-[366px]"
          key={post.slug}
        >
          <Link
            href={`posts_home/${post.slug}`}
            key={post?.title}
            className='relative h-full'
          >
            <img src="https://picsum.photos/500/200?random=2" alt="" />
            <h3 className='mt-4 text-xl font-semibold '>{post.title}</h3> {/* flex items-center h-[52px] */}
          </Link>
            <h4 className=' mt-2 text-md font-semibold max-w-[500px] h-[96px]'>{post.description}</h4>
            <div className="mt-4 flex gap-3 items-center absolute bottom-0">
              <span className="flex flex-wrap gap-4"><address>{post.author}</address> | <time>{post.publishDate}</time></span>
            </div>
        </article>
      ))}
    </section>
  )
}

export default Page
