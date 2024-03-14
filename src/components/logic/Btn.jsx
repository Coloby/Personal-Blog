import Link from "next/link";

const Btn = ({ children, classContainer = "", classBorder = "", ...attributes }) => {
  const WrapperComponent = attributes.href ? Link : 'button';

  return (
    <WrapperComponent {...attributes} className={`${classContainer} text-lg relative flex-col !z-[1] no-underline mr-[5px] text-primary_text_color`}>
      <div className="relative z-10 pointer-events-none !w-full h-full px-[30px] rounded-tl-[30px] rounded-br-[30px] shadow-[0_0px_16px_-4px] shadow-primary border-2 border-primary justify-start items-center gap-10 flex text-primary_text_color">
        {children}
      </div>
      <div className={`${classBorder} absolute w-full h-full top-[5px] right-[-5px] z-0`}>
        <div className="w-full h-full absolute bg-secondary rounded-tl-[30px] !z-[5] rounded-br-[30px]" />
      </div>
    </WrapperComponent>
  )
}

export default Btn