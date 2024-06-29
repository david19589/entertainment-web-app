import { useEffect, useState } from "react";
import Home from "../components/home";
import { Route, Routes, useLocation } from "react-router-dom";
import Movies from "./movies";
import TvSeries from "./tv-series";
import Bookmarks from "./bookmarks";
import Data from "./data.json";
import { DataItem } from "./data";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function PageRoutes(props: { searchValue: string }) {
  const [bookmarked, setBookmarked] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarked");
    if (storedBookmarks) {
      setBookmarked(JSON.parse(storedBookmarks));
    } else {
      const initialBookmarks = Data.reduce((acc, item) => {
        if (item.isBookmarked) {
          acc[item.title] = true;
        }
        return acc;
      }, {} as { [key: string]: boolean });

      setBookmarked(initialBookmarks);
    }
  }, []);

  const handleBookmark = (title: string) => {
    setBookmarked((prev) => {
      const updatedBookmarks = { ...prev, [title]: !prev[title] };

      localStorage.setItem("bookmarked", JSON.stringify(updatedBookmarks));
      return updatedBookmarks;
    });

    const itemIndex = Data.findIndex((item) => item.title === title);
    if (itemIndex !== -1) {
      Data[itemIndex].isBookmarked = !Data[itemIndex].isBookmarked;
    }
  };

  const filteredData: DataItem[] = Data.filter((item) => {
    return item.title.toLowerCase().includes(props.searchValue.toLowerCase());
  });

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              bookmarked={bookmarked}
              handleBookmark={handleBookmark}
              Data={filteredData}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              bookmarked={bookmarked}
              handleBookmark={handleBookmark}
              Data={filteredData}
            />
          }
        />
        <Route
          path="/tv-series"
          element={
            <TvSeries
              bookmarked={bookmarked}
              handleBookmark={handleBookmark}
              Data={filteredData}
            />
          }
        />
        <Route
          path="/bookmarks"
          element={
            <Bookmarks
              bookmarked={bookmarked}
              handleBookmark={handleBookmark}
              Data={filteredData}
            />
          }
        />
      </Routes>
    </>
  );
}

export default PageRoutes;
