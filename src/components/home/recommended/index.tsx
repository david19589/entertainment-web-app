import { ImageSrc } from "../data";
import movieSvg from "/src/assets/icon-category-movie.svg";
import tvSvg from "/src/assets/icon-category-tv.svg";
import bookmarkSvg from "/src/assets/icon-bookmark-empty.svg";
import bookmarkFullSvg from "/src/assets/icon-bookmark-full.svg";
import playSvg from "/src/assets/icon-play.svg";
import { DataProps } from "../../data";

function Recommended({ Data, bookmarked, handleBookmark }: DataProps) {
  return (
    <div className="relative">
      <div className="pt-[1.5rem]">
        <h1 className="md:text-[2rem] md:leading-[2.5rem] md:tracking-[-0.03rem] md:mb-[2rem] text-[1.3rem] font-[400] leading-[1.6rem] tracking-[-0.02rem] text-[#FFF] mb-[1rem]">
          Recommended for you
        </h1>
        <ul className="lg:gap-[2rem] md:gap-[1.5rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem]">
          {Data.filter((item) => !item.isTrending).map((item, index) => (
            <li key={index} className="w-full">
              <div className="relative w-full">
                <div className="relative group">
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
                  <div className="group-hover:flex hidden justify-center items-center absolute bottom-0 top-0 w-full rounded-lg hover:bg-[#00000080] cursor-pointer transition-all duration-300">
                    <div className="flex items-center gap-[1.2rem] pl-[0.4rem] pr-[1.3rem] py-[0.3rem] bg-[#ffffff5d] rounded-full">
                      <img src={playSvg} alt="playSvg" />
                      <h2 className="text-[1.2rem] leading-[1.4rem] font-[400] text-[#FFF]">
                        Play
                      </h2>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => handleBookmark(item.title)}
                  className="hover:bg-[#b4b3b3] absolute top-[1rem] right-[1rem] bg-[#10141e83] p-[0.6rem] rounded-full cursor-pointer"
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
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Recommended;
