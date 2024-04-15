import Btn from "@/components/logic/Btn"
import GetUpdatesComps from "@/components/logic/GetUpdatesComps"
import SocialBTNs from "@/components/ui/SocialBTNs"
import { getMdxComp } from "@/lib/mdx/getMdxComp"
import { getFrontmatterBySlug } from "@/lib/mdx/mdxManager"
import { defaultProseSettings } from "@/lib/mdx/proseSettings"
import { scrollbar } from "@/lib/tailwind-scrollbar/settings"
import GetAuthorsComp from "@/utils/GetAuthorsComp"
import Image from "next/image"
import Link from "next/link"
import { Client } from 'pg';

export default async function Home() {
  const wonderRoomPieceLink = "https://www.youtube.com/watch?v=TDqsr3MNTTc"
  const { udpateComps } = GetUpdatesComps(6)
  const NowOverviewComp =  await getMdxComp("header_routes/root", `now_overview.mdx`)
  const { frontmatter } = await getFrontmatterBySlug("header_routes/blog", "finding-you-identity-and-purpose-beginners-guide.mdx")
  const authors = GetAuthorsComp(frontmatter.authors)

  const client = new Client({
    connectionString: process.env.DATABASE_URI,
  });

  client.connect();

  async function fetchRow() {
    try {
      const res = await client.query('SELECT string FROM my_table WHERE id = $1', [2]);
      console.log(res.rows[0]);
    } catch (err) {
      console.error(err.stack);
    } finally {
      await client.end();
    }
  }
  
  fetchRow();
  
  return (
    <div className={`sm:w-[1300px] !max-w-none min-h-screen flex flex-col gap-[150px] lg:gap-[200px] prose ${defaultProseSettings}`}>
      {/* Backgrounds */}
      <div className="flexy w-full h-full flex-col top-0 absolute items-start left-0 content-start pointer-events-none ">
        <Image
          src="/assets/backgrounds/vapo_hero.jpg"
          width={1920}
          height={1080}
          className=" object-cover not-prose h-[1200px] left-0 transition-none z-0 w-screen"
          alt=""
          priority={true}
        />
        <div className="bg-gradient-to-t from-primary via-secondary to-secondary h-[1200px] w-full"></div>
        <div className="bg-gradient-to-t from-secondary via-secondary to-primary h-[1600px] w-full"></div>
        <div className="bg-gradient-to-t from-primary via-secondary to-secondary h-[1600px] w-full"></div>
        <div className="bg-gradient-to-t from-secondary via-secondary to-primary h-[1600px] w-full"></div>
      </div>
      {/* Hero */}
      <section className="z-10">
        <div className=" justify-center items-center flex flex-col lg:flex-row mt-12 max-w-none z-10 lg:gap-32">
          <div className=" not-prose flexy text-center flex-col items-start">
            <h2 className="font-bold text-[22px] h-[27px] leading-[27px]">Welcome to</h2>
            <h1 className="h-[106px] leading-[50px] xs:h-[53px] xs:leading-[53px] flex items-center font-extrabold text-[44px] tracking-[3.52px]">Ed's Corner</h1>
            <div className=" font-bold text-lg flexy   items-start">
              <p className="mt-[6px] !whitespace-pre-wrap flexy items-start flex-col">My personal website to<br />share anything about myself</p>
            </div>
            <div className=" w-full flexy ss:flex-row flex-col gap-4 ss:gap-6 my-4">
                {/* <Btn text={"Interests"} href="interests" classContainer={"h-12 w-[150px]"}>
                  <div className="flexy w-full">Interests</div>
                </Btn> */}
                <Btn text={"Blog"} href="blog" classContainer={"h-12 w-[150px]"}>
                  <div className="flexy w-full">Blog</div>
                </Btn>
            </div>
            {/* <Btn text={"Projects"} href="projects" classContainer={"h-12 w-[150px]"}>
              <div className="flexy w-full">Projects</div>
            </Btn> */}
            {/* <p className="mt-4 font-semibold">And more!</p> */}
          </div>
          <div className="relative w-full max-w-[330px] flex lg:block justify-center">
            <div className="max-w-[330px] lg:!my-0 h-[284px] lg:py-0 ss:!max-h-[400px] min-h-[220px]  overflow-hidden rounded-[30px] relative !mt-[100px]">
              <Image
                src="/assets/routes_specific/home/white_cat.png"
                width={450}
                height={400}
                className=" aspect-w-1 aspect-h-1 object-cover not-prose w-full h-full"
                alt=""
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Bento UI (flexbox) */}
      <section className="z-10 flexy text-base flex-col h-fit">
        <h2 className="tracking-[2.52px]">Featured</h2>
        <div className="max-w-[1100px] w-full  pt-4 rounded-sm flex-col justify-start items-center gap-12 lg:gap-6 flex">
          <div className="w-full justify-center gap-12 lg:gap-6  flex items-center md:items-start flex-col md:flex-row">
            {/* Now */}
            <div className="max-w-[340px] h-full p-4 bg-secondary border border-primary/80 rounded-sm flex-col items-center flex">
              <h3 className="!mb-4 !text-xl !mt-4 text-center flex flex-col gap-3">Some of the<br /><span className="">stuff I'm up to <Link href={"/now"} className="text-center text-xl "><span>Now</span></Link></span></h3>
              <ul className=" text-lg !mb-0">
                <NowOverviewComp />
              </ul>
              {/* <img className="w-[251px] h-[143px] rounded-sm border border-primary" src="https://via.placeholder.com/251x143" /> */}
            </div>
            {/* About */}
            <div className="w-full h-full pt-4 bg-secondary border border-primary/80 rounded-sm flex-col justify-center items-center flex">
                <div className="!h-[64px] w-full flexy !my-4">
                  <h3 className=" !my-0 px-4  !text-xl text-center">Illustrating most stuff <span><Link href={"about"} className="text-center text-xl"><span>About</span></Link></span> me through images</h3>
                </div>
                <Image
                  src="/assets/routes_specific/home/biophotophy.png"
                  width={850}
                  height={540}
                  className=" w-full h-full !my-0 rounded-sm object-cover"
                  alt=""
                  priority={false}
                />
            </div>
          </div>
          <div className="w-full !min-h-fit md:w-[600px] lg:w-full gap-12 lg:gap-6 flex items-center lg:items-start flex-col lg:flex-row">
            {/* Blog */}
            <div className="w-full h-fit gap-6 lg:max-h-[320px] justify-between items-center flex-col lg:flex-row lg:p-4 lg:pr-0 bg-secondary border border-primary/80 rounded-sm  flex ">
              <div className="flex !h-fit flex-col p-4 lg:p-0 !pb-0 w-full ">
                <h3 className="!text-xl !mt-4 inline-block">From the <span><Link href={"blog"} className="text-xl"><span>Blog</span></Link></span></h3>
                <h4 className="font-semibold text-[20px] "><a href={"blog/" + frontmatter.url} className="!no-underline"><span className="!no-underline !text-primary_text_color">{frontmatter.title}</span></a></h4>
                <p className="!mb-0 text-lg ">{frontmatter.description}</p>
                <span className="flex flex-wrap gap-x-8 gap-y-1 my-4 items-center "><address className="flex !text-base">Author:&nbsp;{authors}</address><time>{frontmatter.publishDate}</time><span>{frontmatter.readingTime}</span></span>
              </div>
              <a className="flexy flex-col w-full items-center" href={"blog/" + frontmatter.url}>
                <Image
                  src={"/assets/routes_specific/blog/" + frontmatter.thumbnail}
                  width={360}
                  height={230}
                  className=" h-full object-cover not-prose sm:rounded-b-[0] lg:rounded-bl-sm !w-full  lg:rounded-r-[0] max-w-[370px] lg:mr-[-16px] lg:max-h-[208px] !mx-0 ml-[38px] rounded-sm border border-primary"
                  alt=""
                  priority={false}
                />
              </a>
            </div>
            {/* Wonder room */}
            <div className="max-w-[340px] gap-6 lg:gap-6 w-full h-full justify-between max-h-[320px] pt-4 bg-secondary border border-primary/80 rounded-sm flex-col items-center flex">
              <div className="flexy flex-col">
                <h3 className="!mt-4 !text-xl px-4 text-center">A piece of my <span><Link href={"wonder-room"} className="text-xl"><span>Wonder room</span></Link></span></h3>
                <a href={wonderRoomPieceLink} className="font-semibold !mb-0 text-lg text-center px-4 w-full">What's a digital garden?</a>
              </div>
              <a href={wonderRoomPieceLink} className="w-full">
                <Image
                  src="/assets/routes_specific/home/nodes_network.jpg"
                  width={350}
                  height={180}
                  className="border-primary/80 border object-cover not-prose w-full max-h-[160px] transition-none z-0 rounded-sm"
                  alt=""
                  priority={false}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Updates */}
      <section className={`z-10 max-w-none text-primary_text_color w-full flexy flex-col gap-4`}>
        <h2 className=" text-primary_text_color tracking-[2.52px]">Updates</h2>
          <div className=" flexy text-lg  w-full h-full max-w-[700px] p-4 bg-secondary no-scrollbar rounded-t-[20px] rounded-b-[4px] border-b-4 border-primary flex-col justify-start items-start gap-2 flex">
            <div className={`${scrollbar} w-full min-h-full max-h-[600px] max-w-[700px] lg:overscroll-contain overflow-y-auto pr-4 overflow-x-hidden flex-col justify-start items-start flex`}>
              {udpateComps.map((updateComp, index) => (
                <div key={index}>
                  {updateComp}
                </div>
              ))}
            </div>
          </div>
        {/* <Link href={""} className="!mt-2">See full log</Link> */}
      </section>
      {/* Last sentence */}
      <section className="z-10 not-prose">
        <div className="top-4 flex px-4 flex-col justify-center items-center text-center z-10 bg-secondary border-x border-primary/80 rounded-sm py-12">
          <h2 className="lg:!leading-[70px] !mt-0 text-xl ss:text-[30px] mb-6 leading-[44px] lg:!text-[50px]"><Link href={"contact"}><span>Contact</span></Link> me from anywhere and<br />I'll be happy to have a chat!</h2>
          <div className="flexy w-full prose-p:h-5 flex-col xs:flex-row gap-8 xs:gap-10">
            <div className="flex items-center xs:items-start flex-col gap-8 justify-center text-left">
              <div className="flexy gap-8 flex-col ss:flex-row">
                <SocialBTNs />
                <a href="https://www.skool.com/@leof-dopp-8139" className="underline text-[#bb9af7]">Skool</a>
              </div>
              <div className="!text-primary_text_color flex-col sm:flex-row flex gap-8 items-center no-underline">
                <div className="flexy gap-2">
                  <svg className="!text-[40px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/></svg>
                  Username: edondigital
                </div>
                <Btn classContainer="!mr-0" href="https://discord.gg/QyeNQPa3tY"><div className="flexy w-full text-center !no-underline !text-primary_text_color">Join the server</div></Btn>
              </div>
              <a href={`mailto:${process.env.OWNER_EMAIL}`} className="!text-primary_text_color flex gap-2 items-center flex-col ss:flex-row ">
                <svg className="!text-[40px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0z"/><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0z"/></g></svg>
                edondigital@gmail.com
              </a>
            </div>
          </div>
          <div className=" max-w-prose mt-8">
            <p>Criticism and feedback is always embraced.</p>
          </div>
        </div>
      </section>
      {/* Cat under construction */}
      <section className="mt-40 overflow-hidden relative flexy prose-a:!text-primary_text_color prose-a:!no-underline">
        <div className="w-full flexy absolute overflow-hidden">
          <Image
            src="/assets/routes_specific/home/dancing_cat.gif"
            width={420}
            height={510}
            className=" object-cover not-prose h-full w-full transition-none z-[6] max-h-[490px] max-w-[400px] mx-[2px]"
            alt=""
            unoptimized
            priority={false}
          />
        </div>
        <div className="relative overflow-y-hidden flexy w-full h-full">
          <div className="overflow-hidden border-[2px] border-primary/80 rounded-sm flex flex-col  max-w-[800px] bg-[#eaf1f7]">
            <div className="rotate-[-10deg] mt-[300px] w-[120%] ml-[-30px] transform relative z-[6]         bg-gradient-to-br from-yellow-400 to-yellow-800 border border-black border-dashed outline-dashed">
              <div className="marquee inline-flex items-center gap-x-6 overflow-hidden        whitespace-nowrap text-5xl font-bold leading-relaxed text-gray-50">Building great stuff - Loading the void... - Taking longer than expected - Still not finished - 🚧🚧🚧</div>
            </div>
            <div className=" w-[120%] ml-[-20px] transform relative z-[3]         bg-gradient-to-br from-yellow-400 to-yellow-800 border border-black border-dashed outline-dashed">
              <div className="marquee2 inline-flex items-center gap-x-6 overflow-hidden        whitespace-nowrap text-5xl font-bold leading-relaxed text-gray-50">Work in progress - Under construction - Please wait... - Hey, it's you! 👷‍♀️ - Drink! - <span><Link href="you-won" className="!text-primary_text_color">You won!</Link></span> </div>
            </div>
            <div className="rotate-[4deg] w-[120%] ml-[-20px] transform relative z-[41]         bg-gradient-to-br from-yellow-400 to-yellow-800 border border-black border-dashed outline-dashed">
              <div className="marquee inline-flex items-center gap-x-6 overflow-hidden        whitespace-nowrap text-5xl font-bold leading-relaxed text-gray-50">Please wait - It's going to be great - Suprise coming - 👷‍♂️ - Can it even fly? - Posture check</div>
            </div>
            <div className="rotate-[40deg] w-[200%] ml-[-200px] mt-[-50px] transform relative z-[6]         bg-gradient-to-br from-yellow-400 to-yellow-800 border border-black border-dashed outline-dashed">
              <div className="marquee2 inline-flex items-center gap-x-6 overflow-hidden        whitespace-nowrap text-5xl font-bold leading-relaxed text-gray-50">New stuff is coming out! - 🏗 - Patience is a virtue - Great work takes longer - Are you having fun?</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title : "Home | Ed's Corner (personal website)",
  description : "My personal website to share anything useful about myself",
  other: {
    "google-site-verification": `${process.env.BASE_URL === "https://edondigital.vercel.app" ? "ch8SW0k7KoJLvJs89lwiCddadys_8LzbVlP7DzNxs7g" : "kmGLrA1y23ju7KDoNZNFr2obsQTJhBSakwDmO1C82DI"}`,
  }
}
