"use client"

import { useEffect } from "react";

const C_Markmap = ({ markdownContent }) => {
  useEffect(() => {
    const mindmap = document.querySelector("#mindmap")
    if (!mindmap.children[0]) window.location.reload()
  }, [])
}

export default C_Markmap