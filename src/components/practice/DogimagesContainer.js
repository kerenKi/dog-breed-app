// React: imports
import React, { Component } from "react";

// Superagent: import
import * as request from "superagent";

// Component: import
import Dogimages from "./Dogimages";

// Redux: imports
import { connect } from "react-redux";

// Action: imports
import { setDogImages } from "../../actions/SetDogimages";

//Link: imports
import {Link} from 'react-router-dom'


class DogimagesContainer extends Component {
  // Get param from url
  breed = this.props.match.params.breed;

  // Fetch API
  componentDidMount() {
    request
      .get("https://dog.ceo/api/breed/" + this.breed + "/images")
      .then(response => {
        // Dispatch action
        this.props.setDogImages(response.body.message);
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign:'center' , color:'sienna'}}>Images of {this.breed}</h1>
        <ul>
          {this.props.dogimages &&
            // If exists, filter and map array, then pass props
            this.props.dogimages
              .filter((image, index) => index < 11)
              .map((image, index) => {
                return <Dogimages key={index} breed={this.breed} img={image} />;
              })}
        </ul>
        <Link to='/list'> Go back to the breed list</Link>

      </div>
    );
  }
}

// Redux: get part of state
const mapStateToProps = state => {
  return {
    dogimages: state.dogimages
  };
};
// Redux: connect to state, bind action creator
export default connect(
  mapStateToProps,
  { setDogImages }
)(DogimagesContainer);
