
const getInterestsComps = async () => {
  const interests = {
    programming: await getMdxComp("important_routes/interests", "programming.mdx"),
    contentCreation: await getMdxComp("important_routes/interests", "content_creation.mdx"),
    selfImprovement: await getMdxComp("important_routes/interests", "self_improvement.mdx"),
    design: await getMdxComp("important_routes/interests", "design.mdx"),
    business: await getMdxComp("important_routes/interests", "business.mdx"),
    computerScience: await getMdxComp("important_routes/interests", "computer_science.mdx"),
  };
  const i = "a"

  return {
    props: {
      interests,
      i
    },
  };
}

export default getInterestsComps