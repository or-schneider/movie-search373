import MoviesList from "./List/MoviesList.jsx";
import style from "./PopularMovies.module.css";
import usePopularMovies from "./usePopularMovies.jsx";

function PopularMovies() {
  const { popularMovies, popularMoviesError } = usePopularMovies();

  if (popularMoviesError) return popularMoviesError;

  return (
    <div className={style.root}>
      Popular Movies
      <MoviesList moviesData={popularMovies}></MoviesList>
    </div>
  );
}

export default PopularMovies;
