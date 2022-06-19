import { request } from "express";
import searchMovies from "../services/logic/searchMovies.js";

export default async function searchMoviesController(req = request, res) {
  const { q, page } = req.query;

  if (!q || q.length === 0)
    return res.status(400).send({ message: "Provide a search query" });

  let pageNumber = parseInt(page);
  if (!pageNumber || pageNumber < 1) pageNumber = 1;

  const searchResults = await searchMovies(q, pageNumber);
  if (searchResults.error) {
    let errorCode;
    let errorMessage;
    switch (searchResults.error) {
      case "Too many results.":
        errorCode = 403;
        errorMessage = searchResults.error;
        break;
      case "Movie not found!":
        errorCode = 404;
        errorMessage = searchResults.error;
      default:
        if (searchResults.error?.response?.data?.Error)
          if (
            searchResults.error?.response?.data?.Error ===
            "Request limit reached!"
          ) {
            errorCode = 429;
            errorMessage = searchResults.error.response.data.Error;
            break;
          }
        errorCode = 500;
        errorMessage = searchResults.error.message;
        break;
    }
    return res.status(errorCode).send({ message: errorMessage });
  }
  return res.send(searchResults);
}
