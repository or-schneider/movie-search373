import getPopularMovies from "../services/logic/getPopularMovies.js";

export default async function getPopularMoviesController(req, res) {
  const movies = await getPopularMovies();
  if (movies.error) {
    if ((movies.error.code = "ERR_BAD_RESPONSE"))
      return res.status(400).send({ message: movies.error.message });
    return res.status(500).send(movies.error.message);
  }
  return res.send(movies);
}
