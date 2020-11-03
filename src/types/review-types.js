import PropTypes from "prop-types";

export const reviewPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
});
