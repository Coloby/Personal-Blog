[![Netlify Status](https://api.netlify.com/api/v1/badges/0b89a47a-8aa0-4678-b1ab-e56bbbf09af7/deploy-status)](https://app.netlify.com/sites/edondigital/deploys)

## Overview of the project

### what is this?
An over-engineered personal website. Different from a portfolio because is more personal and not as "professional" looking.
### why?
- Upgrade my skills (development, design, english, etc).
- Share thoughts for anyone interested.
- Making people know more about me.
- Being proud of something that's actually useful.
- And more stuff I'm too lazy to write.

## Important informations
- That's not meant to be cloned but I'll eventually share a template.
- I'm not using typescript properly (if at all), sorry for this D:

## Overview on how it *generally* works
### MDX to JS (renderable to HTML for the browser) at build time (SSG) 
  - [mdx-bundler](https://github.com/kentcdodds/mdx-bundler).
    - Transforms files in `/assets/content/route_specific_mdx/blog/mdx_posts` into renderable JS.
    - makes expressions, HTML, JSX, JS available to use directly in the mdx files.
  - Anything that bundler-mdx can't do, and a little more, it's handled by a custom [unified.js](https://unifiedjs.com) pipeline.
  - Components within the dir `/src/components/specifically_for_mdx` will automatically made available for importing them directly into MDX.
  - Every article is rendered at build time thanks to [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params).
### Styles
  - The MDX is mostly styled thanks to the "prose" class provided by the plugin [tailwindcss-typography](https://www.npmjs.com/package/@tailwindcss/typography). 
  - The other styles are given through [tailwindcss](https://tailwindcss.com/), twilwindcss themes, and only a few using vanilla CSS.
## To better understand the codebase
- Mdx files: The title from the frontmatter can be anything, but the file name should be the same as the title but without any symbols and separated by "-" instead of " " or spaces.