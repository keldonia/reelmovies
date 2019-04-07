/* eslint-disable no-unused-vars */
import React from "react";
import BaseComponent from "./../baseComponent";
/* eslint-disable no-unused-vars */

export default class Rating extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  composeWithThousandsSeparator (number) {
    return number ?
      number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
      "0";
  }

  render () {
    let movie = this.props.movie;

    return(
      <div className="movie-rating">
        <div className="rating-group">
          <div className="rating-value">
            {movie.vote_average}
          </div>
          <div className="rating-base">
            {"/10"}
          </div>
        </div>
        <div className="rating-number">
          {this.composeWithThousandsSeparator(movie.vote_count)}
        </div>
      </div>
    );
  }
}