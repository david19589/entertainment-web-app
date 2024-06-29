import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./components/routes";
import Search from "./components/search";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <BrowserRouter>
      <div className="lg:flex lg:flex-row lg:pl-[1rem] min-h-[100vh] bg-[#10141E]">
        <Header />
        <div>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <PageRoutes searchValue={searchValue} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
