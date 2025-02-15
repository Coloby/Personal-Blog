import C_ShareBtns from "@/components/clientComps/C_ShareBtns";
import SettingsBtn from "@/components/logic/settings/SettingsBtn";
import getAuthorsComp from "@/features/mdx/getComp/getAuthorsComp";
import { getMdxComp } from "@/features/mdx/getComp/getMdxComp";
import { getTOCCompBySlug } from '@/features/mdx/getComp/getTOCCompBySlug';
import { defaultProseSettings } from "@/features/mdx/lib/proseSettings";
import { findCMSDocBySlug } from "@/payload/utils/queryCMS/findCMSDocBySlug";
import { getAllCMSDocsByCollection } from "@/payload/utils/queryCMS/getAllCMSDocsByCollection";
import { getBaseUrl } from "@/utils/baseUrl";
import { reverseDateString } from "@/utils/reverseDateString";
import { draftMode } from 'next/headers';
import Image from "next/image";
import { RefreshRouteOnSave } from '@/payload/features/livePreview/RefreshRouteOnSave';


const Page = async props => {
  const { isEnabled } = await draftMode()
  const isDraftModeEnabled = isEnabled
  const ExtraQueryOptions = isDraftModeEnabled ? {
    draft: true
  }: {}
  const params = await props.params
  const postSlug = params.slug
  
  let CMSPost = (await findCMSDocBySlug(`posts`, postSlug, ExtraQueryOptions)).docs[0]
  const CMSarguments = {
    mdxId : CMSPost.id, 
    collection : "posts",
    extraQueryOptions : ExtraQueryOptions
  }
  const PostContentComp = await getMdxComp(false, false, false, CMSarguments)
  const { TOCComponent, readingTime } = await getTOCCompBySlug(CMSarguments)
  const postThumbnail   = `${getBaseUrl()}${CMSPost.metadata.postImage.url}`
  const postPublishedAt = reverseDateString(CMSPost.publishedAt.slice(0, 10))
  const postDescription = CMSPost.metadata.description
  const authors         = getAuthorsComp(CMSPost.postAuthors)
  const postTitle       = CMSPost.metadata.postTitle
  
  return (
    <section className={`flexy !items-start gap-20 h-fit pb-8 !max-w-full w-full prose ${defaultProseSettings}`}>
      <RefreshRouteOnSave />
      {/* buttons */}
        <div className="absolute right-[1470px] top-[160px] max-w-[390px] w-fit h-full flex justify-end !items-start sl:block pb-[320px]">
          <div className="!sticky top-[120px] left-[-1150px] flex flex-col !items-end !justify-end gap-4 settings-btn">
            {/* TODO zen mode: hides everything apart from the text */}
            <SettingsBtn /> {/* workaround made bcs the AccordionContent component doesn't mount components when hidden. You can find the attributes to change this behaviour in the comment below, but using it will show the components and using "hidden" will make the animations not work at best */}
            <C_ShareBtns url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${postSlug}`} />
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
            <span className="flex flex-wrap gap-x-8 gap-y-1 mb-4"><address className="flexy">{authors}</address><time>{postPublishedAt}</time><span>{readingTime}</span></span>
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
  const { isEnabled } = await draftMode()
  const isDraftModeEnabled = isEnabled
  const ExtraQueryOptions = isDraftModeEnabled ? {
    draft: true
  }: {}
  const params = await props.params
  const postSlug = params.slug
  
  const CMSPost = (await findCMSDocBySlug("posts", postSlug, ExtraQueryOptions)).docs[0]

  const seoTitle       = CMSPost.seo.title
  const seoDescription = CMSPost.seo.description
  const authors         = CMSPost.postAuthors
  const seoThumbnailUrl   = CMSPost.seo.image.url

  return {
    title: "Blog | "+seoTitle,
    description: seoDescription,
    authors: authors, // mostly content creators and writers
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      canonical: `${process.env.PREFERRED_URL}/blog/${postSlug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      siteName: `Ed's corner`,
      images: [
        {
          url: seoThumbnailUrl,
          width: 800,
          height: 600,
          alt: '',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: seoTitle,
      description: seoDescription,
      card: 'summary_large_image',
      images: {
        url: seoThumbnailUrl,
        alt: '',
      },
    }
  }
}

export async function generateStaticParams() { // build static routes for every mdx article https://nextjs.org/docs/app/api-reference/functions/generate-static-params. It won't overload the server even when fetching images into articles (for articles outside of this function) https://youtu.be/wTGVHLyV09M?t=2128
  const extraFilters = {
    _status: {
      equals: 'published',
    },
  }
  const CMSPosts = await getAllCMSDocsByCollection("posts", null, extraFilters)
 
  return CMSPosts.docs.map((post) => ({
    slug: post.slug,
  }))
}

export default Page
