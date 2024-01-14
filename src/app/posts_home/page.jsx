import { getAllPostsFrontmatter } from '@/lib/mdx/mdxManager'
import Link from 'next/link'

const Page = async () => {
  const posts = await getAllPostsFrontmatter()

  return (
    <section className=' flex-wrap flex gap-x-16 gap-y-10 w-md lg:w-[1334px] h-[340px] justify-center'>
      {posts?.map(post => (
        <article className="max-w-[500px] relative min-h-[366px]" key={post.slug} >
          <Link
            href={`posts_home/${post.slug}`}
            key={post?.title}
            className='relative h-full'
          >
            <div className=" w-full flexy">
              <img className=" object-cover h-[200px] rounded-xs" src={post.thumbnail ? "/assets/media/imgs/"+post.thumbnail : "https://picsum.photos/500/500?random=2"} alt="" />
            </div>
            <h3 className='mt-4 text-xl font-semibold '>{post.title}</h3> {/* flex items-center h-[52px] */}
          </Link>
            <h4 className=' mt-2 text-md font-semibold max-w-[500px] max-h-[96px] overflow-hidden' style={{textOverflow: 'ellipsis'}}>{post.description}</h4>
            <div className="mt-4 flex gap-3 items-center ">
              <span className="flex flex-wrap gap-4"><address>{post.authors.join(", ")}</address> | <time>{post.publishDate}</time></span>
            </div>
        </article>
      ))}
    </section>
  )
}

export default Page
