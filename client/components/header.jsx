/* eslint-disable no-unused-vars */
import React from "react";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import BaseComponent from "./baseComponent";
import SearchStats from "./searchStats";
/* eslint-disable no-unused-vars */
import {
  ENTER
} from "./../constants/keyCode";
import {
  fetchSearchMovie
} from "./../actions/movieActions";

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
    this._bind("updateSearchBar", "searchMovie", "searchMovieKeyCheck");

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
      this.props.dispatch(fetchSearchMovie({ search }, 1));
    }
  }

  searchMovieKeyCheck (event) {
    if (event.keyCode === ENTER) {
      this.searchMovie();
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
      <div className="navbar" onKeyDown={this.searchMovieKeyCheck}>
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
          <SearchStats
            movies={props.movies}
            totalMovies={props.totalMovies}
          />
        </div>
        {this.renderSearchPush()}
      </div>
    );
  }
}

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;