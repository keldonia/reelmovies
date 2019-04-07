/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, BrowserHistory as history, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import MovieList from "./movieList.jsx";
/* eslint-disable no-unused-vars */

require("./../styles/base.scss");

const Body = ({ store }) => (
  <Provider store={store}>
    <div>{"HI"}</div>
    <Router history={history}>
      <main className="main">
        <Route path="/" exact component={MovieList} />
        <Route path="/popular" component={MovieList} />
        <Route path="*" comparator={MovieList} />
      </main>
    </Router>
  </Provider>
);

Body.propTypes = {
  store: PropTypes.object.isRequired
};

export default Body;
