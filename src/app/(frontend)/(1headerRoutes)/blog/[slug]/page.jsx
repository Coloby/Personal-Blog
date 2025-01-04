import C_ShareBtns from "@/components/clientComps/C_ShareBtns";
import SettingsBtn from "@/components/logic/settings/SettingsBtn";
import { getAllArticlesFrontmatter, getFrontmatterBySlug, getTOCCompBySlug } from '@/lib/mdx/mdxManager';
import { defaultProseSettings } from "@/lib/mdx/proseSettings";
import GetAuthorsComp from "@/utils/GetAuthorsComp";
import configPromise from '@payload-config';
import Image from "next/image";
import { getPayload } from 'payload';
import { getMdxComp } from "../../../../../lib/mdx/getMdxComp";
import { getBaseUrl } from "@/utils/baseUrl";
import { reverseDateString } from "@/utils/reverseDateString";

const Page = async props => {
  const params = await props.params
  const postSlug = params.slug
  const postFileName = postSlug + ".mdx"

  const payload = await getPayload({ config : configPromise })
  const findDocumentBySlug = async (collectionSlug, slug) => await payload.find({
    collection: collectionSlug,
    where: {
      slug: {
        equals: slug
      },
      _status: {
        equals: 'published',
      },
    },
  });

  let document
  try { document = await findDocumentBySlug("posts", await postSlug) } 
  catch (error) { console.error("Error fetching from blog/[slug]/page.jsx: ", error.message) }

  const CMSPost = document?.docs[0]
  const isPostFromCMS = CMSPost?.id && true || false
  let PostContentComp
  let localFilePost

  if (isPostFromCMS) PostContentComp = await getMdxComp(false, false, false, {
    mdxId : CMSPost.id, 
    collection : "posts"
  })
  else {
    PostContentComp = await getMdxComp("header_routes/blog", postFileName)
    localFilePost = (await getFrontmatterBySlug(false, "header_routes/blog/", postFileName)).frontmatter
  }

  const { TOCComponent, readingTime } = isPostFromCMS ? await getTOCCompBySlug({
      mdxId : CMSPost.id,
      collection : "posts"
    })
    : await getTOCCompBySlug(false, "header_routes/blog/", postFileName)
  const postThumbnail   = isPostFromCMS ? `${await getBaseUrl()}${CMSPost?.metadata.postImage.url}` : localFilePost?.thumbnail ? "/assets/routes_specific/blog/"+localFilePost?.thumbnail : `https://picsum.photos/500/500?random=${localFilePost?.index}`
  const postPublishedAt = isPostFromCMS ? reverseDateString(CMSPost?.publishedAt.slice(0, 10)): localFilePost.publishedAt
  const postReadingTime = isPostFromCMS ? readingTime : localFilePost?.readingTime
  const postDescription = CMSPost?.metadata.description || localFilePost.description
  const authors         = GetAuthorsComp(CMSPost?.postAuthors || localFilePost.authors)
  const postTitle       = CMSPost?.metadata.postTitle || localFilePost.title
  
  return (
    <section className={`flexy !items-start gap-20 h-fit pb-8 !max-w-full w-full prose ${defaultProseSettings}`}>
      {/* buttons */}
        <div className="absolute right-[1470px] top-[160px] max-w-[390px] w-fit h-full flex justify-end !items-start sl:block pb-[320px]">
          <div className="!sticky top-[120px] left-[-1150px] flex flex-col !items-end !justify-end gap-4 settings-btn">
            {/* TODO zen mode: hides everything apart from the text */}
            <SettingsBtn /> {/* workaround made bcs the AccordionContent component doesn't mount components when hidden. You can find the attributes to change this behaviour in the comment below, but using it will show the components and using "hidden" will make the animations not work at best */}
            <C_ShareBtns url={`${process.env.BASE_URL}/blog/${postSlug}`} />
            {/* forceMount={true} hidden={isHidden} */}
          </div>
        </div>
      {/* TOC */}
        <div className="absolute right-[45px] top-[120px] max-w-[390px] w-full h-full hidden sl:block pb-[320px] !items-start">
          <div className="sticky top-[90px]  pb-4 overflow-x-hidden hidden sl:block  w-full overflow-scroll no-scrollbar overscroll-contain "><TOCComponent platform={"desktop"} /></div>
        </div>
      <article className="w-full max-w-prose">
        {/* PreMdxComp */}
          <div className="w-full">
            <div className="flexy flex-col align-top">
              <div className=" flex items-center justify-center h-[176px] max-w-[340px] w-full overflow-hidden rounded-xs m-0 mb-6 ">
                <Image
                  src={postThumbnail}
                  width={840}
                  height={550}
                  className="object-contain xs:object-cover w-full h-full rounded-xs !m-0"
                  alt=""
                  priority={true}
                />
              </div>
            </div>
            <span className="flex flex-wrap gap-x-8 gap-y-1 mb-4"><address className="flexy">{authors}</address><time>{postPublishedAt}</time><span>{postReadingTime}</span></span>
            <h1 className="text-bold-gradient">{postTitle}</h1>
            <div className="lead text-primary_text_color">{postDescription}</div>
            <div className="sl:hidden"><TOCComponent platform={"mobile"} open={false} /></div>
          </div>
          <hr />
        {/* MdxComp */}
          <div className="">
            <PostContentComp />
          </div>
      </article>
    </section>
  )
}

export async function generateMetadata(props) {
  const params = await props.params;
  //! const postSlug = params.slug
  const postSlug = "finding-you-identity-and-purpose-beginners-guide"
  // const title = decodeURIComponent(postSlug).replace(/\.[^/.]+$/, ''); // removes potential file extensions and mutations like %20 instead of spaces
  const { frontmatter } = await getFrontmatterBySlug(false, "header_routes/blog/", postSlug + ".mdx")

  return {
    title: "Blog | "+frontmatter.title,
    description: frontmatter.description,
    authors: frontmatter.authors, // mostly content creators and writers
    metadataBase: new URL(`${process.env.BASE_URL}`),
    alternates: {
      canonical: `${process.env.PREFERRED_URL}/blog/${postSlug}`,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `${process.env.BASE_URL}`,
      siteName: `Ed's corner`,
      images: [
        {
          url: "/assets/routes_specific/blog/"+frontmatter.thumbnail,
          width: 800,
          height: 600,
          alt: '',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: frontmatter.title,
      description: frontmatter.description,
      card: 'summary_large_image',
      images: {
        url: "/assets/routes_specific/blog/"+frontmatter.thumbnail,
        alt: '',
      },
    }
  }
}

export async function generateStaticParams() { // build static routes for every mdx article https://nextjs.org/docs/app/api-reference/functions/generate-static-params. It won't overload the server even when fetching images into articles (for articles outside of this function) https://youtu.be/wTGVHLyV09M?t=2128
  const posts = await getAllArticlesFrontmatter()
 
  return posts.map((post) => ({
    slug: post.url,
  }))
}

export default Page
