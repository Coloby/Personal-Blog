import { Access } from "payload";

export const isSelfContentOwner: Access = ({ req: { user, data } }) => {
  if (!user) return false;
  if (user?.roles?.includes('admin')) return true

  return { 
    "contentOwner.id": { // if id of the document === user.id, return true
      equals: user.id,
    }
  }
}