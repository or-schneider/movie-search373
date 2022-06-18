import style from "./App.module.css";

import ErrorMessage from "./Features/ErrorMessage/ErrorMessage.jsx";
import MoviesList from "./Features/MoviesList/MoviesList.jsx";
import PopularMovies from "./Features/PopularMovies/PopularMovies.jsx";
import SearchBar from "./Features/SearchMovies/SearchBar/SearchBar.jsx";
import useSearchMovies from "./Features/SearchMovies/useSearchMovies.jsx";

function App() {
  const { search, searchResults, searchError } = useSearchMovies();
  async function handleSearchBarSubmit(query) {
    search(query);
  }
  function renderPopularMovies() {
    if (searchResults.length > 0) return null;
    return <PopularMovies></PopularMovies>;
  }
  function renderMoviesSearchResults() {
    if (searchResults.length === 0) return null;
    return <MoviesList moviesData={searchResults}></MoviesList>;
  }
  function renderSearchError() {
    return;
  }
  return (
    <div className={style.root}>
      <SearchBar onSearchSumbit={handleSearchBarSubmit}></SearchBar>
      <ErrorMessage message={searchError} className={style.searchError}>
        {searchError}
      </ErrorMessage>
      {renderPopularMovies()}
      {renderMoviesSearchResults()}
    </div>
  );
}

export default App;
