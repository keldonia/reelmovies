/* eslint-disable no-unused-vars */
import React from "react";

import BaseComponent from "./../baseComponent";
/* eslint-disable no-unused-vars */

export default class CastMember extends BaseComponent {
  constructor (props) {
    super(props);
    this._bind();
  }


  render () {
    let member = this.props.member;

    if ((!member.character && !member.job) || !member.name) {
      return null;
    }

    return(
      <div className="movie-cast-member">
        <div className="cast-character">{(member.character || member.job) + ": "}</div>
        <div className="cast-name">{member.name}</div>
      </div>
    );
  }
}