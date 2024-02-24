import React from 'react'

const BigBtn = ({ children, variant, ...attributes }) => {
  const variants = {
    active: {
      shadow: "shadow-[0_0px_16px_-4px] shadow-rose-600 border-red-600 ",
      border: "border-2 border-red-600"
    },
    muted: {
      shadow: "border-red-600/50",
      border: "border-2 border-red-600/50"
    }
  }
  
  return (
    <button {...attributes} className="max-w-[650px] w-full h-fit relative">
      <div className={`${variants[variant]?.border || variants.active.border} flexy w-full px-4 py-[30px] left-[17px] top-0 bg-[#1F014B] rounded-tl-[22px] rounded-br-[22px]  flex-col justify-start items-center gap-2.5 inline-flex`}>
        <div className={`${variants[variant]?.shadow || variants.active.shadow} w-[calc(100%+40px)] px-4 left-[-20px] top-0 bottom-0 m-auto h-[45px] absolute bg-[#1F014B] z-10 rounded-tl-[22px] rounded-br-[22px] border-2 justify-center items-center gap-0.5 inline-flex`}>
          <div className="flexy text-center">{children}</div>
        </div>
      </div>
    </button>
  )
}

export default BigBtn