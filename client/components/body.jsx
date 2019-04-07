/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, BrowserHistory as history, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import PopularMovies from "./popularMovies.jsx";
/* eslint-disable no-unused-vars */

require("./../styles/base.scss");

const Body = ({ store }) => (
  <Provider store={store}>
    <div>{"HI"}</div>
    <Router history={history}>
      <main className="main">
        <Route path="/" exact component={PopularMovies} />
        <Route path="/popular" component={PopularMovies} />
        {/*<Route path="/search" component={SearchMovies} />*/}
        <Route path="*" comparator={PopularMovies} />
      </main>
    </Router>
  </Provider>
);

Body.propTypes = {
  store: PropTypes.object.isRequired
};

export default Body;
