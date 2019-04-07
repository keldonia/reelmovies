/* eslint-disable no-unused-vars */
import React from "react";

import BaseComponent from "./baseComponent";
/* eslint-disable no-unused-vars */

const renderedPaths = [
  "/search",
  "/popular"
];

export default class SearchStats extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  isRendered () {
    let render = false;

    renderedPaths.forEach(path => {
      if (location.pathname.includes(path)) {
        render = true;
      }
    });

    return render;
  }

  render () {
    if (this.isRendered()) {
      let props = this.props;

      return (
        <div className="search-stats-group">
          <div className="movies-displayed">{props.movies || "0"}</div>
          <div className="movies-total">
            {"/" + (props.totalMovies || "0") + " movies displayed"}
          </div>
        </div>
      );
    }

    return null;
  }
}