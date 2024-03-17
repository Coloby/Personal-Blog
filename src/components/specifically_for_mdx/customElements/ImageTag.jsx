import Image from "next/image"

const ImageTag = ({ src, alt }) => {

  return (
    <Image 
      priority={false}
      src={src} 
      alt={alt} 
      className="w-full h-[450px]" 
      width={750}
      height={450}
    />
  )
}

export default ImageTag