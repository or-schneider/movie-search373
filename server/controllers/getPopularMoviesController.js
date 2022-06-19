import getPopularMovies from "../services/logic/getPopularMovies.js";

export default async function getPopularMoviesController(req, res) {
  const movies = await getPopularMovies();

  if (movies.error) {
    if (movies.error?.response?.data?.Error === "Request limit reached!")
      return res
        .status(429)
        .send({ message: movies.error.response.data.Error });
    return res.status(500).send({ message: movies.error.message });
  }

  return res.send(movies);
}
