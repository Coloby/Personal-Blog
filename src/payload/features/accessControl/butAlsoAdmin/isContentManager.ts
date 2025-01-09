import { Access } from "payload";

export const isContentManager: Access = ({ req: { user } }) => {
  if (user?.roles?.includes('admin')) return true
  if (user?.roles?.includes('contentManager')) return true
  return false
}