## Overview
### what is this?
A blog that's going to be a full personal website in the future. I will add pages about everything valuable to me and people alike.
### why?
I want to upgrade my developer and english skills by creating my website while sharing valuable thoughts.

## Important informations
- That's not meant to be cloned but I'll eventually share a template.
- I'm so nooby that I'm not using typescript properly, sorry for this D:
- Pull requests are welcome :)

## If you want to contribute writing an article using MDX you can do so! 
just follow these 2 rules:
1. Put it into assets/content/mdx_posts and the code will take care of it. 
2. Read the frontmatter of other posts to get it right while avoiding errors.

## How it *generally* works?
- MDX to JSX
  - Files in /assets/content/mdx_posts will be transformed by [next-mdx-remote](https://www.npmjs.com/package/next-mdx-remote) into JSX.
  - The styles of the JSX are given through the "prose" class from [tailwindcss-typography](https://www.npmjs.com/package/@tailwindcss/typography)" plugin.