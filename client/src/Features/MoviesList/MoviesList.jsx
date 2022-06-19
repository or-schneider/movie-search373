import MovieCard from "./Card/MovieCard.jsx";
import style from "./MoviesList.module.css";

function MoviesList({
  className = "",
  moviesData = [],
  onMovieClick = (id) => {},
}) {
  function renderMoviesList() {
    return moviesData.map((movie, index) => {
      return (
        <MovieCard
          key={movie.id + index}
          id={movie.id}
          movieData={movie}
          onCardClick={handleMovieCardClick}
        ></MovieCard>
      );
    });
  }
  function handleMovieCardClick(id) {
    onMovieClick(id);
  }
  return (
    <div className={`${className} ${style.root}`}>{renderMoviesList()}</div>
  );
}

export default MoviesList;
