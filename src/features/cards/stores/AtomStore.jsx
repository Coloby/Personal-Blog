"use client"
import { atom } from "jotai"
import { atomFamily } from 'jotai/utils'

export const sortSettingAtom = atom("Recommended")
export const ToolsTagsAtom = atom({
  Licenses: ["Free", "Freemium", "Paid", "Open source", "Closed source"],
  Features: ["+Offline", "Lightweight", "Privacy focused", "High customizability"],
  Platforms: ["Android", "iOS", "Mac", "Windows", "Linux", "Self-hosted", "Multi platform", "Web app"],
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