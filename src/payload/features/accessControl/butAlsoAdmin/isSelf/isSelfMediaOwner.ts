import { Access } from "payload";

export const isSelfMediaOwner: Access = ({ req: { user } }) => {
  if (!user) return false; // Reject anyone not logged-in
  if (!user?.roles?.includes('author') && !user?.roles?.includes('contentManager')) return false
  
  if (user?.roles?.includes('admin')) return true

  return { 
    "mediaOwners.id": {
      equals: user.id,
    }
  }
}