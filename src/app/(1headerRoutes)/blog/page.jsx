import { getAllArticlesFrontmatter } from '@/lib/mdx/mdxManager'
import Link from 'next/link'
import GetAuthorsComp from "@/utils/GetAuthorsComp"
import Image from "next/image"

const Page = async () => {
  const posts = await getAllArticlesFrontmatter()

  // Sort the posts by publishDate in descending order
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.publishDate.split('/').reverse().join('-'))
    const dateB = new Date(b.publishDate.split('/').reverse().join('-'));
    return dateB - dateA;
  });

  return (
    <section className=' flex flex-wrap  gap-x-16 gap-y-12 w-md lg:w-[1334px] justify-center not-prose '>
      {sortedPosts?.map(frontmatter => {
        const authors = GetAuthorsComp(frontmatter.authors)
        return (
          <article className="max-w-[334px] bg-secondary p-4 flex items-stretch flex-col min-h-[450px] !max-h-[450px] border border-primary  rounded-xs" key={frontmatter.url} >
            <Link
              href={`blog/${frontmatter.url}`} 
              key={frontmatter?.title}
              className=''
            >
              <div className="flex items-center relative justify-center w-full h-[176px] overflow-hidden rounded-xs">
                <Image
                  src={frontmatter.thumbnail ? "/assets/routes_specific/blog/"+frontmatter.thumbnail : `https://picsum.photos/1000/1180?random=${frontmatter.index}`}
                  width={400}
                  height={200}
                  className=" object-contain xs:object-cover w-full h-full"
                  alt=""
                  priority={false}
                />
                <div className="w-full absolute bottom-0 flexy bg-body_shade/30 p-1 text-sm">
                  {frontmatter.readingTime}
                </div>
              </div>
              <h3 className='mt-4 text-xl !min-h-[52px] flexy !justify-start font-semibold '>{frontmatter.title}</h3> {/* flex items-center h-[52px] */}
            </Link>
            <div className="flex flex-col h-full justify-between items-stretch self-stretch">
              <h4 className=' line-clamp-4 mt-2  text-md max-w-[500px] max-h-[96px] overflow-hidden leading-6'>{frontmatter.description}</h4>
              <div className="mt-4   gap-3 items-center ">
                <span className="flex flex-wrap gap-4 w-full justify-between"><address className="flexy">{authors}</address><span className=""> {} <time>{frontmatter.publishDate}</time></span></span>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export const metadata = {
  title : "Blog",
  description : "My gems of knowledge shared in a nice format",
}

export default Page
