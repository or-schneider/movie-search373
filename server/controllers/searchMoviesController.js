import { request } from "express";
import omdbApi from "../services/omdb/omdbApi.js";

export default async function searchMoviesController(req = request, res) {
  const { q, page } = req.query;

  if (!q || q.length === 0)
    return res.status(400).send({ message: "Provide a search query" });

  let pageNumber = parseInt(page);
  if (!pageNumber || pageNumber < 1) pageNumber = 1;

  const searchResults = await omdbApi.searchMovies(q, pageNumber);
  if (searchResults.error)
    return res.status(400).send({ message: searchResults.error });

  return res.send(searchResults);
}
