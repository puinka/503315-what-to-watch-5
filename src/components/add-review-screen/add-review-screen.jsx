import React, {PureComponent, Fragment} from "react";
import {filmTypes} from "../../types/film-types";

// const STAR_AMOUNT = 5;
const STARS = [1, 2, 3, 4, 5];


class AddReview extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      rating: 1,
      reviewText: ``
    };

    this.onRatingChange = this.onRatingChange.bind(this);
    this.onReviewTextChange = this.onReviewTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onRatingChange(evt) {

    const newRating = +evt.target.value;

    this.setState((state) => Object.assign(
        state,
        {rating: newRating}
    ));

  }


  onReviewTextChange(evt) {

    const newReviewtext = evt.target.value;

    this.setState((state) => Object.assign(
        state,
        {reviewText: newReviewtext}
    ));
  }

  onSubmit(evt) {
    evt.preventDefault();
  }


  render() {

    const {film} = this.props;
    const {title, poster, background} = film;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={background} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">{title}</a>
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
            <img src={poster} alt={title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">

              <div className="rating__stars">

                {STARS.map((ratingValue) => {


                  return (
                    <Fragment key={`star-${ratingValue}`}>
                      <input
                        className="rating__input"
                        id={`star-${ratingValue}`}
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        // checked={ratingValue <= this.state.rating}
                        onChange={this.onRatingChange}
                      />

                      <label className="rating__label"
                        htmlFor={`star-${ratingValue}`}>Rating {ratingValue}</label>
                    </Fragment>
                  );
                }
                )}


              </div>

            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                onChange={this.onReviewTextChange}></textarea>
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

AddReview.propTypes = filmTypes.singleFilm;

export default AddReview;
