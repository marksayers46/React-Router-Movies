import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  const { id } = movie;
  return (
    <Link to={`/movies/${id}`}>
      <MovieCard movies={movie} />
    </Link>
  );
}

export default MovieList;
