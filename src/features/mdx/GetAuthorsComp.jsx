import Link from "next/link";

const GetAuthorsComp = (authors) => {

  return (
    <div className="flex gap-4 not-prose">
      {authors.map((author, index) => {
        if (typeof author === 'object' && author.name) {
          return (<Link key={index} href={author.url}><div>{author.name}{index < authors.length - 1 && ','}</div></Link>);
        } else if (typeof author === 'string') return <div key={index}>{author}</div>;
        return null;
      })}
    </div>
  )
}

export default GetAuthorsComp