import { ImageSrc } from "../home/data";
import Data from "../data.json";
import movieSvg from "/src/assets/icon-category-movie.svg";
import tvSvg from "/src/assets/icon-category-tv.svg";
import bookmarkSvg from "/src/assets/icon-bookmark-empty.svg";
import bookmarkFullSvg from "/src/assets/icon-bookmark-full.svg";
import { useState } from "react";

function Movies() {
  const [bookmarked, setBookmarked] = useState<{ [key: string]: boolean }>({});

  const handleBookmark = (title: string) => {
    setBookmarked((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="relative lg:px-[2.3rem] md:px-[1.5rem] px-[1rem] pt-[1.5rem] pb-[4rem]">
      <h1 className="md:text-[2rem] md:leading-[2.5rem] md:tracking-[-0.03rem] md:mb-[2rem] text-[1.3rem] font-[400] leading-[1.6rem] tracking-[-0.02rem] text-[#FFF] mb-[1rem]">
        Movies
      </h1>
      <ul className="lg:gap-[2rem] md:gap-[1.5rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem]">
        {Data.filter((item) => (item.category === "Movie")).map(
          (item, index) => (
            <li key={index} className="w-full">
              <div className="relative w-full">
                <img
                  className="md:hidden w-full h-auto rounded-lg"
                  src={ImageSrc[item.thumbnail.regular?.small ?? ""]}
                  alt={item.title}
                />
                <img
                  className="lg:hidden md:flex hidden w-full h-auto rounded-lg"
                  src={ImageSrc[item.thumbnail.regular?.medium ?? ""]}
                  alt={item.title}
                />
                <img
                  className="lg:flex hidden w-full h-auto rounded-lg"
                  src={ImageSrc[item.thumbnail.regular?.large ?? ""]}
                  alt={item.title}
                />
                <div
                  onClick={() => handleBookmark(item.title)}
                  className="absolute top-[1rem] right-[1rem] bg-[#10141e83] p-[0.6rem] rounded-full cursor-pointer"
                >
                  <img
                    src={bookmarked[item.title] ? bookmarkFullSvg : bookmarkSvg}
                    alt="bookmark"
                  />
                </div>
                <div className="flex items-center sm:gap-[0.5rem] gap-[0.1rem] mt-[0.5rem]">
                  <h3 className="text-[0.8rem] font-[400] leading-[1rem] opacity-[75%] text-[#FFF]">
                    {item.year}
                  </h3>
                  <span className="text-[#FFF] opacity-[50%] mb-[0.4rem]">
                    .
                  </span>
                  <img
                    className="h-max"
                    src={item.category === "Movie" ? movieSvg : tvSvg}
                    alt={item.category === "Movie" ? "Movie" : "TV Series"}
                  />
                  <h2 className="text-[0.8rem] font-[400] leading-[1rem] opacity-[75%] text-[#FFF]">
                    {item.category}
                  </h2>
                  <span className="text-[#FFF] opacity-[50%] mb-[0.4rem]">
                    .
                  </span>
                  <h2 className="text-[0.8rem] font-[400] leading-[1rem] opacity-[75%] text-[#FFF]">
                    {item.rating}
                  </h2>
                </div>
                <h1 className="md:text-[1.5rem] md:leading-[2rem] text-[1rem] font-[400] leading-[1.18rem] text-[#FFF]">
                  {item.title}
                </h1>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Movies;
