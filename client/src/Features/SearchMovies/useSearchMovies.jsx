import axios from "axios";
import { useCallback, useState } from "react";

const apiBaseUrl = process.env.REACT_APP_MOVIES_API_BASE_URL;

function useSearchMovies() {
  const [searchResults, setSearchResults] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalResults, setTotalResults] = useState([]);
  const [error, setError] = useState(null);

  const search = useCallback(async function search(query = "", page = 1) {
    try {
      const movies = await axios.get(
        `${apiBaseUrl}/movies/search/?q=${query}&${page}`
      );
      setSearchResults(movies.data.results);
      setTotalResults(movies.data.totalResults);
      setActivePage(page);

      setError(null);

      return movies.data.results;
    } catch (error) {
      let errorMessage = error.message;
      if (error.response?.data?.message)
        errorMessage = error.response?.data?.message;

      setError(errorMessage);
    }
  }, []);
  return {
    searchResults,
    totalResults,
    activePage,
    search,
    searchError: error,
  };
}

export default useSearchMovies;
