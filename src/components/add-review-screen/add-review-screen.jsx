import React from "react";
import {Link} from "react-router-dom";
import {moviePropTypes} from "../../types/movie-prop-types";

const STARS = [1, 2, 3, 4, 5];

export class AddReviewScreen extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      rating: 1,
      reviewText: ``
    };

    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleReviewTextChange = this.handleReviewTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRatingChange(evt) {
    this.setState({
      rating: Number(evt.target.value)
    });
  }

  handleReviewTextChange(evt) {
    this.setState({
      reviewText: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    const {movie} = this.props;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={movie.background} alt={movie.title} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <div className="logo">
              <Link className="logo__link" to="/">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to={`/films/${movie.id}`}>{movie.title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>
          <div className="movie-card__poster movie-card__poster--small">
            <img src={movie.poster} alt={movie.title} width="218" height="327" />
          </div>
        </div>
        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                {STARS.map((ratingValue) => (
                  <React.Fragment key={`star-${ratingValue}`}>
                    <input
                      className="rating__input"
                      id={`star-${ratingValue}`}
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onChange={this.handleRatingChange}
                    />
                    <label className="rating__label"
                      htmlFor={`star-${ratingValue}`}>Rating {ratingValue}</label>
                  </React.Fragment>
                )
                )}
              </div>
            </div>
            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                onChange={this.handleReviewTextChange}
              />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

AddReviewScreen.propTypes = {
  movie: moviePropTypes.isRequired
};

