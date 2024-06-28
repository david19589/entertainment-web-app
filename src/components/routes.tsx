import { useEffect } from "react";
import Home from "../components/home";
import { Route, Routes, useLocation } from "react-router-dom";
import Movies from "./movies";
import Search from "./search";
import TvSeries from "./tv-series";
import Bookmarks from "./bookmarks";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function PageRoutes() {
  return (
    <>
      <ScrollToTop />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<TvSeries />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </>
  );
}

export default PageRoutes;
