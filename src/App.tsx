import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./components/routes";
import Search from "./components/search";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [showAvatar, setShowAvatar] = useState(false);
  return (
    <BrowserRouter>
      <div className="lg:flex lg:flex-row lg:pl-[1rem] min-h-[100vh] bg-[#10141E]">
        <Header showAvatar={showAvatar} setShowAvatar={setShowAvatar} />
        <div>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <PageRoutes searchValue={searchValue} setShowAvatar={setShowAvatar}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
