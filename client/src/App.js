import style from "./App.module.css";

import ErrorMessage from "./Features/ErrorMessage/ErrorMessage.jsx";
import MoviesList from "./Features/MoviesList/MoviesList.jsx";
import usePopularMovies from "./Features/PopularMovies/usePopularMovies.jsx";
import SearchBar from "./Features/SearchMovies/SearchBar/SearchBar.jsx";
import useSearchMovies from "./Features/SearchMovies/useSearchMovies.jsx";

function App() {
  const { search, searchResults, searchError } = useSearchMovies();
  const { popularMovies, popularMoviesError, clearPopularMoviesError } =
    usePopularMovies();

  async function handleSearchBarSubmit(query) {
    clearPopularMoviesError();
    search(query);
  }

  function renderMoviesList() {
    let moviesData = [];
    if (searchResults.length > 0) moviesData = searchResults;
    else if (popularMovies.length > 0) moviesData = popularMovies;
    return (
      <MoviesList
        moviesData={moviesData}
        className={style.moviesList}
      ></MoviesList>
    );
  }
  function renderErrorMessage() {
    let errorMessage = "";
    if (searchError) errorMessage = searchError;
    else if (popularMoviesError) errorMessage = popularMoviesError;
    return (
      <ErrorMessage
        message={errorMessage}
        className={style.searchError}
      ></ErrorMessage>
    );
  }
  return (
    <div className={style.root}>
      <SearchBar onSearchSumbit={handleSearchBarSubmit}></SearchBar>

      {renderErrorMessage()}
      {renderMoviesList()}
    </div>
  );
}

export default App;
