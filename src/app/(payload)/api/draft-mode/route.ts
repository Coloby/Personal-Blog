import { getBaseUrl } from '@/utils/baseUrl';
import { findCMSDocBySlug } from '@/payload/utils/queryCMS/findCMSDocBySlug';
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload, type PayloadRequest } from 'payload'
import configPromise from '@payload-config'
import { PATH_WHITELIST } from "@/payload/features/livePreview/pathWhitelist"
 
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const secret        = searchParams.get('secret')
  const slug          = searchParams.get('slug')
  const CMSPost       = (await findCMSDocBySlug("posts", slug, {draft: true})).docs[0]
  const CMScollection = searchParams.get('collection')
  const path          = searchParams.get('path')
  // @ts-ignore
  const isValidPath = PATH_WHITELIST.some(whitelistedPath => whitelistedPath.test(path)); // prevents malicious actors to inject "bad paths"

  if (secret !== `${process.env.DRAFT_MODE_SECRET}`) return new Response('Invalid token', { status: 401 }) // This secret should only be known to this Route Handler and the CMS
  if (!slug    && slug !== "noslug") return new Response('Invalid slug', { status: 401 })
  if (!CMSPost && slug !== "noslug") return new Response('Invalid post, you probably changed or forgot to add a name', { status: 401 })
  if (!CMScollection) return new Response('Invalid collection', { status: 401 })
  if (!path)          return new Response('Path not given or invalid', { status: 401 })
  if (!isValidPath)          return new Response('Invalid path', { status: 401 })

  let user
  const payload = await getPayload({ config: configPromise })

  try {
    user = await payload.auth({
      req: req as unknown as PayloadRequest,
      headers: req.headers,
    })
  } catch (error) {
    payload.logger.error({ err: error }, 'Error verifying token for live preview')
    return new Response('You are not allowed to preview this page', { status: 403 })
  }
  if (!user.user) return new Response('You are not allowed to preview this page', { status: 403 }) // only authenticated authors should view the preview
  
  const draft = await draftMode()
  draft.enable() // Enable Draft Mode by setting the cookie
  redirect(getBaseUrl()+path) 
}