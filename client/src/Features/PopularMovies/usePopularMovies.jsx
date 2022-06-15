import axios from "axios";
import { useEffect, useState } from "react";

function usePopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const movies = await axios.get(
          "http://localhost:8000/api/movies/popular"
        );
        setPopularMovies(movies.data);
      } catch (error) {
        console.log(error); //TODO
        setError(error.message);
      }
    })();
  }, []);
  return { popularMovies, popularMoviesError: error };
}

export default usePopularMovies;
