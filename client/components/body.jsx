/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  BrowserHistory as history,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";

import PopularMovies from "./popularMovies.jsx";
import SearchMovies from "./searchMovies.jsx";
import Movie from "./movie.jsx";
import Header from "./header.jsx";
/* eslint-disable no-unused-vars */

require("./../styles/base.scss");

const Body = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Header />
      <main className="main">
        <Switch>
          <Route path="/" exact component={PopularMovies} />
          <Route path="/popular" component={PopularMovies} />
          <Route path="/search" component={SearchMovies} />
          <Route path="/movie" component={Movie} />
          <Redirect from="*" to="/" />
        </Switch>
      </main>
    </Router>
  </Provider>
);

Body.propTypes = {
  store: PropTypes.object.isRequired
};

export default Body;
