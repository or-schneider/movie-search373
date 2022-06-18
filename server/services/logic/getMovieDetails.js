import omdbApi from "../omdb/omdbApi.js";

export default async function getMovieDetails(movieId = "") {
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
  return formattedMovie;
}
