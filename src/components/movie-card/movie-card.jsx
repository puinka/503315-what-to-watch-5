import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {moviePropTypes} from "../../types/movie-prop-types";


export const MovieCard = (props) => {
  const {movie, handleCardMouseOver, handleCardMouseOut} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={handleCardMouseOver}
      onMouseOut={handleCardMouseOut}
    >
      <div className="small-movie-card__image">
        <img src={movie.preview} alt={movie.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to={`/films/${movie.id}`}
          className="small-movie-card__link">
          {movie.title}
        </Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: moviePropTypes.isRequired,
  handleCardMouseOver: PropTypes.func.isRequired,
  handleCardMouseOut: PropTypes.func.isRequired
};

