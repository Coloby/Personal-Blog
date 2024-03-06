import Link from "next/link";

const AnchorTag = ({ href, children }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  console.log(`children:`, children.type && children.type.charAt(0))
  
  // Use Next.js Link for internal links, otherwise use a regular anchor tag
  if (children.type && children.type.charAt(0) === 'h') {
    return (
      <a href={href}>
        {children}
      </a>
    )
  }

  if (isInternalLink) {
    return (
      <Link href={href}>
        <span>{children}</span>
      </Link>
    );
  } else {
    // External links open in a new tab
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

}

export default AnchorTag