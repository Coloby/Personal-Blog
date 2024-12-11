"use client"

import Btn from "@/components/primitives/logic/Btn";
import { useState } from "react";

const C_ModeComp = () => {
  const [mode, setMode] = useState("graph")
  
  return (
    <div>
      <Btn onClick={() => setMode(mode === "graph" ? "text" : "graph")} >Switch view</Btn>
    </div>
  )
}

export default C_ModeComp