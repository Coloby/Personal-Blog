import { default as configPromise, default as payloadConfig } from "@/payload/payload.config"
import { defaultEditorConfig, defaultEditorFeatures, getEnabledNodes, sanitizeServerEditorConfig } from '@payloadcms/richtext-lexical'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { createHeadlessEditor } from '@payloadcms/richtext-lexical/lexical/headless'
import { $convertToMarkdownString } from '@payloadcms/richtext-lexical/lexical/markdown'
import { CollectionSlug, getPayload } from 'payload'

const payload = await getPayload({ config : configPromise })
const sanitizedPayloadConfig = await payloadConfig

defaultEditorConfig.features = [
  ...defaultEditorFeatures,
]
const sanitizedEditorConfig = await sanitizeServerEditorConfig(defaultEditorConfig, sanitizedPayloadConfig)

const headlessEditor = createHeadlessEditor({
  nodes: getEnabledNodes({
    editorConfig: sanitizedEditorConfig,
  }),
})

export const getMDFromLexical = async (id: number, collection : CollectionSlug, otherOptions: {}) => {
  const blogPost = await payload.findByID({
    id: id,
    collection: collection,
    depth: 0,
    ...otherOptions
  });
  // @ts-ignore
  const serializedEditorState: SerializedEditorState = blogPost.content 

  try {
    headlessEditor.update(
      () => headlessEditor.setEditorState(headlessEditor.parseEditorState(serializedEditorState)), // Import editor state into your headless editor
      { discrete: true },  // This should commit the editor state immediately
    )
  } catch (e) { console.error({ err: e }, 'ERROR parsing editor state') }
  
  let markdown
  await headlessEditor.getEditorState().read(async () => {
    try {
      markdown = $convertToMarkdownString(sanitizedEditorConfig?.features?.markdownTransformers)
    } catch (error) { console.error('Error during conversion:', error) }
  })

  return markdown
}




