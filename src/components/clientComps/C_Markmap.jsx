"use client"

import { useEffect } from "react";

const C_Markmap = ({ markdownContent }) => {
  useEffect(() => { // fix needed for the sitemap to actually show. If not, when you click a link that points to /sitemap-graph, it won't show at the first time, you would have to reload the page. I assume that's an incompatibility with next.js
    const mindmap = document.querySelector("#mindmap")
    if (!mindmap.children[0]) window.location.reload()
  }, [])
}

export default C_Markmap