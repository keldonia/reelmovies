/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  BrowserHistory as history,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";

import PopularMovies from "./popularMovies.jsx";
import SearchMovies from "./searchMovies.jsx";
import Movie from "./movie.jsx";
/* eslint-disable no-unused-vars */

require("./../styles/base.scss");

const Body = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>{"HI"}</div>
      <main className="main">
        <Switch>
          <Route path="/" exact component={PopularMovies} />
          <Route path="/popular" component={PopularMovies} />
          <Route path="/search" component={SearchMovies} />
          <Route path="/movie" component={Movie} />
          <Route path="*" component={PopularMovies} />
        </Switch>
      </main>
    </Router>
  </Provider>
);

Body.propTypes = {
  store: PropTypes.object.isRequired
};

export default Body;
