import MovieCard from "./Card/MovieCard.jsx";
import style from "./MoviesList.module.css";

function MoviesList({ moviesData = [] }) {
  function renderMoviesList() {
    return moviesData.map((movie) => {
      return <MovieCard key={movie.id} movieData={movie}></MovieCard>;
    });
  }
  return <div className={style.root}>{renderMoviesList()}</div>;
}

export default MoviesList;