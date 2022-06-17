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
    if (!searchError) return <div>&nbsp;</div>;
    return <div>{searchError}</div>;
  }
  return (
    <div>
      <SearchBar onSearchSumbit={handleSearchBarSubmit}></SearchBar>
      {renderSearchError()}
      {renderPopularMovies()}
      {renderMoviesSearchResults()}
    </div>
  );
}

export default App;
