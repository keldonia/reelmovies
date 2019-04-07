/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import queryString from "query-string";

import BaseComponent from "./baseComponent";
/* eslint-disable no-unused-vars */

require("./../styles/header.scss");

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

    this.state = ({
      search: queryString.parse(location.search).search
    });
  }

  render () {
    let props = this.props;

    return(
      <div className="navbar">
        <div className="logo">{"ReelMovies"}</div>
        <div className="search-group">
          <div className="search-bar-wrapper">
            <input
              className="search-bar"
              value={this.state.search}
            />
          </div>
          <div className="search-stats-group">
            <div className="movies-displayed">{props.movies || 0}</div>
            <div className="movies-total">
              {"/" + (props.totalMovies || "0") + " movies displayed"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;