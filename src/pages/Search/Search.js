import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMedia } from "../../services/api";
import MovieCard from "../../components/MovieCard/MovieCard";
const Search = () => {
  const { keyword } = useParams();
  const [media, setMedia] = useState([]);

  useEffect(() => {
    searchMedia(keyword)
      .then((response) => setMedia(response.data.results))
      .catch((error) => console.error(error));
  }, [keyword]);

  return (
    <div className="list-wrapper">
      {media.length > 0 &&
        media.map((item) => <MovieCard key={item.id} media={item} />)}
    </div>
  );
};

export default Search;
