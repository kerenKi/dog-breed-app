// React: imports
import React, { Component } from "react";
import Doglist from "./Doglist";

// Superagent: imports
import * as request from "superagent";

// Redux: connect and actions
import { connect } from "react-redux";
import { setDogBreeds } from "../../actions/SetDogbreeds";

//Link: imports
import {Link} from 'react-router-dom'

class DoglistContainer extends Component {
  // Fetch API
  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        // Action creotor call
        this.props.setDogBreeds(Object.keys(response.body.message));
      })
      .catch(console.error);
  }

  render() {
    const dogbreeds = this.props.dogbreeds;
    

    return (
      <div>
       
        <h1 style={{textAlign:'center' , color:'sienna'}}>Dog breed list</h1>

        {dogbreeds &&
          // If exists, map array & pass props
          dogbreeds.map((dogbreed, index) => {
            return <Doglist key={index} dogbreed={dogbreed} />;
          })}

        <ul />
        <Link to='/game-one'> I'm ready, LET'S PLAY</Link>
      </div>
     
    );
  }
}

// Redux: get part of state
const mapStateToProps = state => {
  return {
    dogbreeds: state.dogbreeds
  };
};
// Redux: connect to state, bind action creator
export default connect(
  mapStateToProps,
  { setDogBreeds }
)(DoglistContainer);
