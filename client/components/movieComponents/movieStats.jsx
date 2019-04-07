/* eslint-disable no-unused-vars */
import React from "react";

import BaseComponent from "./../baseComponent";
/* eslint-disable no-unused-vars */

export default class MovieStats extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  composeRuntime (movie) {
    return movie ? movie.runtime + " min" : "";
  }

  composeWithThousandsSeparator (number) {
    return number ?
      number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
      "0";
  }

  render () {
    let movie = this.props.movie;

    return (
      <div className="movie-stats">
        <div className="movie-runtime">
          {"Runtime: " + (this.composeRuntime(movie) || "")}
        </div>
        <div className="movie-release">
          {"Release: " + (movie.release_date || "")}
        </div>
        <div className="movie-status">
          {"Status: " + (movie.status || "")}
        </div>
        <div className="movie-revenue">
          {"Revenue: $" + this.composeWithThousandsSeparator(movie.revenue)}
        </div>
        <div className="movie-revenue">
          {"Budget: $" + this.composeWithThousandsSeparator(movie.budget)}
        </div>
      </div>
    );
  }
}