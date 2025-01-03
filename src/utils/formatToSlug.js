export const formatToSlug = (stringToFormat, spaceSeparator) => stringToFormat
  .replace(/ /g, `${spaceSeparator}`)
  .replace(/[^\w-/]+/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9-]/g, '') // sanitizes removing symbols
