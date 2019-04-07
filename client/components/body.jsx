/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, BrowserHistory as history, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import Landing from "./landing.jsx";
/* eslint-disable no-unused-vars */

require("./../styles/base.scss");

const Body = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <main className="main">
        <Route path="/" exact component={Landing} />
        <Route path="/landing" component={Landing} />
        <Route path="/popular" component={Landing} />
        <Route path="*" comparator={Landing} />
      </main>
    </Router>
  </Provider>
);

Body.propTypes = {
  store: PropTypes.object.isRequired
};

export default Body;
