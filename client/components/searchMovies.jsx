/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import queryString from "query-string";

import BaseComponent from "./baseComponent";
import MovieList from "./movieList";
/* eslint-disable no-unused-vars */
import {
  fetchSearchMovie,
  fetchGenres
} from "./../actions/movieActions";

require("./../styles/movieList.scss");


const mapStateToProps = (state, ownProps) => {
  let movieInfo = state.MovieReducer;

  return ({
    movies: movieInfo.results,
    page: movieInfo.page,
    totalMovies: movieInfo.total_results,
    totalPages: movieInfo.total_pages,
    genres: movieInfo.genres
  });
};

class SearchMovies extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  componentDidMount () {
    let props = this.props;
    let query = queryString.parse(this.props.location.search);

    if (!props.movies.length) {
      props.dispatch(fetchSearchMovie(query, props.page));
    }

    if (!Object.keys(props.genres).length) {
      props.dispatch(fetchGenres());
    }
  }

  render () {
    let props = this.props;

    if (!props.location.search) {
      return (
        <Redirect to="/popular" />
      );
    } else {
      return (
        <MovieList {...props} />
      );
    }
  }
}

const ConnectedSearchMovies = connect(mapStateToProps)(SearchMovies);

export default ConnectedSearchMovies;