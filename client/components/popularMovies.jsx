/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import BaseComponent from "./baseComponent";
import MovieList from "./movieList";
/* eslint-disable no-unused-vars */
import {
  fetchPopular,
  fetchGenres
} from "./../actions/movieActions";

require("./../styles/movieList.scss");

let scroll = {};

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

    props.dispatch(fetchPopular(props.page));

    if (!Object.keys(props.genres).length) {
      props.dispatch(fetchGenres());
    }
    window.addEventListener("scroll", this.onScroll.bind(this), false);
  }

  componentWillUnmount () {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll () {
    let props = this.props;
    let newPage = props.page + 1;

    if(
      props.page < props.totalPages &&
      !scroll[newPage] &&
      (window.innerHeight + window.scrollY) >= (props.movies.length * 250)
    ) {
      scroll[newPage] = true;
      props.dispatch(fetchPopular(newPage));
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