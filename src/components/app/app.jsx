import React from "react";
import {propTypes} from "./propTypes";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";


const App = (props) => {

  const {title, genre, year, films} = props;

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <Main
            onCardClick={() => history.push(`/films/:id`)}
            title={title} genre={genre} year={year} films={films}/>
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

App.propTypes = propTypes;

export default App;
