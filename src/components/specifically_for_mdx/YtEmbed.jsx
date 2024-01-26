"use client"

import React from 'react'
// import { useState } from "react";
// import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const YtEmbed = ({ url, title }) => {
  // const [s,us] = useState("")
  return (
    <div className=" w-full flex justify-center items-center py-4">
      {/* <iframe 
        width="560" 
        height="315" 
        src={url}
        allow="autoplay; encrypted-media" 
        allowFullScreen
      /> */}
      {/* <LiteYouTubeEmbed
        id="L2vS_050c-M"
        title="What's new in Material Design for the web (Chrome Dev Summit 2019)"
      /> */}
      {/* <button onClick={() => {
        us("dd")
        console.log(s)
      }}></button> */}
      <a href={url}>Yt vid</a>
    </div>
  )
}

export default YtEmbed