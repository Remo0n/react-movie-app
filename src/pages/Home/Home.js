import React from "react";
import MovieList from "../../components/MovieList/MovieList";
import Search from "../../components/Search/Search";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="search">
        <Search />
      </div>

      <div className="list-wrapper">
        <MovieList />
      </div>
    </>
  );
};

export default Home;
