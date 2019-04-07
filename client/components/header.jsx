/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import BaseComponent from "./baseComponent";
/* eslint-disable no-unused-vars */

const mapStateToProps = (state, ownProps) => {
  let movieInfo = state.MovieReducer;

  return ({
    genres: movieInfo.genres,
    totalMovies: movieInfo.total_results,
    totalPages: movieInfo.total_pages,
    movies: movieInfo.results.length
  });
};

class Header extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  render () {
    return(
      <div className="navbar">
        <div>{"HI"}</div>
      </div>
    );
  }
}

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;