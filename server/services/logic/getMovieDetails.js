import omdbApi from "../omdb/omdbApi.js";
import movieDetailsCache from "./caches/movieDetailsCache.js";

export default async function getMovieDetails(movieId = "") {
  const movieFromCache = movieDetailsCache.get(movieId);
  if (movieFromCache) {
    return movieFromCache;
  }

  const movie = await omdbApi.getMovieById(movieId);
  if (movie.error) return movie;
  const formattedMovie = {
    img: movie.Poster,
    title: movie.Title,
    year: movie.Year,
    director: movie.Director,
    writer: movie.Writer,
    actors: movie.Actors,
    genre: movie.Genre,
    plot: movie.Plot,
    imdbRating: movie.imdbRating,
    runtime: movie.Runtime,
  };

  movieDetailsCache.push(movieId, formattedMovie);

  return formattedMovie;
}
