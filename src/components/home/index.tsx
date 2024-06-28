import Data from "../data.json";
import Trending from "./trending";
import Recommended from "./recommended";

function Home() {
  return (
    <div className="lg:px-[2.3rem] md:px-[1.5rem] px-[1rem] pt-[1.5rem] pb-[4rem]">
      <Trending Data={Data} />
      <Recommended Data={Data} />
    </div>
  );
}

export default Home;
