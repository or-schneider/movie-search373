import style from "./MovieDetailsPanel.module.css";
import React from "react";

function MovieDetailsPanel({
  children,
  movieDetailsData = {
    img: "",
    title: "",
    year: "",
    director: "",
    writer: "",
    actors: "",
    genre: "",
    plot: "",
    imdbRating: "",
    runtime: "",
  },
}) {
  return (
    <div className={style.root}>
      {children}
      <img className={style.img} src={movieDetailsData.img}></img>
      <div className={style.details}>
        <div className={`${style.detailsHeader} ${style.fitContent}`}>
          <h2>{movieDetailsData.title}</h2>
          <h3>{movieDetailsData.imdbRating}/10</h3>
        </div>
        <p>
          {movieDetailsData.year} &#183; {movieDetailsData.runtime}
        </p>
        <p>{movieDetailsData.genre}</p>
        <div style={{ display: "flex" }}>
          <p className={`${style.fitContent} ${style.plot}`}>
            {movieDetailsData.plot}
          </p>
        </div>
        <div className={style.separatorLine}></div>
        <p className={style.fitContent}>
          Director: {movieDetailsData.director}
        </p>
        <div className={style.separatorLine}></div>
        <p className={style.fitContent}>Writer: {movieDetailsData.writer}</p>
        <div className={style.separatorLine}></div>
        <p className={style.fitContent}>Actors: {movieDetailsData.actors}</p>
      </div>
    </div>
  );
}

export default MovieDetailsPanel;
