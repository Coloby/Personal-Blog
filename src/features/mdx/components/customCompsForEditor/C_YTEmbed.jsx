"use client"

import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const C_YTEmbed = ({ url }) => {
  const id = url.split("watch?v=")[1];

  return (
    <div className=" h-[450px] my-4">
      <LiteYouTubeEmbed
        id={id}
        title="What's new in Material Design for the web (Chrome Dev Summit 2019)"
      />
    </div>
  )
}

export default C_YTEmbed