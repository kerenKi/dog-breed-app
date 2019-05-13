// React: imports
import React, { Component } from "react";

// Superagent: import
import * as request from "superagent";

export default class DogimagesContainer extends Component {
  
  // Local state
  state = { images: null };

  // Fetching API
  componentDidMount() {
    request
      .get("https://dog.ceo/api/breed/hound/images")
      .then(response => this.displayImages(response.body.message))
      .catch(console.error);
  }

  displayImages(images) {
    // Set local state
    this.setState({
      images
    });
  }

  render() {
    return (
      <div>
        <h1>Dog breed details:</h1>

        {this.state.images && console.log(this.state.images)}

        <ul />
      </div>
    );
  }
}