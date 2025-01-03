import { getAllArticlesFrontmatter } from '@/lib/mdx/mdxManager';
import { getMDFromLexical } from "@/payload/features/lexical/getMDFromLexical";
import { formatToSlug } from "@/utils/formatToSlug";
import configPromise from '@payload-config';
import Image from "next/image";
import Link from 'next/link';
import { getPayload } from 'payload';

const Page = async () => {
  const posts = await getAllArticlesFrontmatter()
  const payload = await getPayload({ config : configPromise })
  getMDFromLexical(8, "posts")
  let postsCollection = await payload.find({
    collection: 'posts',
    overrideAccess: false,
    limit: 1000,
    pagination: false,
    draft: false,
    where: {
      _status: {
        equals: 'published',
      },
    },
    select: {
      slug: false,
      authors: {
        select: {
          name: true,
          url: true,
          authorImage: {
            url: true
          },
        }
      }
    },
  })
  postsCollection.docs.forEach((postFromCMS, i) => {
    postFromCMS.url = formatToSlug(JSON.stringify(postFromCMS.metadata.postTitle), "-")
    posts.push(postFromCMS)
  })
  console.log(`postsCollection:`, postsCollection)
  console.log(`posts:`, posts)

  const sortedPosts = posts.sort((a, b) => { 
    const dateA = new Date(a.publishedAt.split('/').reverse().join('-'))
    const dateB = new Date(b.publishedAt.split('/').reverse().join('-'));
    return dateB - dateA; // descending order
  });

  return (
    <section className=' flex flex-wrap  gap-x-16 gap-y-12 w-md lg:w-[1334px] justify-center not-prose h-fit'>
      {sortedPosts?.map(frontmatter => {
        // const authors = GetAuthorsComp({
        //   authorName : frontmatter.id ? postAuthors.author : frontmatter.authors
        // })
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
                {/* <span className="flex flex-wrap gap-4 w-full justify-between"><address className="flexy">{authors}</address><span className=""> {} <time>{frontmatter.publishedAt}</time></span></span> */}
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
