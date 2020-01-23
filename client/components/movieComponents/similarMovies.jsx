/* eslint-disable no-unused-vars */
import React from "react";

import BaseComponent from "./../baseComponent";
import SimilarMovie from "./similarMovie";
/* eslint-disable no-unused-vars */

const postBase = "https://image.tmdb.org/t/p/w154";

export default class SimilarMovies extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  renderMovies () {
    let similarMovies = this.props.similarMovies;

    return similarMovies.map(similarMovie => {
      return (
        <SimilarMovie
          key={similarMovie.id}
          movie={similarMovie}
        />
      );
    });
  }

  render () {
    return(
      <div className="movie-similar-group">
        {this.renderMovies()}
      </div>
    );
  }
}