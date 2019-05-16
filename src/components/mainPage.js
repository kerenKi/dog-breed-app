import React, { Component } from 'react';
//Link: imports
import {Link} from 'react-router-dom'

import '../style/mainPage.css'


class MainPage extends Component {
    render() {
        return (
            <div>
            <Link className="practice" to='/list'> Learn dog breeds</Link>
            <Link className="play" to='/game-one'> Lets Play!</Link>
            </div>
            );
        }
    }
    
export default MainPage;


