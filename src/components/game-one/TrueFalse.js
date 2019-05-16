import React from 'react'

export default class TrueFalse extends React.Component{
  state={
      breed:['pug', 'bulldog' , 'lebrado'],
      ans:'pug',
      correct:false,
      right:0,
      wrong:false
  }
  
  handleCick = (choice) => {
    console.log('choice test:', choice)

    const isInList = this.state.breed.indexOf(choice) === 0

    console.log(isInList)

    if(isInList){
      console.log('right')
     this.clickCorrectAns();
    }
    else{
     this.clickWrongAns()}
      // console.log('wrong')
  }
 

  clickCorrectAns = () =>{
  this.setState({...this.state,correct:true,wrong:false})
  }

  
  clickWrongAns = () =>{
    this.setState({...this.state,correct:false,wrong:true})
    setTimeout(function(){
      console.log('ask next question')
    },2000)
  
  }

  renderResult = () =>{
  return (
    <span>{this.state.correct?<p>your answer is correct</p>:''}
    {this.state.wrong?<p>Right answer was {this.state.ans} </p>:''}</span>
    )
  }
  render(){
    return (<div>
      <ul>
        <li onClick={() => this.handleCick('hello')}> Hello</li>
        <li onClick={() => this.handleCick('pug')}> Pug</li>
        <li onClick={() => this.handleCick('german')}> German</li>
      </ul>
      
      {this.renderResult()}
  
    </div>)
  }
}