import omdbApi from "../omdb/omdbApi.js";

export default async function getMovieDetails(movieId = "") {
  const movie = await omdbApi.getMovieById(movieId);

  return movie;
}
