import React from 'react';
import { useHistory, NavLink } from "react-router-dom";

export default function SavedList(props) {
  const history = useHistory();
  console.log(history);
  const routeHome = (event) => {
    history.push("/");
  };
return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie) => (
      <NavLink className="saved-movie" to={`/movies/${movie.id}`}>
        {movie.title}
      </NavLink>
    ))}
    <div className="home-button" onClick={routeHome}>
      Home
    </div>
  </div>
);
}
