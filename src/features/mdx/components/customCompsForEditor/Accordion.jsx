
const Accordion = async ({ 
  children = "insert content",
  title = "insert title", 
}) => {
  return (
    <div className="flex-col justify-start items-start flex">
      {children}
    </div>
  )
}

export default Accordion