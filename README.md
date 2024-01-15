## Overview

### what is this?
A blog that's going to be a full personal website in the future. I will add pages about everything valuable to me and people alike.
### why?
I want to upgrade my developer and english skills by creating my website while sharing valuable thoughts.

## Important informations
- That's not meant to be cloned but I'll eventually share a template.
- I'm so nooby that I'm not using typescript properly, sorry for this D:
- Before sharing your article to my blog through MDX you should contact me first.

## How it *generally* works?
- MDX to HTML to React elements at build time (SSG)
  - Files in /assets/content/mdx_posts will be transformed by my custom [unified.js](https://unifiedjs.com) pipeline, from MDX (using remark) to HTML (using rehype) that will be converted as react elements by [html-to-react](https://www.npmjs.com/package/html-to-react).
  - Every article is rendered at build time thanks to [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params).
- Styles
  - The MDX is mostly styled thanks to the "prose" class provided by the plugin [tailwindcss-typography](https://www.npmjs.com/package/@tailwindcss/typography). 
  - The other styles are given through [tailwindcss](https://tailwindcss.com/), twilwindcss themes, and only a few using vanilla CSS.