import getMovieDetails from "../services/logic/getMovieDetails.js";

export default async function getMovieController(req, res) {
  const { id } = req.params;
  if (!id) return res.status(400).send({ message: `Must provide an Id` });

  const movie = await getMovieDetails(id);

  if (movie.error) {
    let errorCode;
    let errorMessage;
    if (
      movie.error === "Incorrect IMDb ID." ||
      movie.error === "Invalid IMDb ID."
    ) {
      errorCode = 400;
      errorMessage = movie.error;
    } else if (
      movie.error?.response?.data?.Error === "Request limit reached!"
    ) {
      errorCode = 429;
      errorMessage = movie.error.response.data.Error;
    } else {
      errorCode = 500;
      errorMessage = movie.error.message;
    }
    return res.status(errorCode).send({ message: errorMessage });
  }

  return res.send(movie);
}
