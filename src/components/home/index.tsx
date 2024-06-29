import Trending from "./trending";
import Recommended from "./recommended";
import { motion } from "framer-motion";
import { DataProps } from "../data";

function Home({ Data, bookmarked, handleBookmark }: DataProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:px-[2.3rem] md:px-[1.5rem] px-[1rem] pt-[3rem] pb-[4rem]"
    >
      <Trending
        Data={Data}
        bookmarked={bookmarked}
        handleBookmark={handleBookmark}
      />
      <Recommended
        Data={Data}
        bookmarked={bookmarked}
        handleBookmark={handleBookmark}
      />
    </motion.div>
  );
}

export default Home;
