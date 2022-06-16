import React from "react";
import style from "./MovieCard.module.css";

function MovieCard({
  movieData = { img: "", title: "", description: "", imdbRating: "" },
}) {
  return (
    <button className={style.root}>
      <img className={style.img} src={movieData.img}></img>
      <div className={style.content}>
        <div className={style.textTruncateContainer}>
          <h3 className={`${style.title} ${style.textTruncate}`}>
            {movieData.title}
          </h3>
        </div>
        <div className={style.textTruncateContainer}>
          <p className={`${style.description} ${style.textTruncate}`}>
            {movieData.description}
          </p>
        </div>
        <p>{movieData.imdbRating}</p>
      </div>
    </button>
  );
}

export default MovieCard;
