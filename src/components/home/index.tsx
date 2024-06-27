import Search from "../search";
import Data from "../data.json";
import Trending from "./trending";
import Recommended from "./recommended";

function Home() {
  return (
    <div className="px-[1rem] pt-[1.5rem] pb-[4rem]">
      <Search />
      <Trending Data={Data} />
      <Recommended Data={Data} />
    </div>
  );
}

export default Home;
