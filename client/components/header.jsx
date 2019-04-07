/* eslint-disable no-unused-vars */
import React from "react";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
    this._bind("updateSearchBar", "searchMovie");

    this.state = {
      search: "",
      push: false
    };
  }

  componentDidUpdate () {
    if (this.state.push) {
      this.setState({
        push: false,
        search: ""
      });
    }
  }

  updateSearchBar (event) {
    let value = event.target.value;

    this.setState({
      search: value
    });
  }

  searchMovie (event) {
    let search = this.state.search;

    if (search && search.length >= 3) {
      this.setState({
        push: true
      });
    }
  }

  renderSearchPush () {
    let state = this.state;

    if (state.push) {
      let searchTerm = "/search?search=" + this.state.search.replace(" ", "+");

      return (
        <Redirect to={searchTerm} />
      );
    }
    return null;
  }

  render () {
    let props = this.props;

    return(
      <div className="navbar">
        <div className="logo-group">
          <Link
            className="logo"
            to="/popular"
          >
            {"ReelMovies"}
          </Link>
        </div>
        <div className="search-group">
          <div className="search-bar-wrapper">
            <input
              className="search-bar"
              value={this.state.search}
              onChange={this.updateSearchBar}
              type="text"
            />
            <div
              className="search-button"
              onClick={this.searchMovie}
            >
              {"Search"}
            </div>
          </div>
          <div className="search-stats-group">
            <div className="movies-displayed">{props.movies || 0}</div>
            <div className="movies-total">
              {"/" + (props.totalMovies || "0") + " movies displayed"}
            </div>
          </div>
        </div>
        {this.renderSearchPush()}
      </div>
    );
  }
}

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;