import { Access } from "payload";

export const isAuthor: Access = ({ req: { user } }) => {
  if (user?.roles?.includes('admin')) return true
  if (user?.roles?.includes('author')) return true
  return false
}