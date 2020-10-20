import PropTypes from "prop-types";

export const filmTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  runTime: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}).isRequired;
