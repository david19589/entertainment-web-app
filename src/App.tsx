import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./components/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#10141E]">
        <Header />
        <PageRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
