import React from "react";
import PropTypes from "prop-types";
import {filmTypes} from "../../types/film-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";


const App = (props) => {

  const {title, genre, year, moviesList} = props;

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <Main
            onCardClick={() => history.push(`/films/:id`)}
            title={title} genre={genre} year={year} movies={moviesList}/>
        )}>

        </Route>

        <Route exact path="/login">
          <SignInScreen />
        </Route>

        <Route exact path="/mylist">
          <MyListScreen />
        </Route>

        <Route exact path="/films/:id">
          <MovieScreen film={films[7]} />
        </Route>

        <Route exact path="/films/:id/review">
          <AddReviewScreen film={films[6]}/>
        </Route>

        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  moviesList: PropTypes.arrayOf(filmTypes).isRequired,
  title: PropTypes.string.isRequired, // temp
  genre: PropTypes.string.isRequired, // temp
  year: PropTypes.string.isRequired // temp
};

export default App;
