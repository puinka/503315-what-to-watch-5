import PropTypes from "prop-types";

export const propTypes = {
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
  background: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired
};
