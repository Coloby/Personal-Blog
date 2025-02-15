export const getBaseUrl = () => {
  return process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_LOCALHOST_URL : process.env.NEXT_PUBLIC_BASE_URL
}