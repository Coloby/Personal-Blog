import { Access } from "payload";

export const isSelfContentManager: Access = ({ req: { user } }) => {
  if (!user) return false;
  if (user?.roles?.includes('admin')) return true

  return { 
    "contentManager.id": { 
      exists: user.id, 
    }
  }
}