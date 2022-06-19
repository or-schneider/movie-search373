import axios from "axios";
import { useCallback, useState } from "react";

const apiBaseUrl = process.env.REACT_APP_MOVIES_API_BASE_URL;

function useSearchMovies() {
  const [searchResults, setSearchResults] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [activeQuery, setActiveQuery] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);
  const [searchInProgress, setSearchInProgress] = useState(false);

  const search = useCallback(async function search(query = "", page = 1) {
    setError(() => null);
    setSearchInProgress(() => true);
    try {
      const movies = await axios.get(
        `${apiBaseUrl}/movies/search/?q=${query}&page=${page}`
      );
      setSearchResults(movies.data.results);
      setTotalResults(movies.data.totalResults);
      setActivePage(page);
      setActiveQuery(query);

      return movies.data.results;
    } catch (error) {
      let errorMessage = error.message;
      if (error.response?.data?.message)
        errorMessage = error.response?.data?.message;

      setError(errorMessage);
    } finally {
      setSearchInProgress(() => false);
    }
  }, []);
  const searchNextPage = useCallback(
    async function searchNextPage() {
      if (activePage >= totalResults / 10) return;
      setSearchInProgress(() => true);

      search(activeQuery, activePage + 1);
    },
    [activeQuery, activePage, totalResults, search]
  );
  const searchPreviousPage = useCallback(
    async function searchPreviousPage() {
      if (activePage === 1) return;
      setSearchInProgress(() => true);

      search(activeQuery, activePage - 1);
    },
    [activeQuery, activePage, search]
  );
  return {
    searchResults,
    totalResults,
    activePage,
    totalPages: totalResults / 10,
    search,
    searchError: error,
    searchInProgress,
    searchNextPage,
    searchPreviousPage,
  };
}

export default useSearchMovies;
