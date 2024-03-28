import * as React from 'react';

const Boxy = async ({ children = "Insert text here", variant = "note" }) => {
  let modeObj = {}
  switch (variant) {
    case 'warning':
      modeObj.textColor = '!text-yellow-300';
      modeObj.svg = <svg fill="currentColor" width="21" height="19" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.8016 0.820557L20.4356 15.7746C20.5673 16.0026 20.6366 16.2612 20.6366 16.5245C20.6366 16.7878 20.5673 17.0465 20.4356 17.2745C20.304 17.5026 20.1146 17.6919 19.8866 17.8236C19.6586 17.9552 19.3999 18.0245 19.1366 18.0246H1.86861C1.60531 18.0245 1.34665 17.9552 1.11863 17.8236C0.890604 17.6919 0.701253 17.5026 0.569605 17.2745C0.437957 17.0465 0.368651 16.7878 0.368652 16.5245C0.368654 16.2612 0.437963 16.0026 0.569614 15.7746L9.20361 0.820557C9.78061 -0.179443 11.2236 -0.179443 11.8016 0.820557ZM10.5026 2.57056L2.73461 16.0246H18.2706L10.5026 2.57056ZM10.5026 12.6726C10.7678 12.6726 11.0222 12.7779 11.2097 12.9655C11.3973 13.153 11.5026 13.4073 11.5026 13.6726C11.5026 13.9378 11.3973 14.1921 11.2097 14.3797C11.0222 14.5672 10.7678 14.6726 10.5026 14.6726C10.2374 14.6726 9.98304 14.5672 9.79551 14.3797C9.60797 14.1921 9.50261 13.9378 9.50261 13.6726C9.50261 13.4073 9.60797 13.153 9.79551 12.9655C9.98304 12.7779 10.2374 12.6726 10.5026 12.6726ZM10.5026 5.67256C10.7678 5.67256 11.0222 5.77791 11.2097 5.96545C11.3973 6.15299 11.5026 6.40734 11.5026 6.67256V10.6726C11.5026 10.9378 11.3973 11.1921 11.2097 11.3797C11.0222 11.5672 10.7678 11.6726 10.5026 11.6726C10.2374 11.6726 9.98304 11.5672 9.79551 11.3797C9.60797 11.1921 9.50261 10.9378 9.50261 10.6726V6.67256C9.50261 6.40734 9.60797 6.15299 9.79551 5.96545C9.98304 5.77791 10.2374 5.67256 10.5026 5.67256Z"/></svg>
      modeObj.title = "Warning"
      break;
    case 'danger':
      modeObj.textColor = '!text-red-300';
      modeObj.svg = <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 7v6"/><circle cx="12" cy="16" r="1" fill="currentColor"/><path stroke="currentColor" strokeWidth="1.5" d="M7.843 3.802C9.872 2.601 10.886 2 12 2c1.114 0 2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594c-.557.99-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22c-1.114 0-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7c.557-.99 1.571-1.59 3.6-2.792z"/></g></svg>
      modeObj.title = "Danger"
      break;
    case "note":
      modeObj.textColor = '!text-primary_text_color';
      modeObj.svg = <svg width="20" height="19" viewBox="0 0 20 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_359_7151)"><path fill="currentColor" d="M2.00288 18.3452C1.7389 18.3457 1.4855 18.2415 1.29837 18.0553C1.11124 17.8691 1.00568 17.6162 1.00488 17.3522V1.33821C1.00488 0.790215 1.44988 0.345215 1.99788 0.345215H18.0119C18.5599 0.345215 19.0049 0.792215 19.0049 1.34421V13.3452L14.0019 18.3452H2.00288ZM3.00488 16.3452H13.1739L17.0049 12.5162V2.34521H3.00488V16.3452Z" /><path fill="currentColor" d="M6.00488 10.5H14.0049" stroke="currentColor" strokeLinecap="round"/><path fill="currentColor" d="M6.00488 6.5H14.0049" stroke="currentColor" strokeLinecap="round"/></g><defs><clipPath id="clip0_359_7151"><rect width="19" height="18" fill="white" transform="translate(0.504883 0.345215)"/></clipPath></defs></svg>
      modeObj.title = "Author Note"
    default:
      modeObj.textColor = '!text-primary_text_color';
      modeObj.svg = <svg width="20" height="19" viewBox="0 0 20 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_359_7151)"><path fill="currentColor" d="M2.00288 18.3452C1.7389 18.3457 1.4855 18.2415 1.29837 18.0553C1.11124 17.8691 1.00568 17.6162 1.00488 17.3522V1.33821C1.00488 0.790215 1.44988 0.345215 1.99788 0.345215H18.0119C18.5599 0.345215 19.0049 0.792215 19.0049 1.34421V13.3452L14.0019 18.3452H2.00288ZM3.00488 16.3452H13.1739L17.0049 12.5162V2.34521H3.00488V16.3452Z" /><path fill="currentColor" d="M6.00488 10.5H14.0049" stroke="currentColor" strokeLinecap="round"/><path fill="currentColor" d="M6.00488 6.5H14.0049" stroke="currentColor" strokeLinecap="round"/></g><defs><clipPath id="clip0_359_7151"><rect width="19" height="18" fill="white" transform="translate(0.504883 0.345215)"/></clipPath></defs></svg>
      modeObj.title = "Author Note"
  }

  const sharedClasses = "text-base sm:text-lg px-[16px] pb-[24px] pt-[26px] !leading-[1.8] prose-p:m-0 !mr-[10px]"
  const sharedClassesChild = "!my-0 !mr-[12px]"

  return (
    <div className="w-full flexy flex justify-center items-center h-fit my-8 mb-10 relative overflow-visible">
      <div className=" w-fit h-fit relative mr-[8px]">
        <div className={`!z-30 relative top-0 left-0 px-[15px] py-[4px] rounded-tl-lg rounded-br-lg bg-secondary dark:bg-secondary ${modeObj.textColor} border-[2px] border-primary dark:border-primary text-lg w-fit`}>
          <div className="z-20 flexy gap-[10px]">
            <span className={`${modeObj.textColor}`}>
              {modeObj.svg}
            </span>
            <span>{modeObj.title}</span>
          </div>
        </div>
        <div className="relative overflow-visible mt-[-22px] ml-[10px] rounded-xs min-w-[224px] ">
          <div className={`${modeObj.textColor} ${sharedClasses}  absolute left-[8px] text-primary_text_color bottom-[-8px] right-[-18px] top-[8px] !z-[2] bg-secondary rounded-xs`}>
            <p className={`${sharedClassesChild}`}>{children}</p>
          </div >
          <div className="z-10 pointer-events-none relative h-full w-full border-[2px] border-primary dark:border-primary rounded-xs">
            {/* Dummy element to apply size to overlay border */}
              <div className={`${sharedClasses} opacity-0 !z-[1333] bg-secondary rounded-xs `}>
                <p className={`${sharedClassesChild}`}>{children}</p>
              </div >
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boxy