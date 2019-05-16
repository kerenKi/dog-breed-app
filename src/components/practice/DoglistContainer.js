// React: imports
import React, { Component } from "react";
import Doglist from "./Doglist";

// Redux: connect and actions
import { connect } from "react-redux";
import { getDogBreeds } from "../../actions/SetDogbreeds";

//Link: imports
import {Link} from 'react-router-dom'

//style: import
import '../../style/DoglistContainer.css'

class DoglistContainer extends Component {
  // Fetch dogbreeds and dispatch
  componentDidMount() {
    this.props.getDogBreeds();
  }

  render() {
    const dogbreeds = this.props.dogbreeds;
    

    return (
      <div>
        <Link className="playGameButton" to='/game-one'> I want to play the game!</Link>
       
        <h1 className="title" >Dog breed list</h1>
        <p>Click on the name of the breed to see what it looks like</p>

        {dogbreeds &&
          // If exists, map array & pass props
          dogbreeds.map((dogbreed, index) => {
            return <Doglist key={index} dogbreed={dogbreed} />;
          })}

        <ul />
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
  { getDogBreeds }
)(DoglistContainer);
