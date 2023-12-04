import "./App.css";

import { InfiniteSlider } from "./components/InfiniteCarousal";
import { AudioWaveAniamtion } from "./components/Wave";

function App() {
  // const [activeId, setActiveId] = useState<number>(0);
  // const [activePanel, setActivePanel] = useState<boolean>(false);

  // const handleExpand = (id: number) => {
  //   console.log("called");
  //   setActiveId(id);
  //   setActivePanel(!activePanel);
  // };

  return (
    <>
      <AudioWaveAniamtion />
    </>
  );
}

export default App;
