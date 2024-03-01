import { getAllArticlesFrontmatter } from '@/lib/mdx/mdxManager'
import Link from 'next/link'
import GetAuthorsComp from "@/utils/GetAuthorsComp"

const Page = async () => {
  const posts = await getAllArticlesFrontmatter()

  // Sort the posts by publishDate in descending order
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.publishDate.split('/').reverse().join('-'))
    const dateB = new Date(b.publishDate.split('/').reverse().join('-'));
    return dateB - dateA;
  });

  return (
    <section className=' flex-wrap flex gap-x-16 gap-y-12 w-md lg:w-[1334px] justify-center '>
      {sortedPosts?.map(frontmatter => {
        const authors = GetAuthorsComp(frontmatter.authors)
        return (
          <article className="max-w-[300px] relative min-h-[366px]" key={frontmatter.slug} >
            <Link
              href={`blog/${frontmatter.slug}`}
              key={frontmatter?.title}
              className='relative h-full'
            >
              {/* 500 x 200 */}
              <div className="flex items-center relative justify-center w-full h-[176px] overflow-hidden rounded-xs">
                <img className=" object-contain xs:object-cover w-full h-full" src={frontmatter.thumbnail ? "/assets/routes_specific/blog/"+frontmatter.thumbnail : `https://picsum.photos/1000/1180?random=${frontmatter.index}`} alt="" />
                <div className="w-full absolute bottom-0 flexy bg-body_shade/30 p-1 text-sm">
                  {frontmatter.readingTime}
                </div>
              </div>
              <h3 className='mt-4 text-xl font-semibold '>{frontmatter.title}</h3> {/* flex items-center h-[52px] */}
            </Link>
              <h4 className=' line-clamp-4 mt-2 text-md max-w-[500px] max-h-[96px] overflow-hidden leading-6'>{frontmatter.description}</h4>
              <div className="mt-4 flex gap-3 items-center ">
                <span className="flex flex-wrap gap-4 w-full justify-between"><address className="flexy">{authors}</address><span className=""> {} <time>{frontmatter.publishDate}</time></span></span>
              </div>
          </article>
        )
      })}
    </section>
  )
}

export const metadata = {
  title : "Blog",
  description : "My gems of knowledge that needs to be shared in a nice format",
}

export default Page
