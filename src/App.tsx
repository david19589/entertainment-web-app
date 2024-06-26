import { useState } from "react";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  const [selected, setSelected] = useState("home");

  return (
    <div className="bg-[#10141E]">
      <Header selected={selected} setSelected={setSelected} />
      <Home />
    </div>
  );
}

export default App;
