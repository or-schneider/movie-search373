import axios from "axios";
import { useCallback } from "react";
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
        let errorMessage = error.message;
        if (error.response?.data?.message)
          errorMessage = error.response?.data?.message;
        setError(errorMessage);
      }
    })();
  }, []);
  const clearError = useCallback(function () {
    setError(null);
  }, []);
  return {
    popularMovies,
    popularMoviesError: error,
    clearPopularMoviesError: clearError,
  };
}

export default usePopularMovies;
