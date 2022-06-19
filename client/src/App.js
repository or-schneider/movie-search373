import { useEffect, useMemo, useState } from "react";
import style from "./App.module.css";

import ErrorMessage from "./Features/ErrorMessage/ErrorMessage.jsx";
import MovieDetailsModal from "./Features/MovieDetails/Modal/MovieDetailsModal.js";
import MoviesList from "./Features/MoviesList/MoviesList.jsx";
import usePopularMovies from "./Features/PopularMovies/usePopularMovies.jsx";
import SearchBar from "./Features/SearchMovies/SearchBar/SearchBar.jsx";
import SearchPageNavigation from "./Features/SearchMovies/SearchPageNavigation/SearchPageNavigation.jsx";
import useSearchMovies from "./Features/SearchMovies/useSearchMovies.jsx";
import Spinner from "./Features/Spinner/Spinner.jsx";

function App() {
  const params = useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params;
  }, []);

  const {
    search,
    searchResults,
    searchError,
    searchInProgress,
    activePage,
    totalPages,
    searchPreviousPage,
    searchNextPage,
  } = useSearchMovies();
  const {
    popularMovies,
    popularMoviesError,
    clearPopularMoviesError,
    fetchingPopularMoviesInProgress,
  } = usePopularMovies();
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  async function handleSearchBarSubmit(query) {
    clearPopularMoviesError();
    search(query);
  }
  useEffect(() => {
    if (!params.query) return;
    const pageNumber = parseInt(params.page);
    if (!pageNumber) {
      search(params.query);
      return;
    }
    search(params.query, pageNumber);
  }, [params, search]);

  function renderMoviesList() {
    let moviesData = [];
    if (searchResults.length > 0 || params.query) moviesData = searchResults;
    else if (popularMovies.length > 0) moviesData = popularMovies;
    return (
      <MoviesList
        moviesData={moviesData}
        className={style.moviesList}
        onMovieClick={SelectMovie}
      ></MoviesList>
    );
  }
  function SelectMovie(id) {
    setSelectedMovieId(id);
  }
  function ClearSelectedMovie() {
    setSelectedMovieId(null);
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
  function renderSearchPageNavigation() {
    if (searchResults.length === 0) return null;
    return (
      <SearchPageNavigation
        page={activePage}
        totalPages={totalPages}
        onPreviousClick={searchPreviousPage}
        onNextClick={searchNextPage}
        searchInProgress={searchInProgress}
      ></SearchPageNavigation>
    );
  }
  return (
    <div className={style.root}>
      <SearchBar
        onSearchSumbit={handleSearchBarSubmit}
        initialQuery={params.query}
      ></SearchBar>
      <MovieDetailsModal
        show={!!selectedMovieId}
        onBackgroundClick={ClearSelectedMovie}
        onCloseClick={ClearSelectedMovie}
        movieId={selectedMovieId}
      ></MovieDetailsModal>
      <div className={style.moviesListContainer}>
        <Spinner
          className={style.searchSpinner}
          show={searchInProgress || fetchingPopularMoviesInProgress}
        ></Spinner>
        {renderErrorMessage()}
        {renderMoviesList()}
      </div>

      {renderSearchPageNavigation()}
    </div>
  );
}

export default App;
