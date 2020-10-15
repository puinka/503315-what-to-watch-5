import React from "react";
import {Link} from "react-router-dom";
import {propTypes} from "./propTypes";

const MovieCard = (props) => {

  const {film} = props;
  const {preview, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={preview} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/films/id" className="small-movie-card__link" href="movie-page.html">{title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = propTypes;

export default MovieCard;
