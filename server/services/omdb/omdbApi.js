import axios from "axios";

const baseUrl = `${process.env.OMDB_BASE_URL}/?apikey=${process.env.OMDB_APIKEY}`;

async function getMovieById(id = "") {
  try {
    const movie = await axios.get(`${baseUrl}&i=${id}`);
    if (movie.data.Error) movie.data.error = movie.data.Error;

    return movie.data;
  } catch (error) {
    return { error };
  }
}
async function getMoviesByIds(ids = []) {
  const getMoviePromises = [];
  try {
    for (const id of ids) {
      const getMoviePromise = axios.get(`${baseUrl}&i=${id}`);
      getMoviePromises.push(getMoviePromise);
    }
    const movies = await Promise.all(getMoviePromises);

    for (let i = 0; i < movies.length; i++) {
      movies[i] = movies[i].data;

      if (movies[i].Error) {
        movies[i].error = movies[i].Error;
        delete movies[i].Error;
      }
    }
    return movies;
  } catch (error) {
    return { error };
  }
}
async function searchMovies(query = "", page = 1) {
  try {
    const movies = await axios.get(`${baseUrl}&s=${query}&page=${page}`);
    if (movies.data.Error) {
      movies.data.error = movies.data.Error;
      delete movies.data.Error;
      return movies.data;
    }

    return movies.data;
  } catch (error) {
    return { error };
  }
}
export default { getMovieById, getMoviesByIds, searchMovies };
