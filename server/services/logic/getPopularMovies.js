import omdbApi from "../omdb/omdbApi.js";
import formatMoviesToShortForm from "./formatMoviesToShortForm.js";

export default async function getPopularMovies() {
  const movies = await omdbApi.getMoviesByIds([
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
  ]);

  if (movies.error) return movies;
  const moviesShortForm = formatMoviesToShortForm(movies);

  return moviesShortForm;
}
