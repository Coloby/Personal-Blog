import Btn from "@/components/logic/Btn"
import { getMdxComp } from "@/lib/mdx/getMdxComp"

const page = async () => {
  const StuffIHate = await getMdxComp("contact", "convos_I_hate.mdx")
  const StuffILove = await getMdxComp("contact", "convos_I_love.mdx")

  return (
    <section className="w-full h-full flex flex-col">
      {/* Background */}
      <div className="absolute h-full !w-[calc(100vw+20px)] z-1 top-0 left-[-20px] overflow-hidden">
        <div className="top-0 h-[calc(846px+805px)] sm:h-[calc(846px+805px)] sl:h-[calc(846px+196px)] w-full "></div>
        <div className="top-0 h-full w-full bg-[#1F014B] border-t-rose-600 border-t-[10px]"></div>
      </div>
      {/* Hero */}
      <div className="sl:h-[calc(846px-180px)] pb-[774px] flexy !items-start z-10">
        <div className="w-full flexy justify-between sl:mt-12 !flex-col sl:!flex-row sl:h-[calc(846px-300px)] gap-32">
          {/* Ghost w phone */}
          <div className="absolute top-[925px] ml-auto mr-auto sl:ml-0 sl:mr-0 object-left sl:top-0 sl:relative !w-full max-w-[609px] h-full min-h-[400px] sm:min-h-[609px] max-h-[609px] rounded-tl-[150px] rounded-br-[150px] overflow-hidden border border-rose-600 flexy gap-2.5">
            <div className="w-full max-w-[570px] h-full max-h-[570px] origin-top-left shadow border-2 border-rose-600 flex-col flexy gap-2.5  rounded-tl-[150px] rounded-br-[150px]">
              <div className="w-full max-w-[620px] h-full max-h-[620px] sm:overflow-hidden absolute rotate-45 sm:border-4 border-rose-600 flexy gap-2.5 sm:shadow-[0_0px_16px_-4px] !shadow-rose-600">
                <div className="w-full max-w-[564px] h-full max-h-[564px] sm:border-4 border-rose-600 absolute flexy gap-2.5 ">
                  <div className="w-full max-w-[764px] h-full max-h-[764px] border-4 -rotate-45 border-rose-600 absolute flexy gap-2.5 ">
                    <div className="w-full max-w-[521px] h-full max-h-[521px] border-4 border-rose-600 absolute flexy gap-2.5 sm:overflow-hidden sm:shadow-[0_0px_16px_-4px] !shadow-rose-600">
                      <img className="w-full w-500px max-w-[772.10px] h-full max-h-[623px] object-left object-cover origin-top-left border border-rose-600" src="assets/routes_specific/contact/cat_ghost_w_phone.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Most popular socials */}
          <div className="w-full max-w-[780px] h-[609px] flex flex-col justify-between">
            <div className="flexy flex-col sm:gap-4 relative">
              <div className="relative overflow-visible">
                <div className="absolute left-[-105px] sm:block hidden top-[-70px] text-rose-600"><svg width="105" height="111" viewBox="0 0 105 111" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_935_1458)" className="overflow-visible"><path  className="overflow-visible" d="M48.2887 97.9525L78.4811 92.9258L71.5283 63.118" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path  className="overflow-visible" d="M78.4824 92.9241L48.7663 73.0992C28.251 59.4125 22.0254 32.7226 34.8606 13.4836L37.1845 10.0001" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_d_935_1458" x="18.6807" y="0.5" width="69.3018" height="106.953" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.121569 0 0 0 0 0.356863 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_935_1458"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_935_1458" result="shape"/></filter></defs></svg></div>
                <h2 className="text-center flexy sl:gap-4 !flex-col">
                  <span className="flexy">
                    <Btn classBorder={"!top-[10px] !right-[-10px]"} href="mailto:edondigital@gmail.com" classContainer={"!mr-0 lg:ml-[10px] lg:mr-[25px] text-xl xs:text-[38px] font-black leading-[71px] tracking-widest"} >
                      <div className="flexy w-full">Email-me</div>
                    </Btn>
                  </span>
                  <span className="text-xl xs:text-[30px] font-extrabold mt-6 tracking-widest">or Contact me</span>
                </h2>
              </div>
              <h2 className="text-center text-xl xs:text-[30px] font-black tracking-widest">Where I'm most active</h2>
            </div>
            <div className="flex flex-col gap-16 mt-16 items-center justify-center ml-4 mr-2 sl:mx-16">
              <div className="relative z-20 w-full !mr-4">
                <div className="w-[62px] rotate-[-6deg] !z-[11] h-[41px] left-[-24px] top-[-27px] absolute "><svg width="65" height="57" viewBox="0 0 65 57" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_942_1761)"><path d="M36.254 19.6889L36.4471 19.7654L40.023 21.1807L41.8557 17.6641L41.9547 17.4723L45.0317 11.5666C45.2287 11.1895 45.5412 10.862 45.9275 10.628C46.3139 10.3939 46.7555 10.2645 47.1935 10.257C47.6314 10.2494 48.0447 10.3642 48.378 10.5859C48.7113 10.8076 48.9488 11.1257 49.0586 11.4975L54.68 30.5833L22.377 46.3721L10.7642 30.3139C10.535 29.998 10.428 29.6132 10.4576 29.2115C10.4872 28.8098 10.6519 28.4107 10.9296 28.0682C11.2072 27.7257 11.5843 27.4564 12.0097 27.2967C12.4352 27.1371 12.8885 27.0948 13.3082 27.1755L19.5842 28.381L19.7451 28.4121L23.683 29.1672L24.8579 25.4425L24.9048 25.2909L26.9756 18.7523C27.0679 18.461 27.2292 18.1843 27.4478 17.9427C27.6663 17.7011 27.9363 17.5009 28.2377 17.357C28.5391 17.2132 28.8642 17.1293 29.1887 17.1117C29.5131 17.0941 29.8287 17.1432 30.1118 17.2553L36.254 19.6889Z" fill="#EEC802"/></g><defs><filter id="filter0_d_942_1761" x="0.453125" y="0.256836" width="64.2266" height="56.1152" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.933333 0 0 0 0 0.784314 0 0 0 0 0.00784314 0 0 0 0.5 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_942_1761"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_942_1761" result="shape"/></filter></defs></svg></div>
                  <Btn classContainer="!mr-0" classBorder={"!top-[10px] !right-[-10px]"} href="mailto:edondigital@gmail.com">
                    <div className="h-20 justify-start items-center gap-10 flex !w-full">
                      <div className="w-[62px] h-[41px] relative"><svg width="63" height="42" viewBox="0 0 63 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_942_1928)"><path d="M47.7318 0C44.5907 0 41.6885 0.531017 39.0245 1.59281C36.3606 2.61528 34.0346 4.07028 32.0466 5.95791C30.0983 7.84554 28.5675 10.0672 27.4542 12.6234C26.3806 15.1796 25.8438 17.9717 25.8438 20.9998C25.8438 24.0279 26.3806 26.82 27.4542 29.3761C28.5675 31.9323 30.0983 34.1545 32.0466 36.0421C33.9948 37.9297 36.3009 39.4045 38.9648 40.4663C41.6288 41.4887 44.531 42 47.6721 42C50.7336 42 53.5965 41.4887 56.2604 40.4663C58.9244 39.4438 61.1706 37.9297 62.9996 35.9241L60.1967 33.1518C58.487 34.8821 56.5982 36.1403 54.5306 36.9268C52.4631 37.7133 50.2368 38.1068 47.8512 38.1068C45.3463 38.1068 43.0203 37.6937 40.8732 36.8678C38.7262 36.0026 36.8573 34.8031 35.2669 33.2694C33.6765 31.6963 32.4243 29.8873 31.5098 27.8424C30.635 25.7581 30.1974 23.4773 30.1974 20.9998C30.1974 18.5223 30.635 16.2611 31.5098 14.2162C32.4243 12.1319 33.6765 10.3229 35.2669 8.78922C36.8573 7.21619 38.7262 6.01709 40.8732 5.19126C43.0203 4.32608 45.3463 3.89319 47.8512 3.89319C50.2368 3.89319 52.4631 4.28667 54.5306 5.07318C56.5982 5.82036 58.487 7.05889 60.1967 8.78922L62.9996 6.01696C61.1706 4.01135 58.9244 2.5169 56.2604 1.53376C53.5965 0.511288 50.7536 0 47.7318 0Z" fill="currentColor"/><path d="M21.888 0C18.747 0 15.8447 0.531017 13.1808 1.59281C10.5168 2.61528 8.19084 4.07028 6.20283 5.95791C4.25458 7.84554 2.72369 10.0672 1.6104 12.6234C0.536871 15.1796 0 17.9717 0 20.9998C0 24.0279 0.536871 26.82 1.6104 29.3761C2.72369 31.9323 4.25458 34.1545 6.20282 36.0421C8.15107 37.9297 10.4571 39.4045 13.1211 40.4663C15.785 41.4887 18.6873 42 21.8283 42C24.8899 42 27.7527 41.4887 30.4167 40.4663C33.0806 39.4438 35.3269 37.9297 37.1558 35.9241L34.3529 33.1518C32.6432 34.8821 30.7544 36.1403 28.6869 36.9268C26.6193 37.7133 24.393 38.1068 22.0074 38.1068C19.5025 38.1068 17.1765 37.6937 15.0295 36.8678C12.8824 36.0026 11.0136 34.8031 9.42316 33.2694C7.83275 31.6963 6.5805 29.8873 5.66602 27.8424C4.79129 25.7581 4.35363 23.4773 4.35363 20.9998C4.35363 18.5223 4.79129 16.2611 5.66602 14.2162C6.5805 12.1319 7.83275 10.3229 9.42316 8.78922C11.0136 7.21619 12.8824 6.01709 15.0295 5.19126C17.1765 4.32608 19.5025 3.89319 22.0074 3.89319C24.393 3.89319 26.6193 4.28667 28.6869 5.07318C30.7544 5.82036 32.6432 7.05889 34.3529 8.78922L37.1558 6.01696C35.3269 4.01135 33.0806 2.5169 30.4167 1.53376C27.7527 0.511288 24.9098 0 21.888 0Z" fill="currentColor"/><path d="M26.2702 19.1421H3.72754V22.8581H26.2702V19.1421Z" fill="currentColor"/></g><defs><clipPath id="clip0_942_1928"><rect width="63" height="42" fill="currentColor"/></clipPath></defs></svg></div>
                      <p className={`ss:text-xl font-semibold text-center`}>Ed's Corner</p>
                      <div className="text-white text-lg font-normal hidden sm:block">A centralized place to know me</div>
                    </div>
                  </Btn>
              </div>
              <div className="relative lg:ml-[50px] w-full !mr-4">
                <Btn classContainer="!mr-0" classBorder={"!top-[10px] !right-[-10px]"} href="https://twitter.com/edondigital">
                  <div className="h-20 justify-start items-center gap-10 flex !w-full">
                    <div className="w-[62px] h-[41px] relative"><svg width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.2906 10.4556C41.3187 10.9113 41.3187 11.3671 41.3187 11.8271C41.3187 25.8394 31.8254 42 14.4662 42V41.9914C9.33805 41.9997 4.31608 40.3494 0 37.2375C0.745711 37.3383 1.495 37.3886 2.24633 37.3906C6.49673 37.3944 10.6249 35.7925 13.9674 32.8423C11.998 32.8005 10.0895 32.0683 8.50868 30.7479C6.92784 29.4276 5.75372 27.5851 5.15047 25.4782C6.5644 25.7845 8.02204 25.722 9.41109 25.2956C5.00838 24.296 1.84077 19.9493 1.84077 14.9011V14.7667C3.15328 15.5881 4.62218 16.0433 6.12388 16.0939C1.97723 12.9797 0.698945 6.78089 3.20288 1.93427C5.57221 5.21043 8.52838 7.88989 11.8794 9.79862C15.2304 11.7073 18.9012 12.8026 22.6535 13.0133C22.2793 11.2038 22.3346 9.31558 22.8137 7.53756C23.2928 5.75954 24.179 4.15403 25.3836 2.8816C29.1847 -1.13342 35.1629 -0.927527 38.7361 3.34133C40.8495 2.87247 42.8763 2.00186 44.7291 0.766981C44.0246 3.22235 42.5503 5.30655 40.5804 6.63186C42.4513 6.38419 44.2783 5.82147 46 4.96262C44.7335 7.09388 43.1387 8.95385 41.2906 10.4556Z" fill="currentColor" fill-opacity="0.35"/><path d="M27.3764 17.7844L44.5008 0H40.4424L25.5738 15.4416L13.6978 0H0L17.9588 23.3507L0 42H4.05835L19.7607 25.6932L32.3022 42H46L27.3753 17.7844H27.3764ZM21.8181 23.5561L19.9983 21.231L5.52046 2.72934H11.7538L23.4371 17.661L25.2565 19.9861L40.4443 39.3947H34.2117L21.8181 23.5571V23.5561Z" fill="currentColor"/></svg></div>
                    <p className={`ss:text-xl font-semibold text-center`}>X / Twitter</p>
                    <div className="text-white text-lg font-normal hidden sm:block">Daily tweets and updates :P</div>
                  </div>
                </Btn>
              </div>
              <div className="relative lg:ml-[100px] w-full !mr-4">
                <Btn classContainer="!mr-0" classBorder={"!top-[10px] !right-[-10px]"} href="https://github.com/coloby">
                  <div className="h-20 justify-start items-center gap-10 flex !w-full">
                    <div className="w-[62px] h-[41px] relative"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 20 20"><path fill="currentColor" d="M20 10.25c0 2.234-.636 4.243-1.908 6.027c-1.271 1.784-2.914 3.018-4.928 3.703c-.234.045-.406.014-.514-.093a.539.539 0 0 1-.163-.4V16.67c0-.863-.226-1.495-.677-1.895a8.72 8.72 0 0 0 1.335-.24c.394-.107.802-.28 1.223-.52a3.66 3.66 0 0 0 1.055-.888c.282-.352.512-.819.69-1.402c.178-.583.267-1.252.267-2.008c0-1.077-.343-1.994-1.028-2.75c.32-.81.286-1.717-.105-2.723c-.243-.08-.594-.03-1.054.147a6.94 6.94 0 0 0-1.198.587l-.495.32a9.03 9.03 0 0 0-2.5-.346a9.03 9.03 0 0 0-2.5.347a11.52 11.52 0 0 0-.553-.36c-.23-.143-.593-.314-1.088-.514c-.494-.2-.868-.26-1.12-.18c-.381 1.005-.412 1.912-.09 2.722c-.686.756-1.03 1.673-1.03 2.75c0 .756.09 1.423.268 2.002c.178.578.406 1.045.683 1.401a3.53 3.53 0 0 0 1.048.894c.421.24.83.414 1.224.52c.395.108.84.188 1.335.241c-.347.32-.56.779-.638 1.375a2.539 2.539 0 0 1-.586.2a3.597 3.597 0 0 1-.742.067c-.287 0-.57-.096-.853-.287c-.282-.192-.523-.47-.723-.834a2.133 2.133 0 0 0-.631-.694c-.256-.178-.471-.285-.645-.32l-.26-.04c-.182 0-.308.02-.378.06c-.07.04-.09.09-.065.153a.738.738 0 0 0 .117.187a.961.961 0 0 0 .17.16l.09.066c.192.09.38.259.567.508c.187.249.324.476.41.68l.13.307c.113.338.304.612.574.821c.269.21.56.343.872.4c.312.058.614.09.905.094c.29.004.532-.011.723-.047l.299-.053c0 .338.002.734.007 1.188l.006.72c0 .16-.056.294-.17.4c-.112.108-.286.139-.52.094c-2.014-.685-3.657-1.92-4.928-3.703C.636 14.493 0 12.484 0 10.25c0-1.86.447-3.574 1.341-5.145a10.083 10.083 0 0 1 3.64-3.73A9.6 9.6 0 0 1 10 0a9.6 9.6 0 0 1 5.02 1.375a10.083 10.083 0 0 1 3.639 3.73C19.553 6.675 20 8.391 20 10.25"/></svg></div>
                    <p className={`ss:text-xl font-semibold text-center`}>Github</p>
                    <div className="text-white text-lg font-normal hidden sm:block">Where the "programming" magic happens</div>
                  </div>
                </Btn>
              </div>
            </div>
          </div>
          </div>
      </div>
      {/* Under fold */}
      <div className="h-fit z-10">
        <div className=" border-t-rose-600 border-t-[10px] w-full mt-[80px] bg-[#1f014b] h-full ">
          <div className="w-full h-full flexy mt-[80px] flex-col gap-[40px]">
            {/* Other socials */}
            <div className="flex flex-col gap-[40px] z-10">
              <h2 className="text-[45px] font-semibold text-center">Other socials</h2>
              <div className="flexy w-full">
                <div className=" flex-col ss:flex-row flex gap-4 items-center text-primary_text_color no-underline bg-[#5662f6] p-4 rounded-sm">
                  <svg className="!text-[40px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/></svg>
                  <div className="flexy flex-col gap-4">
                    <div className="flex gap-4 flex-col sm:flex-row">
                      <Btn classContainer="!mr-0" href="https://discord.gg/2WURnSNg"><div className="flexy w-full text-center">Join the server</div></Btn>
                      <span className="text-center">(very much a work in progress)</span>
                    </div>
                    Username: edondigital
                  </div>
                </div>
              </div>
            </div>
            {/* Conversations I... */}
            <div className=" mt-[100px] sl:mt-[290px] relative">
              <div className="!z-10 relative">
                <div className="flex flex-col xl:flex-row gap-[100px] lg:gap-[200px] px-4 xl:px-8">
                  {/* Hate */}
                  <div className="max-w-[650px] w-full h-fit relative">
                    <div className="shadow-[0_0px_16px_-4px] shadow-rose-600 w-[calc(100%+40px)] px-4 left-[-20px] top-[24.02px] absolute bg-[#1F014B] z-10 rounded-tl-[22px] rounded-br-[22px] border-2 border-red-600 justify-center items-center gap-0.5 inline-flex">
                      <div className="flexy text-center bg-[#1F014B] flex-col ss:flex-row"><span className=" text-xl py-2 lg:text-[40px] font-semibold">Conversations&nbsp;</span><span> </span><span className="text-red-600  text-xl py-2 lg:text-[40px] font-semibold"> I hate {">:("}</span></div>
                    </div>
                    <div className="w-full px-4 pt-[130px] ss:pt-[90px] lg:pt-[130px] pb-8 left-[17px] top-0 bg-[#1F014B] rounded-tl-[22px] rounded-br-[22px] border-2 border-red-600 flex-col justify-start items-center gap-2.5 inline-flex">
                      <StuffIHate />
                    </div>
                  </div>
                  {/* Love */}
                  <div className="max-w-[650px] w-full h-fit relative">
                    <div className="shadow-[0_0px_16px_-4px] shadow-[#CC00FF] w-[calc(100%+40px)] px-4 left-[-20px] top-[24.02px] absolute bg-[#1F014B] z-10 rounded-tl-[22px] rounded-br-[22px] border-2 border-[#CC00FF] justify-center items-center gap-0.5 inline-flex">
                      <div className="flexy text-center bg-[#1F014B] flex-col ss:flex-row"><span className=" text-xl py-2 lg:text-[40px] font-semibold">Conversations&nbsp;</span><span> </span><span className="text-[#CC00FF]  text-xl py-2 lg:text-[40px] font-semibold"> I love {"<3"}</span></div>
                    </div>
                    <div className="w-full px-4 pt-[130px] ss:pt-[90px] lg:pt-[130px] pb-8 left-[17px] top-0 bg-[#1F014B] rounded-tl-[22px] rounded-br-[22px] border-2 border-[#CC00FF] flex-col justify-start items-center gap-2.5 inline-flex">
                      <StuffILove />
                    </div>
                  </div>
                </div>
              </div>
              <img className="absolute z-1 shadow-sm top-[-250px] opacity-[0.5]  right-[0px] left-0 ml-auto mr-auto  flexy w-[1200px] h-[1200px] origin-top-left " src="assets/routes_specific/contact/grid.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page