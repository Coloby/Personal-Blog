export const getBaseUrl = () => {
  return process.env.NODE_ENV === "development" ? process.env.LOCALHOST_URL : process.env.BASE_URL
}