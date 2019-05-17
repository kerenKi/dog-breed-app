import React, { Component } from 'react';
//Link: imports
import {Link} from 'react-router-dom'

import '../style/mainPage.css'


class MainPage extends Component {
    render() {
        return (
            <div>
                <p> <Link className="practice" to='/list'> Learn dog breeds</Link></p>
                <p> <Link className="play" to='/game-one'> Lets Play game 1!</Link></p>
                <p> <Link className="play" to='/game-two'> Lets Play game 2!</Link></p>
            </div>
            );
        }
    }
    
export default MainPage;


