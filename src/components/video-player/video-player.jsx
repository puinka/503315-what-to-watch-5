import React from "react";
import {moviePropTypes} from "../../types/movie-prop-types";

export const VideoPlayer = (props) => {
  const {movie} = props;

  return (
    <video
      muted
      poster={movie.preview}
      src={movie.src}
      width="280" height="175"
    />
  );
};

VideoPlayer.propTypes = {
  movie: moviePropTypes.isRequired,
};
