import { getAllPostsFrontmatter } from '@/lib/mdx/mdxManager'
import Link from 'next/link'

const Page = async () => {
  const posts = await getAllPostsFrontmatter()

  return (
    <section className=' flex-wrap flex gap-x-16 gap-y-12 w-md lg:w-[1334px] justify-center'>
      {posts?.map(post => {
        return (
          <article className="max-w-[300px] relative min-h-[366px]" key={post.slug} >
            <Link
              href={`blog/${post.slug}`}
              key={post?.title}
              className='relative h-full'
            >
              {/* 500 x 200 */}
              <div className="flex items-center relative justify-center w-full h-[180px] overflow-hidden rounded-xs">
                <img className=" object-cover w-full h-full" src={post.thumbnail ? "/assets/media/imgs/"+post.thumbnail : `https://picsum.photos/1000/1180?random=${post.index}`} alt="" />
                <div className="w-full absolute bottom-0 flexy bg-body_shade/30 p-1 text-sm">
                  {post.readingTime}
                </div>
              </div>
              <h3 className='mt-4 text-xl font-semibold '>{post.title}</h3> {/* flex items-center h-[52px] */}
            </Link>
              <h4 className=' line-clamp-4 mt-2 text-md font-semibold max-w-[500px] max-h-[96px] overflow-hidden leading-6'>{post.description}</h4>
              <div className="mt-4 flex gap-3 items-center ">
                <span className="flex flex-wrap gap-4 w-full justify-between"><address>{post.authors}</address><span className=""> {post.authors.split(", ").length > 1 ? "" : ""} <time>{post.publishDate}</time></span></span>
              </div>
          </article>
        )
      })}
    </section>
  )
}

export default Page
