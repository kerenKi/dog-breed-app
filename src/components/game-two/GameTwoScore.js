//Game 2

// React: imports
import React, { Component } from "react";
// Redux: connect
import { connect } from "react-redux";
//import action for display user score
import {DisplayUserScore} from '../../actions/DisplayUserScore'
//import progressbar externamlly
import { Progress } from 'reactstrap';

// Style: import
import "../../style/Progress.css";

class Score extends Component {
    correct = 0;
    total = 0;

    //shows the number of correct answers
    findOutSCore = () => {
        this.total = this.props.scores.length;
        this.correct = this.props.scores.filter((score) => {
            return score === true;
        }).length; 
        return this.correct + "/" + this.total 
    }
    
    //shows user score in percentage  
    getScoreInPercentage = () => {
        let score=0;
        this.total = this.props.scores.length;
        this.correct = this.props.scores.filter((score) => {
            return score === true;
        }).length;
        if (this.total > 0) {
            score=Number(((this.correct / this.total) * 100).toFixed())
            this.props.DisplayUserScore({score:score});
            return score;
        }
        return 0
    }
    
    render() {
        return (
            <div>
            <div className="text-center">Score:
            <span className="out-of-score" > {this.findOutSCore()} </span>
            
            </div>
            {/* progreebar shows the value in percentage */}
            <Progress className="progress" animated={true} color="info" value={ this.getScoreInPercentage()} > {this.getScoreInPercentage()}%</Progress>
            </div>
            )
        }
    }
    
    
    // Redux: get both part of states
    const mapStateToProps = state => {
        return {
            scores: state.gamescore
        };
    };
    
    // Redux: connect to state, bind action creator
    export default connect(mapStateToProps,{DisplayUserScore})(Score);