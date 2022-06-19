import omdbApi from "../omdb/omdbApi.js";
import formatMoviesToShortForm from "./formatMoviesToShortForm.js";
import moviesCache from "./moviesCache.js";
import popularMoviesCache from "./popularMoviesCache.js";

export default async function searchMovies(query = "", page = 1) {
  const searchResults = await omdbApi.searchMovies(query, page);
  if (searchResults.error) return searchResults;

  const searchResultsIds = [];
  for (const result of searchResults.Search) {
    searchResultsIds.push(result.imdbID);
  }

  const moviesShortForm = await getMoviesShortFormBySearchResults(
    searchResultsIds
  );

  return { results: moviesShortForm, totalResults: searchResults.totalResults };
}

async function getMoviesShortFormBySearchResults(searchResultsIds = []) {
  const { searchedMovies, searchedMoviesIdsNotInCache } =
    getSearchedMoviesFromCaches(searchResultsIds);

  if (searchedMoviesIdsNotInCache.length === 0) return searchedMovies;

  const movies = await omdbApi.getMoviesByIds(searchedMoviesIdsNotInCache);
  if (movies.error) return movies;

  const moviesShortForm = formatMoviesToShortForm(movies);

  for (const movieShortForm of moviesShortForm) {
    moviesCache.push(movieShortForm.id, movieShortForm);
  }

  searchedMovies.push(...moviesShortForm);
  return searchedMovies;
}

function getSearchedMoviesFromCaches(moviesIds = []) {
  const searchedMovies = [];
  const searchedMoviesIdsNotInCache = [];

  for (const movieId of moviesIds) {
    let movie = moviesCache.get(movieId);
    if (!movie) movie = popularMoviesCache.get(movieId);
    if (!movie) {
      searchedMoviesIdsNotInCache.push(movieId);
      continue;
    }
    searchedMovies.push(movie);
  }
  return { searchedMovies, searchedMoviesIdsNotInCache };
}
