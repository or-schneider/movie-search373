import omdbApi from "../omdb/omdbApi.js";

export default async function getPopularMovies() {
  const movies = await omdbApi.getMoviesByIds([
    "t0068646",
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

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    if (movie.error) {
      continue;
    }
    const filteredMovie = {
      img: movie.Poster,
      title: movie.Title,
      description: movie.Genre,
      imdbRating: movie.imdbRating,
    };
    movies[i] = filteredMovie;
  }
  return movies;
}
