import Image from "next/image"

const Stars = ({score, totReviews}) => {
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
    <div className="flex gap-[8px] items-center">
      {/* <div className="text-base w-[25px] text-center">{score}</div> */}
      <div className="text-base ">{score}</div>
      <div className="flexy gap-[6px] h-[18px]">
        {Array.from({length : fullStars}).map((x, i) => (
          <Image
            src={"/features/cards/star/star1.svg"}
            width={20}
            height={20}
            priority={false}
            className={`object-fit w-[20px] h-[20px]`}
            alt=""
            key={`${x}+${i}+"fullStar"`}
          />
        ))} 
        {hasHalfStar && (
          <Image
            src={"/features/cards/star/star0.5.svg"}
            width={20}
            height={20}
            priority={false}
            className={`object-fit w-[20px] h-[20px]`}
            alt=""
          />
        )}
        {Array.from({length : emptyStars}).map((x, i) => (
          <Image
            src={"/features/cards/star/star0.svg"}
            width={20}
            height={20}
            priority={false}
            className={`object-fit w-[20px] h-[20px]`}
            alt=""
            key={`${x}+${i}+"emptyStar"`}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Stars