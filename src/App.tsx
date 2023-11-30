import { useState } from "react";

import "./App.css";
import { Accordian, AccordianDetails } from "./components/Accordian/accordian";
import { data } from "./constants/accodianData";

function App() {
  const [activeId, setActiveId] = useState<number>(0);
  const [activePanel, setActivePanel] = useState<boolean>(false);

  const handleExpand = (id: number) => {
    console.log("called");
    setActiveId(id);
    setActivePanel(!activePanel);
  };

  return (
    <>
      <div>
        <h1>Basic Accordion</h1>
      </div>
      {data.map((item) => (
        <Accordian
          key={item.id}
          handleExpand={() => handleExpand(item.id)}
          heading={item.question}
          isExpand={activeId === item.id}
        >
          <AccordianDetails isExpand={activeId === item.id} desc={item.desc} />
        </Accordian>
      ))}
    </>
  );
}

export default App;
