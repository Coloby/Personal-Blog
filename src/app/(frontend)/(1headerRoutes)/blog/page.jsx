import { getAllArticlesFrontmatter, getFrontmatterBySlug } from '@/lib/mdx/mdxManager';
import configPromise from '@/payload/payload.config';
import { getBaseUrl } from "@/utils/baseUrl";
import { formatToSlug } from "@/utils/formatToSlug";
import GetAuthorsComp from "@/utils/GetAuthorsComp";
import { reverseDateString } from "@/utils/reverseDateString";
import Image from "next/image";
import Link from 'next/link';
import { getPayload } from 'payload';

const Page = async () => {
  const posts = await getAllArticlesFrontmatter()
  const payload = await getPayload({ config : configPromise })
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

  const sortedPosts = posts.sort((a, b) => { 
    const aIsPostFromCMS = a?.id && true || false
    const bIsPostFromCMS = b?.id && true || false

    const aDate = aIsPostFromCMS ? a?.publishedAt.slice(0, 10) : reverseDateString(a.publishedAt)
    const bDate = bIsPostFromCMS ? b?.publishedAt.slice(0, 10) : reverseDateString(b.publishedAt)

    const aResult = new Date(aDate)
    const bResult = new Date(bDate);
    return bResult.getTime() - aResult.getTime() // newest to older
  });

  return (
    <section className=' flex flex-wrap  gap-x-16 gap-y-12 w-md lg:w-[1334px] justify-center not-prose h-fit'>
      {sortedPosts?.map(async (frontmatter) => {
        const isPostFromCMS   = frontmatter?.id && true || false
        const postThumbnail   = isPostFromCMS ? `${await getBaseUrl()}${frontmatter?.metadata.postImage.url}` 
          : frontmatter?.thumbnail ? `${await getBaseUrl()}/assets/routes_specific/blog/${frontmatter?.thumbnail}`
          : `https://picsum.photos/500/500?random=${frontmatter?.index}`
        const postTitle       = isPostFromCMS ? frontmatter?.metadata.postTitle : frontmatter.title
        const postDescription = isPostFromCMS ? frontmatter?.metadata.description : frontmatter.description
        const postPublishedAt = isPostFromCMS ? reverseDateString(frontmatter?.publishedAt.slice(0, 10)) : frontmatter.publishedAt

        const authors = GetAuthorsComp(isPostFromCMS ? frontmatter?.postAuthors : frontmatter.authors)
        let postReadingTime
        if (isPostFromCMS) {
          const postFrontmatter = await getFrontmatterBySlug({
            mdxId : frontmatter.id,
            collection : "posts"
          })
          postReadingTime = postFrontmatter.frontmatter.readingTime
        }
        postReadingTime = isPostFromCMS ? postReadingTime : frontmatter.readingTime
        
        return (
          <article className="max-w-[334px] bg-secondary p-4 flex items-stretch flex-col min-h-[450px] !max-h-[450px] border border-primary  rounded-xs" key={frontmatter.url} >
            <Link
              href={`blog/${frontmatter.url}`} 
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
