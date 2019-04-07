/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import BaseComponent from "./baseComponent";
import MovieList from "./movieList";
/* eslint-disable no-unused-vars */
import {
  updateMovies,
  fetchPopular,
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

class PopularMovies extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  componentDidMount () {
    let props = this.props;

    if (!props.movies.length) {
      props.dispatch(fetchPopular(props.page));
    }

    if (!Object.keys(props.genres).length) {
      props.dispatch(fetchGenres());
    }
  }

  render () {
    let props = this.props;

    return (
      <MovieList {...props} />
    );
  }
}

const ConnectedPopularMovies = connect(mapStateToProps)(PopularMovies);

export default ConnectedPopularMovies;