/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-disable no-unused-vars */

export default class BaseComponent extends React.Component {
  _bind(...methods) {
    methods.forEach(
      method => {
        this[method] = this[method].bind(this);
      }
    );
  }
}