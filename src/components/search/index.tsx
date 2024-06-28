import SearchSvg from "/src/assets/icon-search.svg";

function Search() {
  return (
    <div className="flex gap-[1.3rem] lg:px-[2.3rem] md:px-[1.5rem] px-[1rem] pt-[1.5rem]">
      <img src={SearchSvg} alt="SearchSvg" />
      <input
        className="bg-transparent outline-none text-[1rem] font-[400] leading-[1.3rem] w-full text-[#FFF]"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

export default Search;
