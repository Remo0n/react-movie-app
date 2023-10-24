import React, { useEffect, useState } from "react";
import { fetchTrendingMedia } from "../../services/api";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetchTrendingMedia()
      .then((response) => {
        setMedia(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {media.length > 0 &&
        media.map((item) => <MovieCard key={item.id} media={item} />)}
    </>
  );
};

export default MovieList;
