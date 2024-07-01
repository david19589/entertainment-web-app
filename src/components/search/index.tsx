import SearchSvg from "/src/assets/icon-search.svg";

function Search(props: {
  searchValue: string;
  setSearchValue: (state: string) => void;
}) {
  return (
    <div className="lg:pt-[4rem] flex gap-[1.3rem] lg:px-[2.3rem] md:px-[1.5rem] md:pt-[7rem] px-[1rem] pt-[6rem]">
      <img src={SearchSvg} alt="SearchSvg" />
      <input
        className="md:text-[1.5rem] lg:leading-[1.9rem] bg-transparent outline-none text-[1rem] font-[400] leading-[1.3rem] w-full text-[#FFF]"
        type="text"
        placeholder="Search for movies or TV series"
        value={props.searchValue}
        onChange={(e) => {
          props.setSearchValue(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
