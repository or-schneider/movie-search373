import axios from "axios";
import { useEffect, useState } from "react";

const apiBaseUrl = process.env.REACT_APP_MOVIES_API_BASE_URL;
function usePopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const movies = await axios.get(`${apiBaseUrl}/movies/popular`);
        setPopularMovies(movies.data);

        setError(null);
      } catch (error) {
        setError(error.response.data.message);
      }
    })();
  }, []);
  return { popularMovies, popularMoviesError: error };
}

export default usePopularMovies;
