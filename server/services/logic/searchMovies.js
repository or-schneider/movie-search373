import omdbApi from "../omdb/omdbApi.js";
import formatMoviesToShortForm from "./formatMoviesToShortForm.js";

export default async function searchMovies(query = "", page = 1) {
  const searchResults = await omdbApi.searchMovies(query, page);
  if (searchResults.error) return searchResults;

  const searchResultsIds = [];
  for (const result of searchResults.Search) {
    searchResultsIds.push(result.imdbID);
  }
  const movies = await omdbApi.getMoviesByIds(searchResultsIds);
  if (movies.error) return movies;

  const moviesShortForm = formatMoviesToShortForm(movies);

  return { results: moviesShortForm, totalResults: searchResults.totalResults };
}
