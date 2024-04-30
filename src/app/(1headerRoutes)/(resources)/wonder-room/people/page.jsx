import DetailedCard from "@/components/ui/DetailedCard";

const page = () => {

  return (
    <div>
      <DetailedCard 
      title="Digital Garden"
      description={<p><div>Share your notes (completed or not) plublicly. Attract people alike, get feedback, and learn in public! </div><a href="https://www.youtube.com/watch?v=TDqsr3MNTTc">video</a></p>}
      // tags={["lol"]}
      // websiteUrl=""
      imgClasses=""
      imgs={[
        {
          title: "Network of nodes",
          imgSrc: "/assets/routes_specific/home/nodes_network.jpg",
        }
      ]}
    />
    </div>
  )
}

export default page