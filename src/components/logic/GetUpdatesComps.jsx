import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn-ui/accordion";

const GetUpdatesComps = (entriesNum) => {

  const updates = [
    // {
    //   date: "/Jan/2024",
    //   text: "I'm lucky you don't see the code right now because it's reaaally bad :D",
    //   author: "Ed"
    // },{
    //   date: "/Jan/2024",
    //   text: "I'm lucky you don't see the code right now because it's reaaally bad :D",
    //   author: "Ed"
    // },
    // {
    //   date: "",
    //   text: ``,
    //   author: "Ed"
    // },
    {
      date: "24/Apr/2024",
      text: `I've been sick for at least 3 days but now I'm fine!. No idea about how I'm going to recover the work lost (been slacking even before the sickness), or how I'll find the courage to tackle the GDPR problem BUT, I know it's going to be fun anyway :)`,
      author: "Ed"
    },
    {
      date: "18/Mar/2024",
      text: `More updates and pages are coming, but until then you can explore my second brain clicking on the "notes" tab from the header :) it's growing!!! one of the greatest additions are "Bu models" and "Tech Jobs (IT + Art)"`,
      author: "Ed"
    },
    {
      date: "24/Feb/2024",
      text: `Yes, I published the article. I have many more ideas in mind, but the development of the website is a priority. I made /now and /interests pages just recently :) + reading experience in the blog has been enhanced.`,
      author: "Ed"
    },
    {
      date: "07/Feb/2024",
      text: `I know that I still have not published a single article, but the developer side of me is dominant at the moment. If everything goes "as planned" tomorrow I should publish my first little article!`,
      author: "Ed"
    },
    {
      date: "29/Jan/2024",
      text: "It's funny how much time has passed from when I made the first entry and actually published this component. At least you can now see this!",
      author: "Ed"
    },{
      date: "28/Jan/2024",
      text: "I'm lucky you don't see the code right now because it's reaaally bad :D",
      author: "Ed"
    },{
      date: "23/Jan/2024",
      text: "Big changes coming",
      author: "Ed"
    },{
      date: "22/Jan/2024",
      text: "Honestly I have no idea about what to share here but at least I have it :P",
      author: "Ed"
    },{
      date: "idk",
      text: "wow",
      author: "Ed"
    },
  ]

  const udpateComps = updates.slice(0, entriesNum).map((update, index) => (
    <div className="flex-col justify-start items-start flex">
      <Accordion type="single" collapsible defaultValue={"item-"+index.toString()}>
        <AccordionItem value={"item-"+index.toString()}>
          <AccordionTrigger><h3 className="text-center !my-0"><span className=" text-xl">From </span><span className="text-primary text-xl font-semibold">{update.author} </span><span className="text-xl font-semibold">- {update.date} </span></h3></AccordionTrigger>
          <AccordionContent><div className="text-lg">{update.text}</div></AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ));

  return { udpateComps }
}

export default GetUpdatesComps