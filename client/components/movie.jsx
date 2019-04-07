/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import queryString from "query-string";

import BaseComponent from "./baseComponent";
import GenreList from "./movieListItemComponents/genreList";
import Rating from "./movieListItemComponents/rating";
import MovieStats from "./movieComponents/movieStats";
import Cast from "./movieComponents/cast";
/* eslint-disable no-unused-vars */
import {
  fetchMovie,
  fetchCast,
  fetchMovieReturn,
  fetchGenres
} from "./../actions/movieActions";

const postBase = "https://image.tmdb.org/t/p/w780";

require("./../styles/movie.scss");

const mapStateToProps = (state, ownProps) => {
  let movieInfo = state.MovieReducer;

  return ({
    genres: movieInfo.genres,
    movie: movieInfo.movie,
    cast: movieInfo.cast,
    crew: movieInfo.crew
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
      props.dispatch(fetchCast(query));
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
      backgroundImage: "url(" + postBase + movie.backdrop_path + ")"
    };
    let genreIds = movie.genres || [];

    genreIds = genreIds.map(id => {
      return id.id;
    });

    return (
      <div className="movie-body">
        <div className="movie-backdrop" style={movie.id ? photoStyle : {}} />
        <div className="movie-title-group">
          <div className="movie-title">
            {movie.title}
          </div>
          <Rating movie={movie} />
          <GenreList genres={props.genres} genreId={genreIds} />
        </div>
        <MovieStats movie={movie} />
        <div className="movie-overview">{movie.overview}</div>
        <div className="movie-credits">
          <Cast cast={props.cast} castType={"Cast"} />
          <Cast crew={props.crew} castType={"Crew"} />
        </div>
      </div>
    );
  }
}

const ConnectedMovie = connect(mapStateToProps)(Movie);

export default ConnectedMovie;