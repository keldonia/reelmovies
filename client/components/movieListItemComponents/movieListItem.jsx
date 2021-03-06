/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import BaseComponent from "./../baseComponent";
import GenreList from "./genreList";
import Rating from "./rating";
/* eslint-disable no-unused-vars */

const postBase = "https://image.tmdb.org/t/p/w154";

export default class MovieListItem extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  composeTitleAndReleaseDate (movie) {
    return movie.title + " (" + movie.release_date.slice(0,4) + ")";
  }

  render () {
    let props = this.props;
    let movie = props.movie;
    let photoStyle = {
      backgroundImage: "url(" + postBase + movie.poster_path + ")"
    };

    return (
      <section className="landing-item">
        <div className="left-poster" style={ photoStyle } />
        <div className="landing-item-data">
          <div className="title-genre-group">
            <div className="movie-title">
              <Link to={"/movie?id=" + movie.id}>
                {this.composeTitleAndReleaseDate(movie)}
              </Link>
            </div>
            <GenreList genres={props.genres} genreIds={movie.genre_ids} />
          </div>
          <Rating movie={movie} />
          <div className="movie-overview">{movie.overview}</div>
        </div>
      </section>
    );
  }
}