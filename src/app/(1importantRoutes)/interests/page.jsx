import { getMdxComp } from "@/lib/mdx/getMdxComp"
import C_interests from "@/components/clientComps/C_Interests"


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
    Programming: (await getMdxComp("important_routes/interests", "programming.mdx"))(),
    ContentCreation: (await getMdxComp("important_routes/interests", "content_creation.mdx"))(),
    SelfImprovement: (await getMdxComp("important_routes/interests", "self_improvement.mdx"))(),
    Design: (await getMdxComp("important_routes/interests", "design.mdx"))(),
    Business: (await getMdxComp("important_routes/interests", "business.mdx"))(),
    ComputerScience: (await getMdxComp("important_routes/interests", "computer_science.mdx"))(),
  };

  return interests;
}

export default page