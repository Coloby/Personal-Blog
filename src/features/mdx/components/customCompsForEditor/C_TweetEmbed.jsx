"use client"
// TODO make this more privacy oriented

import { Tweet } from 'mdx-embed';

const C_TweetEmbed = ({ tweetLink }) => {

  return (
    <div className="flexy w-full my-4">
      <Tweet tweetLink={tweetLink} />
    </div>
  )
}

export default C_TweetEmbed