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

function Recommended({ Data }: data) {
  const [bookmarked, setBookmarked] = useState<{ [key: string]: boolean }>({});

  const handleBookmark = (title: string) => {
    setBookmarked((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="relative">
      <div className="pt-[1.5rem]">
        <h1 className="text-[1.3rem] font-[400] leading-[1.6rem] tracking-[-0.02rem] text-[#FFF] mb-[1rem]">
          Recommended for you
        </h1>
        <ul className="flex flex-wrap justify-center max-w-[74rem] w-full">
          {Data.map((item, index) => (
            <li key={index} className="max-w-[10rem]">
              {!item.isTrending && (
                <div className="relative max-w-[15rem] mr-[1rem] mb-[1rem]">
                  <img
                    className="w-full max-w-[15rem] h-auto rounded-lg mr-[1rem]"
                    src={ImageSrc[item.thumbnail.regular?.small ?? ""]}
                    alt={item.title}
                  />
                  <div
                    onClick={() => handleBookmark(item.title)}
                    className="absolute top-[1rem] right-[1rem] bg-[#10141e83] p-[0.6rem] rounded-full cursor-pointer"
                  >
                    <img
                      src={
                        bookmarked[item.title] ? bookmarkFullSvg : bookmarkSvg
                      }
                      alt="bookmark"
                    />
                  </div>
                  <div className="flex items-center gap-[0.5rem] ">
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
                  <h1 className="text-[1rem] font-[400] leading-[1.18rem] text-[#FFF]">
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

export default Recommended;
