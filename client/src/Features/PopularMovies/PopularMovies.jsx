import MoviesList from "../MoviesList/MoviesList.jsx";
import style from "./PopularMovies.module.css";
import usePopularMovies from "./usePopularMovies.jsx";

function PopularMovies() {
  const { popularMovies, popularMoviesError } = usePopularMovies();

  if (popularMoviesError) return popularMoviesError;

  return (
    <div className={style.root}>
      {/* TODO Check if a title is neccessary  */}
      {/* <h2 className={style.title}>Popular Movies</h2>  */}

      <MoviesList moviesData={popularMovies}></MoviesList>
    </div>
  );
}

export default PopularMovies;
