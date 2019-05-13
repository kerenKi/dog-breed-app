// React imports
import React, { Component } from "react";

// Superagent import
import * as request from "superagent";

export default class DogimagesContainer extends Component {
  // Local state
  state = { images: null };

  // Fetching the API
  componentDidMount() {
    request
      .get("https://dog.ceo/api/breed/hound/images")
      .then(response => this.displayImages(response.body.message))
      .catch(console.error);
  }

  displayImages(images) {
    this.setState({
      images: images
    });
  }

  render() {
    return (
      <div>
        <h1>Dogs details:</h1>

        {this.state.images && console.log(this.state.images)}

        <ul />
      </div>
    );
  }
}