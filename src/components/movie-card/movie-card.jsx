import React from "react";
import {Link} from "react-router-dom";
import {moviePropTypes} from "../../types/movie-prop-types";


export const MovieCard = (props) => {
  const {movie} = props;
  const {id, preview, title} = movie;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={preview} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to={`/films/${id}`}
          className="small-movie-card__link">
          {title}
        </Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: moviePropTypes.isRequired
};

