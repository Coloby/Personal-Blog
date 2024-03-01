import Image from "next/image"

const page = () => {
  return (
    <div className="flexy flex-col gap-8 items-start">
      <div className="flex items-center justify-center gap-4 flex-col">
        <Image
          src="/assets/backgrounds/vapo_hero.jpg"
          width={1920}
          height={1080}
          className=" object-cover not-prose max-h-[400px] max-w-[400px] transition-none z-0 w-screen"
          alt=""
          priority={false}
        />
        <a className="z-10 underline" href="https://www.freepik.com/free-vector/retro-gradient-background-linear-style_16738493.htm#position=16">Image by starline - on Freepik</a>
      </div>
      <div className="flex items-center justify-center gap-4 flex-col">
        <Image
          src="/assets/routes_specific/home/nodes_network.jpg"
          width={1920}
          height={1080}
          className=" object-cover not-prose max-h-[400px] max-w-[400px] transition-none z-0 w-screen"
          alt=""
          priority={false}
        />
        <p className="z-10">Image by <a className="underline" href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3592136">Gerd Altmann</a> from <a className="underline" href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3592136">Pixabay</a></p>
      </div>

    </div>
  )
}

export const metadata = {
  title : "Credits",
  description : "Here are people that contributed to this website",
}

export default page