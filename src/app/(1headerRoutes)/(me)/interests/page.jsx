import C_interests from "@/components/clientComps/C_Interests"
import { getMdxComp } from "@/lib/mdx/getMdxComp"

const page = async ({ params }) => {
  const interests = await getInterests()
  
  return (
    <C_interests >
      {interests}
    </C_interests>
  )
}

async function getInterests() { 
  const interests = {
    Programming: (await getMdxComp("header_routes/(me)/interests", "programming.mdx"))(),
    ContentCreation: (await getMdxComp("header_routes/(me)/interests", "content_creation.mdx"))(),
    SelfImprovement: (await getMdxComp("header_routes/(me)/interests", "self_improvement.mdx"))(),
    Design: (await getMdxComp("header_routes/(me)/interests", "design.mdx"))(),
    Business: (await getMdxComp("header_routes/(me)/interests", "business.mdx"))(),
    ComputerScience: (await getMdxComp("header_routes/(me)/interests", "computer_science.mdx"))(),
  };

  return interests;
}

export const metadata = {
  title : "Interests",
  description : "More info about my interests and sub-interests (with links to my notes!)",
  openGraph: {
    images: [
      {
        url: "/assets/routes_specific/interests/statue.png",
        width: 800,
        height: 600,
        alt: ``,
      },
    ],
  },
  twitter: {
    images: {
      url: "/assets/routes_specific/interests/statue.png",
      alt: ``,
    },
  }
}

export default page