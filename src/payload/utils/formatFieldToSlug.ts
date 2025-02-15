import { formatToSlug } from "@/utils/formatToSlug"
import type { FieldHook } from 'payload'

export const formatFieldToSlug = (fallback: string): FieldHook => ({ value, originalDoc, data }) => {
  if (data?.metadata?.[fallback]) return formatToSlug(data.metadata?.[fallback], "-")
  if (data?.[fallback]) return formatToSlug(data?.[fallback], "-")
  console.error("Double-check if this is the behaviour you want")
  
  console.log(`value:`, value)
  return value
  if (typeof value === 'string') return formatToSlug(value, "-")
  const fallbackData = data?.[fallback] || originalDoc?.[fallback]
  if (fallbackData && typeof fallbackData === 'string') return formatToSlug(fallbackData, "-")
  return value
}