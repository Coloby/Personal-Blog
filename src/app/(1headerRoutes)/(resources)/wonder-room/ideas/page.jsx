import DetailedCard from "@/features/cards/components/DetailedCard.jsx";
import React from "react";

const page = () => {

  return (
    <div>
      <DetailedCard 
        title="Digital Garden"
        // description={<p><div>Share your notes (completed or not) plublicly. Attract people alike, get feedback, and learn in public! </div><a href="https://www.youtube.com/watch?v=TDqsr3MNTTc">video</a></p>}
        description={<p><div>Share your notes (completed or not) plublicly. Attract people alike, get feedback, and learn in public! </div></p>}
        // tags={["lol"]}
        // websiteUrl=""
        imgClasses=""
        imgs={[
          {
            title: "Network of nodes",
            imgSrc: "/assets/routes_specific/home/nodes_network.jpg",
          }
        ]}
        websiteUrl={"https://www.youtube.com/watch?v=TDqsr3MNTTc"} 
        websiteLabel={"Watch video"}
        score={3.5}
        // tags={ObsidianData.tags}
      />
    </div>
  )
}

export default page