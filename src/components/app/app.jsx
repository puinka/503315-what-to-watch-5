import React from "react";
import {filmTypes} from "../../types/film-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";


const App = (props) => {

  const {films} = props;

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Main
            films={films}/>

        </Route>

        <Route exact path="/login">
          <SignInScreen />
        </Route>

        <Route exact path="/mylist">
          <MyListScreen
            films={films}/>
        </Route>

        <Route exact path="/films/:id/review">
          <AddReviewScreen film={films[6]}/>
        </Route>

        <Route exact path="/films/:id"
          render={({match}) => <MovieScreen
            film={films.find((film) => film.id === +match.params.id)}/>}
        />

        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = filmTypes.films;

export default App;
