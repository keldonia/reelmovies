/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import queryString from "query-string";

import BaseComponent from "./baseComponent";
/* eslint-disable no-unused-vars */
import {
  fetchMovie,
  fetchMovieReturn,
  fetchGenres
} from "./../actions/movieActions";

const postBase = "https://image.tmdb.org/t/p/w780";

require("./../styles/movie.scss");

const mapStateToProps = (state, ownProps) => {
  let movieInfo = state.MovieReducer;

  return ({
    genres: movieInfo.genres,
    movie: movieInfo.movie
  });
};

class Movie extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  componentDidMount () {
    let props = this.props;

    if (!Object.keys(props.movie).length) {
      let query = queryString.parse(this.props.location.search);

      props.dispatch(fetchMovie(query));
    }

    if (!Object.keys(props.genres).length) {
      props.dispatch(fetchGenres());
    }
  }

  componentWillUnmount () {
    this.props.dispatch(fetchMovieReturn({}));
  }

  render () {
    let props = this.props;
    let movie = props.movie;
    let photoStyle = {
      backgroundImage: "url(" + postBase + movie.backdrop_path
    };

    return (
      <div className="movie-body">
        <div className="movie-backdrop" style={ photoStyle } />
        {JSON.stringify(props.movie)}
      </div>
    );
  }
}

const ConnectedMovie = connect(mapStateToProps)(Movie);

export default ConnectedMovie;