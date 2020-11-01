import React, {PureComponent} from "react";
import {MovieCard} from "../movie-card/movie-card";
import {moviesListPropTypes} from "../../types/movie-prop-types";

export class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.onMouseOverCard = this.onMouseOverCard.bind(this);
    this.onMouseOutCard = this.onMouseOutCard.bind(this);
  }

  onMouseOverCard(id) {
    this.setState({
      activeCard: id
    });
  }

  onMouseOutCard() {
    this.setState({
      activeCard: null
    });
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id}
            movie={movie}
            onMouseOverCard={this.onMouseOverCard}
            onMouseOutCard={this.onMouseOutCard}/>
        ))}
      </div>
    );
  }


}

MoviesList.propTypes = {
  movies: moviesListPropTypes.isRequired,
};
