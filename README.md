[![Netlify Status](https://api.netlify.com/api/v1/badges/0b89a47a-8aa0-4678-b1ab-e56bbbf09af7/deploy-status)](https://app.netlify.com/sites/edondigital/deploys)

## Overview

### What is this?
- An over-engineered personal website. 
- Different from a portfolio because it's more personal and not as "professional" looking.

### Why? To...
- Prepare for client work upgrading my skills (development, design, english, etc).
- Share thoughts for anyone interested.
- Make people know more about me.
- Be proud of something that's actually useful.
- [More stuff I'm too lazy to write]

## Install
1. Run `pnpm install`.
2. Make a `.env` file and fill it based on the values you can find in the `.env.example` file.

## Important informations
- This project is a work in progress. 
  - To know more, see the [github project](https://github.com/users/Coloby/projects/2), the `sitemap.md` file, or [contact me](https://edondigital.vercel.app/contact).
  - I will prioritize development over design, for now.
- I'm not using typescript properly (if at all), sorry for this D:

## How the codebase *generally* works
### MDX to JS generated at build time (SSG) 
- [mdx-bundler](https://github.com/kentcdodds/mdx-bundler).
  - Makes `getMdxComp` function work. 
    - Pass a directory and a file to transform it into a renderable component. 
    - For example: `const Component = await getMdxComp("header_routes/blog", articleFileName)`.
  - Makes expressions, JS, JSX, and HTML, available to use directly in mdx files.
- Anything that mdx-bundler can't do, and a little more, it's handled by a custom [unified.js](https://unifiedjs.com) pipeline.
- Importing components in MDX.
  - Components within `/src/components/specifically_for_mdx` will automatically made available for importing them directly into MDX.
  - Components that need client-side logic should be added on `src/lib/mdx/getMdxComp.jsx` into the components object.
- Mdx file names - should not contain symbols and spaces need to be substituted with "-". For example:
    - Title on the frontmatter: Finding You. Identity and Purpose beginner's guide.
    - File name on the codebase: finding-you-identity-and-purpose-beginners-guide.mdx
- Every article is rendered at build time thanks to [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params).

### Styles
- Most styles are given through [tailwindcss](https://tailwindcss.com/), tailwindcss themes, and only a few using vanilla CSS.
- The MDX is mostly styled thanks to the "prose" class provided by the plugin [tailwindcss-typography](https://www.npmjs.com/package/@tailwindcss/typography). 








