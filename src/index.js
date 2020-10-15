import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";

const Settings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`
};

ReactDOM.render(
    <App
      title={Settings.TITLE}
      genre={Settings.GENRE}
      year={Settings.YEAR}
      films={films}
    />,
    document.querySelector(`#root`)
);
