import style from "./MoviesList.module.css";

function MoviesList({ moviesData = [] }) {
  function renderMoviesList() {
    return moviesData.map((movie) => {
      console.log(movie);
      return (
        <div key={movie.id}>
          {movie.img}
          {movie.title}
          {movie.description}
          {movie.imdbRating}
        </div>
      );
    });
  }
  return <div>{renderMoviesList()}</div>;
}

export default MoviesList;
