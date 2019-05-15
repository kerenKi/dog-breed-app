// React: import
import React, { Component } from "react";

// BrowserRouter: import
import { Link } from "react-router-dom";

// PropTypes: import
import PropTypes from "prop-types";

import "./dogListStyle.css";

export default class Doglist extends Component {
  // PropTypes: check type of props
  static propTypes = {
    dogbreed: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="dog-list-style">
        <li>
          <Link to={"/dogbreeds/" + this.props.dogbreed}>
            {this.props.dogbreed}
          </Link>
        </li>
      </div>
      
    );
  }
}
