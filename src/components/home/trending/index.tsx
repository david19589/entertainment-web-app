import { ImageSrc } from "../data";
import movieSvg from "/src/assets/icon-category-movie.svg";
import bookmarkSvg from "/src/assets/icon-bookmark-empty.svg";
import bookmarkFullSvg from "/src/assets/icon-bookmark-full.svg";
import { useState } from "react";

interface data {
  Data: {
    year: number;
    title: string;
    thumbnail: {
      regular?: { small?: string; medium?: string; large?: string };
      trending?: {
        small?: string;
        medium?: string;
        large?: string;
      };
    };
    isTrending: boolean;
  }[];
}

function Trending({ Data }: data) {
  const [bookmarked, setBookmarked] = useState<{ [key: string]: boolean }>({});

  const handleBookmark = (title: string) => {
    setBookmarked((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="relative">
      <div className="pt-[1.5rem] overflow-hidden">
        <h1 className="text-[1.3rem] font-[400] leading-[1.6rem] tracking-[-0.02rem] text-[#FFF] mb-[1rem]">
          Trending
        </h1>
        <ul className="flex flex-row transition-all duration-500 overflow-x-auto custom-scrollbar">
          {Data.map((item, index) => (
            <li key={index} className="flex-none">
              {item.isTrending && (
                <div className="relative">
                  <img
                    className="md:w-[30rem] md:mr-[2rem] w-[15rem] h-auto rounded-lg mr-[1rem]"
                    src={ImageSrc[item.thumbnail.trending?.small ?? ""]}
                    alt={item.title}
                  />
                  <div className="absolute bottom-0 w-full h-[4.5rem] rounded-b-lg bg-gradient-to-b from-[#00000000] to-[#000000d3]"></div>
                  <div
                    onClick={() => handleBookmark(item.title)}
                    className="md:right-[4rem] absolute top-[1rem] right-[2rem] bg-[#10141e83] p-[0.6rem] rounded-full cursor-pointer"
                  >
                    <img
                      src={
                        bookmarked[item.title] ? bookmarkFullSvg : bookmarkSvg
                      }
                      alt="bookmark"
                    />
                  </div>
                  <div className="flex items-center gap-[0.5rem] absolute bottom-[2.5rem] ml-[1rem]">
                    <h3 className="text-[0.8rem] font-[400] leading-[1rem] opacity-[75%] text-[#FFF]">
                      {item.year}
                    </h3>
                    <span className="text-[#FFF] opacity-[50%] mb-[0.4rem]">
                      .
                    </span>
                    <img className="h-max" src={movieSvg} alt="tvSvg" />
                    <h2 className="text-[0.8rem] font-[400] leading-[1rem] opacity-[75%] text-[#FFF]">
                      Movie
                    </h2>
                    <span className="text-[#FFF] opacity-[50%] mb-[0.4rem]">
                      .
                    </span>
                    <h2 className="text-[0.8rem] font-[400] leading-[1rem] opacity-[75%] text-[#FFF]">
                      PG
                    </h2>
                  </div>
                  <h1 className="text-[1rem] font-[400] leading-[1.18rem] text-[#FFF] absolute bottom-[1rem] ml-[1rem]">
                    {item.title}
                  </h1>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Trending;
