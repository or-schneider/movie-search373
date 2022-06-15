import axios from "axios";

const baseUrl = `${process.env.OMDB_BASE_URL}/?apikey=${process.env.OMDB_APIKEY}`;

async function getMovieById(id = "") {
  try {
    const movie = await axios.get(`${baseUrl}&i=${id}`);
    if (movie.data.Error) movie.data.error = movie.data.Error;

    return movie.data;
  } catch (error) {
    console.log(error);
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
    console.log(error);
    return { error };
  }
}
export default { getMovieById, getMoviesByIds };
