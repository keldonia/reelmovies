/* eslint-disable no-unused-vars */
import React from "react";
import BaseComponent from "./../baseComponent";
/* eslint-disable no-unused-vars */

export default class GenreList extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  composeGenreList () {
    let props = this.props;
    let genres = props.genres;
    let ids = props.genreId || [];

    return ids.map(genreId => {
      return genres[genreId];
    }).join(", ");
  }

  render () {
    return (
      <div className="movie-genres">
        {this.composeGenreList()}
      </div>
    );
  }
}