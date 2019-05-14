// React: import
import React, { Component } from "react";

// BrowserRouter: import
import { Link } from "react-router-dom";

export default class Doglist extends Component {
  render() {
    return (
      <div>
        <li>
          <Link to={"/dogbreeds/" + this.props.dogbreed}>
            {this.props.dogbreed}
          </Link>
        </li>
      </div>
    );
  }
}