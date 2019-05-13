import React, { Component } from "react";
export default class Doglist extends Component {
  render() {
    return (
      <div>
        <li>{this.props.dogbreed}</li>
      </div>
    );
  }
}
