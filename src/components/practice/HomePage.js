import React from 'react'
// Style: import
import "../../style/HomePage.css";


import { Link } from "react-router-dom";

export default class HomePage extends React.Component{ 
  render(){
    return (
      <div className="main">
        <h1>Know Dog Breeds Game </h1>
      <div className="practice">
      <Link to="/list">
      <img src='http://freshwallpapers.net/file/392/500x338/16:9/animal-wallpaper-golden-retriever-puppy_1162166273.jpg' 
      alt="dog"/>
      <h3>Practice </h3>
          </Link>
      </div>
       
    
      <div className="practice">
      <Link to="/game-one">
      <img src='https://media.mnn.com/assets/images/2015/01/dog-breeds-lead.jpg.620x0_q80_crop-smart_upscale-true.jpg' 
      alt="dog"/>
      <h3>Game1</h3>
      </Link>
      </div>


      <div className="practice">
      <Link to="/game-two">
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Coat_types_3.jpg/1200px-Coat_types_3.jpg' 
      alt="dog"/>
      <h3>Game2</h3>
      </Link>
      </div>

      <div className="practice">
      <Link to="/game-three">
      <img src='https://townsquare.media/site/15/files/2017/09/dogquestionmark_TS1.jpg' 
      alt="dog"/>
      <h3>Game3</h3>
      </Link>
      </div>

      </div>
    )
  }
}