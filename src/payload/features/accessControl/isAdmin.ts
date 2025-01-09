import { User } from "@/payload/payload-types";
import { Access, FieldAccess } from "payload";

export const isAdmin: Access<User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  if (user?.roles?.includes('admin')) return true
  return false
}

export const isAdminField: FieldAccess<{ id: string }, User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  if (user?.roles?.includes('admin')) return true
  return false
}