/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import BaseComponent from "./../baseComponent";
/* eslint-disable no-unused-vars */

const postBase = "https://image.tmdb.org/t/p/w154";

export default class SimilarMovie extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  render () {
    let movie = this.props.movie;
    let photoStyle = {
      backgroundImage: "url(" + postBase + movie.poster_path + ")"
    };

    return(
      <div className="movie-similar">
        <Link
          className="similar-poster"
          style={ photoStyle }
          to={"/movie?id=" + movie.id}
        />
        <Link
          className="similar-title"
          to={"/movie?id=" + movie.id}
        >
          {movie.title}
        </Link>
      </div>
    );
  }
}