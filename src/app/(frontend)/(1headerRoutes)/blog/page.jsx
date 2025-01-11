import GetAuthorsComp from "@/features/mdx/GetAuthorsComp";
import { getAllCMSDocsByCollection, getFrontmatterBySlug } from '@/features/mdx/mdxManager';
import { getBaseUrl } from "@/utils/baseUrl";
import { reverseDateString } from "@/utils/reverseDateString";
import Image from "next/image";
import Link from 'next/link';

const Page = async () => {
  let postsCollection = await getAllCMSDocsByCollection("posts")

  const sortedPosts = postsCollection.docs.sort((a, b) => { 
    const aDate = a?.publishedAt.slice(0, 10)
    const bDate = b?.publishedAt.slice(0, 10)

    const aResult = new Date(aDate)
    const bResult = new Date(bDate);
    return bResult.getTime() - aResult.getTime() // newest to older
  });

  return (
    <section className=' flex flex-wrap  gap-x-16 gap-y-12 w-md lg:w-[1334px] justify-center not-prose h-fit'>
      {sortedPosts?.map(async (frontmatter) => {
        const postThumbnail   = `${await getBaseUrl()}${frontmatter?.metadata.postImage.url}` 
        const postTitle       = frontmatter?.metadata.postTitle
        const postDescription = frontmatter?.metadata.description
        const postPublishedAt = reverseDateString(frontmatter?.publishedAt.slice(0, 10))
        const postFrontmatter = await getFrontmatterBySlug({
          mdxId : frontmatter.id,
          collection : "posts"
        })
        const postReadingTime = postFrontmatter.frontmatter.readingTime
        const authors = GetAuthorsComp(frontmatter?.postAuthors)
        
        return (
          <article className="max-w-[334px] bg-secondary p-4 flex items-stretch flex-col min-h-[450px] !max-h-[450px] border border-primary  rounded-xs" key={frontmatter.slug} >
            <Link
              href={`blog/${frontmatter.slug}`} 
              key={postTitle}
              className=''
            >
              <div className="flex items-center relative justify-center w-full h-[176px] overflow-hidden rounded-xs">
                <Image
                  src={postThumbnail}
                  width={400}
                  height={200}
                  className=" object-contain xs:object-cover w-full h-full"
                  alt=""
                  priority={false}
                />
                <div className="w-full absolute bottom-0 flexy bg-body_shade/30 p-1 text-sm">
                  {postReadingTime}
                </div>
              </div>
              <h3 className='mt-4 text-xl !min-h-[52px] flexy !justify-start font-semibold '>{postTitle}</h3> {/* flex items-center h-[52px] */}
            </Link>
            <div className="flex flex-col h-full justify-between items-stretch self-stretch">
              <h4 className=' line-clamp-4 mt-2  text-md max-w-[500px] max-h-[96px] overflow-hidden leading-6'>{postDescription}</h4>
              <div className="mt-4   gap-3 items-center ">
                <span className="flex flex-wrap gap-4 w-full justify-between"><address className="flexy">{authors}</address><span className=""><time>{postPublishedAt}</time></span></span>
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
