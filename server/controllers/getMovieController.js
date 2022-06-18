import getMovieDetails from "../services/logic/getMovieDetails.js";

export default async function getMovieController(req, res) {
  const { id } = req.params;
  if (!id) return res.status(400).send({ message: `Must provide an Id` });

  const movie = await getMovieDetails(id);

  if (movie.error) {
    return res.status(400).send({ message: movie.error.message });
  }

  return res.send(movie);
}
