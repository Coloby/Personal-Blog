import Link from "next/link";

const AnchorTag = ({ href, children }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  
  if (children.type && children.type.charAt(0) === 'h') {
    return ( <a href={href}>{children}</a> )
  }

  if (isInternalLink) {
    return (
      <Link href={href}>
        <span>{children}</span>
      </Link>
    );
  } else {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer"> {/* External links open in a new tab */}
        {children}
      </a>
    );
  }

}

export default AnchorTag