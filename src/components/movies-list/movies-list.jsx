import React, {PureComponent} from "react";
import MovieCard from "../movie-card/movie-card";
import {propTypes} from "./propTypes";

class MoviesList extends PureComponent {
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
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCard key={`films-${i}`} id={`films-${i}`} film={film} onMouseOverCard={this.onMouseOverCard} onMouseOutCard={this.onMouseOutCard}/>
        ))}
      </div>
    );
  }


}

MoviesList.propTypes = propTypes;

export default MoviesList;
