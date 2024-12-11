import C_Cards from "@/features/cards/components/client/C_Cards";
import { Suspense } from "react";

const page = () => {
  const ideaConfigs = [
    {
      title : "Digital Garden",
      description : `Share your notes (completed or not) plublicly. Attract people alike, get feedback, and learn in public!`,
      imgClasses: "",
      imgs: [
        {
          title: "Network of nodes",
          imgSrc: "/assets/routes_specific/home/nodes_network.jpg",
        }
      ],
      websiteUrl: "https://www.youtube.com/watch?v=TDqsr3MNTTc",
      websiteLabel: "Watch video",
      score: 3.5,
      Tags: [
        {0: "Sharing"}
      ]
    }
  ]

  return (
    <div>
      <Suspense>
        {<C_Cards cardConfigurations={ideaConfigs} categoryTags="ideas"/>}
      </Suspense>
    </div>
  )
}

export default page