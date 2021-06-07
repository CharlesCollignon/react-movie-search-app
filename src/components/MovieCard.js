import React from "react";

export default function MovieCard(props) {
  return (
    <>
      <div className="card">
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
          alt={props.movie.title + "poster"}
        />
        <div className="card--content">
          <h3 className="card--title">{props.movie.title}</h3>
          <p>
            <small>{props.movie.release_date}</small>
          </p>
          <p>{props.movie.vote_average}</p>
          <p className="card--description">{props.movie.overview}</p>
        </div>
      </div>
    </>
  );
}
