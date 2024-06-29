import { ImageSrc } from "../data";
import movieSvg from "/src/assets/icon-category-movie.svg";
import tvSvg from "/src/assets/icon-category-tv.svg";
import bookmarkSvg from "/src/assets/icon-bookmark-empty.svg";
import bookmarkFullSvg from "/src/assets/icon-bookmark-full.svg";
import playSvg from "/src/assets/icon-play.svg";
import { DataProps } from "../../data";

function Trending({ Data, bookmarked, handleBookmark }: DataProps) {
  return (
    <div className="relative overflow-hidden">
      <h1 className="md:text-[2rem] md:leading-[2.5rem] md:tracking-[-0.03rem] md:mb-[1.5rem] text-[1.3rem] font-[400] leading-[1.6rem] tracking-[-0.02rem] text-[#FFF] mb-[1rem]">
        Trending
      </h1>
      <ul className="md:gap-[2rem] flex flex-row transition-all duration-500 gap-[1rem] overflow-x-auto custom-scrollbar">
        {Data.filter((item) => item.isTrending).map((item, index) => (
          <li key={index} className="flex-none">
            <div className="relative">
              <div className="relative group">
                <img
                  className="lg:hidden md:w-[30rem] w-[15rem] h-auto rounded-lg"
                  src={ImageSrc[item.thumbnail.trending?.small ?? ""]}
                  alt={item.title}
                />
                <img
                  className="lg:flex w-[30rem] hidden h-auto rounded-lg"
                  src={ImageSrc[item.thumbnail.trending?.large ?? ""]}
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
                className="hover:bg-[#b4b3b3] md:right-[4rem] absolute top-[1rem] right-[2rem] bg-[#10141e83] p-[0.6rem] rounded-full cursor-pointer"
              >
                <img
                  src={bookmarked[item.title] ? bookmarkFullSvg : bookmarkSvg}
                  alt="bookmark"
                />
              </div>
              <div className="md:bottom-[2.8rem] flex items-center gap-[0.5rem] absolute bottom-[2.5rem] ml-[1rem]">
                <h3 className="text-[0.8rem] font-[400] leading-[1rem] opacity-[75%] text-[#FFF]">
                  {item.year}
                </h3>
                <span className="text-[#FFF] opacity-[50%] mb-[0.4rem]">.</span>
                <img
                  className="h-max"
                  src={item.category === "Movie" ? movieSvg : tvSvg}
                  alt={item.category === "Movie" ? "Movie" : "TV Series"}
                />
                <h2 className="text-[0.8rem] font-[400] leading-[1rem] opacity-[75%] text-[#FFF]">
                  {item.category}
                </h2>
                <span className="text-[#FFF] opacity-[50%] mb-[0.4rem]">.</span>
                <h2 className="text-[0.8rem] font-[400] leading-[1rem] opacity-[75%] text-[#FFF]">
                  {item.rating}
                </h2>
              </div>
              <h1 className="md:text-[1.5rem] md:leading-[2rem] text-[1rem] font-[400] leading-[1.18rem] text-[#FFF] absolute bottom-[1rem] ml-[1rem]">
                {item.title}
              </h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trending;
