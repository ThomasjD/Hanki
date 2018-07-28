import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ViewCard from './components/ViewCard'
import ViewAnswer from './components/ViewAnswer'


class App extends Component {
  state = {
    cards: [
      {question: "What is a js object?",
      answer: "Anything you want it to be baby!"},
      {question: "2 arguments reducer() takes in?",
      answer: "1. value from previous/initial 2. callback()"}
    ]
  }

  //switchQuestionHandler
  render() {
    return (
      <div className="App">
        <ViewCard question = {this.state.cards[0].question}> </ViewCard>
        <button onClick={this.switchAnswerHandler}>Show Answer</button>
        <br/>
        <br/>
        <br/>
        <ViewAnswer answer = {this.state.cards[0].answer}></ViewAnswer>
        <button onClick={this.switchQuestionHandler}>Switch card</button>


      </div>
    )
  }
}


export default App;
