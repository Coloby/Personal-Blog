"use client"
import { atom } from "jotai"
import { atomFamily } from 'jotai/utils'

export const sortSettingAtom = atom("Recommended")
export const ToolsTagsAtom = atom({
  Licenses: ["Free", "Paid", "Open source", "Closed source"],
  Features: ["+Offline", "Lightweight", "Self-hostable", "Privacy focused"],
  Platforms: ["Android", "iOS", "Mac", "Windows", "Linux", "Browser", "Multi platform"],
})
export const IdeasTags = atom({
  Concept : ["Sharing", "Learning"]
})

export const currentCategoryTagsAtom = atom("")

// @ts-ignore
export const getCategoryTagsAtom = atomFamily((currentCat) => {
  switch (currentCat) {
    case 'tools':
      return ToolsTagsAtom
    case 'ideas':
      return IdeasTags
    default:
      return []
  }
})