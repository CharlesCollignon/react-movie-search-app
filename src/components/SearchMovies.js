import React from "react";
import { useState } from "react";

export default function SearchMovies() {
  // state input query - movies
  const [query, setQuery] = useState("");

  // create the state for movies, and update that state
  const [movies, setMovies] = useState([]);

  const searchMovies = async (event) => {
    event.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=51644ae4993b59f3f78d1065f7a2b4ae&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query"></label>
        <input
          type="text"
          className="input"
          name="query"
          placeholder="Search a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="card" key={movie.id}>
              <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + "poster"}
              />
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p>
                  <small>{movie.release_date}</small>
                </p>
                <p>{movie.vote_average}</p>
                <p className="card--description">{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
