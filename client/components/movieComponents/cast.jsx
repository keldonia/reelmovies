/* eslint-disable no-unused-vars */
import React from "react";

import BaseComponent from "./../baseComponent";
import CastMember from "./castMember";
/* eslint-disable no-unused-vars */

export default class Cast extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }

  renderCast (cast) {
    cast = cast || [];

    return cast.map(member => {
      return (
        <CastMember
          key={member.cast_id || member.credit_id}
          member={member}
        />
      );
    });
  }

  render () {
    let props = this.props;

    return (
      <div className="movie-cast">
        <div className="cast-type">{props.castType}</div>
        {this.renderCast(props[props.castType.toLowerCase()])}
      </div>
    );
  }
}