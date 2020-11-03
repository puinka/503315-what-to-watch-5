import React from "react";
import {MovieCard} from "../movie-card/movie-card";
import {moviesListPropTypes} from "../../types/movie-prop-types";

export class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.handleCardMouseOver = this.handleCardMouseOver.bind(this);
    this.handleCardMouseOut = this.handleCardMouseOut.bind(this);
  }

  handleCardMouseOver(id) {
    setTimeout(this.setState({activeCard: id}), 1000);
    //console.log(this.state.activeCard)
    //console.log(id)
  }

  handleCardMouseOut() {
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
            handleCardMouseOver={this.handleCardMouseOver}
            handleCardMouseOut={this.handleCardMouseOut}
            isActiveCard={this.state.activeCard === movie.id}/>
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: moviesListPropTypes.isRequired,
};
