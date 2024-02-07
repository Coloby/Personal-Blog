// import React from 'react'

// const Btn = ({ text, subText, svgIco, className, ...attributes }) => {
//   const combinedClassName = ` ${className || ''}`;

//   return (
//     <div className="relative z-10">
//       <div className="relative w-[670px] h-20 flex-col justify-center items-end gap-2.5 inline-flex !z-[13]">
//         <div className="relative z-10 w-[680px] h-20 px-[30px] rounded-tl-[30px] rounded-br-[30px] shadow border-2 border-rose-600 justify-start items-center gap-10 inline-flex">
//           <div className="w-[62px] h-[41px] relative">{svgIco}</div>
//           <div className="text-white text-[22px] font-bold">{text}</div>
//           <div className="text-white text-lg font-normal">{subText}</div>
//         </div>
//         <div className="absolute w-full h-full top-[-0px] right-[-10px] z-0">
//           <div className="w-[700px] h-20 right-[-0px] top-[10px] absolute bg-[#1F014B] rounded-tl-[30px] !z-[5] rounded-br-[30px]" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Btn
import React from 'react'

const Btn = ({ text, subText, svgIco, classNameContainer, classNameText, ...attributes }) => {
  const combinedClassNameContainer = ` ${classNameContainer || ''}`;
  const combinedClassNameText = ` ${classNameText || ''}`;

  return (
    <a href={attributes.href}>
      <button {...attributes} className={`${combinedClassNameContainer} relative h-20 flex-col justify-center items-end gap-2.5 inline-flex !z-[1]`}>
        <div className="relative z-10 !w-full h-20 px-[30px] rounded-tl-[30px] rounded-br-[30px] shadow-[0_0px_16px_-4px] shadow-rose-600 border-2 border-rose-600 justify-start items-center gap-10 inline-flex">
          {svgIco && <div className="w-[62px] h-[41px] relative">{svgIco}</div>}
          {text && <p className={`${combinedClassNameText} `}>{text}</p>}
          {subText && <div className="text-white text-lg font-normal hidden sm:block">{subText}</div>}
        </div>
        <div className="absolute w-full h-full top-[-0px] right-[-10px] z-0">
          <div className="w-full h-20 right-[-0px] top-[10px] absolute bg-[#1F014B] rounded-tl-[30px] !z-[5] rounded-br-[30px]" />
        </div>
      </button>
    </a>
  )
}

export default Btn