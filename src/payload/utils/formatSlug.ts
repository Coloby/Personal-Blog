import type { FieldHook } from 'payload'
const format = (val: string, spaceSeparator: string): string =>
  val
    .replace(/ /g, `${spaceSeparator}`)
    .replace(/[^\w-/]+/g, '')
    .toLowerCase()

// @ts-ignore
export const formatSlug = (fallback: string, string : string): FieldHook => ({ value, originalDoc, data, spaceSeparator } ) => {
  if (typeof value === 'string') return format(value, spaceSeparator)
  const fallbackData = data?.[fallback] || originalDoc?.[fallback]
  if (fallbackData && typeof fallbackData === 'string') return format(fallbackData, spaceSeparator)

  return value
}