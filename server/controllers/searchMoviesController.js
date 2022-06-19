import { request } from "express";
import searchMovies from "../services/logic/searchMovies.js";

export default async function searchMoviesController(req = request, res) {
  const { q, page } = req.query;

  if (!q || q.length === 0)
    return res.status(400).send({ message: "Provide a search query" });

  let pageNumber = parseInt(page);
  if (!pageNumber || pageNumber < 1) pageNumber = 1;

  const searchResults = await searchMovies(q, pageNumber);
  if (searchResults.error)
    switch (searchResults.error) {
      case "Too many results.":
        return res.status(403).send({ message: searchResults.error });
      case "Movie not found!":
        return res.status(404).send({ message: searchResults.error });
      default:
        return res.status(400).send({ message: searchResults.error.message });
    }
  return res.send(searchResults);
}
