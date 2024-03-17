// import Image from 'next/image';

import Image from "next/image"

const ImageTag = ({ src, alt }) => {

  return (
    // <div className="aspect-w-16 aspect-h-9 relative my-7 facedd w-full">
      <Image 
        priority={false}
        src={src} 
        alt={alt} 
        className="w-full h-[450px]" 
        width={750}
        height={450}
        // layout="fill" 
        // objectFit="contain" 
      />
    // {/* </div> */}
  )
}

export default ImageTag