/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import BaseComponent from "./baseComponent";
import MovieListItem from "./movieListItemComponents/movieListItem";
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

export default class MovieList extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  renderMovies () {
    let props = this.props;

    return props.movies.map(movie => {
      return (
        <MovieListItem
          genres={props.genres}
          key={movie.id}
          movie={movie}
        />
      );
    });
  }

  render () {
    let props = this.props;
    let landingItems = this.renderMovies();

    return (
      <section className="landing-main">
        <section className="landing-movies">
          {landingItems}
        </section>
      </section>
    );
  }
}
