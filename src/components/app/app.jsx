import React from "react";
import {moviesListPropTypes} from "../../types/movie-prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {Main} from "../main/main";
import {SignInScreen} from "../sign-in-screen/sign-in-screen";
import {MyListScreen} from "../my-list-screen/my-list-screen";
import {MovieScreen} from "../movie-screen/movie-screen";
import {AddReviewScreen} from "../add-review-screen/add-review-screen";
import {PlayerScreen} from "../player-screen/player-screen";


export const App = (props) => {

  const {movies} = props;

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Main
            movies={movies}/>

        </Route>

        <Route exact path="/login">
          <SignInScreen />
        </Route>

        <Route exact path="/mylist">
          <MyListScreen
            movies={movies}/>
        </Route>

        <Route exact path="/films/:id/review">
          <AddReviewScreen movie={movies[6]}/>
        </Route>

        <Route exact path="/films/:id"
          render={({match}) => <MovieScreen
            movie={movies.find((movie) => movie.id === +match.params.id)}
            movies={movies}/>}
        />

        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: moviesListPropTypes.isRequired
};

