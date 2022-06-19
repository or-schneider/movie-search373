import omdbApi from "../omdb/omdbApi.js";
import formatMoviesToShortForm from "./formatMoviesToShortForm.js";
import popularMoviesCache from "./popularMoviesCache.js";

const popularMoviesIds = [
  "tt0068646",
  "tt0468569",
  "tt0109830",
  "tt1375666",
  "tt0133093",
  "tt0102926",
  "tt0120815",
  "tt0110413",
  "tt0110357",
  "tt0119217",
];

export default async function getPopularMovies() {
  const popularMovies = [];

  const popularMovieIdsToGetWithApi = [];
  for (const movieId of popularMoviesIds) {
    const movie = popularMoviesCache.get(movieId);
    if (!movie) {
      popularMovieIdsToGetWithApi.push(movieId);
      continue;
    }
    popularMovies.push(movie);
  }

  if (popularMovieIdsToGetWithApi.length === 0) return popularMovies;

  const getMoviesResponse = await omdbApi.getMoviesByIds(
    popularMovieIdsToGetWithApi
  );

  if (getMoviesResponse.error) return getMoviesResponse;

  const moviesFromApiShortForm = formatMoviesToShortForm(getMoviesResponse);

  for (const movieFromApiShortForm of moviesFromApiShortForm) {
    popularMoviesCache.push(movieFromApiShortForm.id, movieFromApiShortForm);
  }

  popularMovies.push(...moviesFromApiShortForm);
  return popularMovies;
}
