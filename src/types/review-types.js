import PropTypes from "prop-types";

export const film = PropTypes.shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
}).isRequired;
