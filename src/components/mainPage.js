import React, { Component } from 'react';
//Link: imports
import {Link} from 'react-router-dom'

class MainPage extends Component {
    render() {
        return (
            <div>
            <Link to='/list'> Get to know the dog breeds</Link>
            <Link to='/game-one'> Lets Play!</Link>
            </div>
            );
        }
    }
    
export default MainPage;