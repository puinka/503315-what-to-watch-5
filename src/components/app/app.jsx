import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";

const App = (props) => {

  const {title, genre, year} = props;

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main title={title} genre={genre} year={year} />
        </Route>

        <Route exact path="/login">
          <SignInScreen />
        </Route>

        <Route exact path="/mylist">
          <MyListScreen />
        </Route>

        <Route exact path="/films/:id">
          <MovieScreen />
        </Route>

        <Route exact path="/films/:id/review">
          <AddReviewScreen />
        </Route>

        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default App;
