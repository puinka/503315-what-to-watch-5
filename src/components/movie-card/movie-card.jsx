import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {moviePropTypes} from "../../types/movie-prop-types";
import {VideoPlayer} from "../video-player/video-player";

export const MovieCard = (props) => {
  const {movie, handleCardMouseOver, handleCardMouseOut, isActiveCard} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => handleCardMouseOver(movie.id)}
      onMouseOut={() => handleCardMouseOut()} >

      <div className="small-movie-card__image">
        {isActiveCard ?
          <VideoPlayer
            movie={movie}
          /> :
          <img src={movie.preview}
            alt={movie.title}
            width="280" height="175"
          />
        }
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
  handleCardMouseOut: PropTypes.func.isRequired,
  isActiveCard: PropTypes.bool.isRequired
};

