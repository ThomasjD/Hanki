import React, { Component } from 'react'

import './App.css'
import ViewQuestion from './components/ViewQuestion'
import ViewAnswer from './components/ViewAnswer'



class App extends Component {


  state = {
        cards: [
            {question: "What is a js object?",
            answer: "Anything you want it to be baby!"},
            {question: "2 arguments reducer() takes in?",
            answer: "1. value from previous/initial 2. callback()"}
          ],
         showCard: false
       }

  //realQuestionHandler = (event) => {
  realQuestionHandler = (newshit) => {
    console.log('Was clicked')
    this.setState({
      cards: [
          {question: "What is a js object?",
          //answer: "An object is a collection of properties"},
          //answer: event.target.value},
          answer: newshit},
          {question: "2 arguments reducer() takes in?",
          answer: "1. value from previous/initial 2. callback()"}
          ]
    })
  }


  realQuestionHandlerInput = (event) => {
    console.log('Was clicked')
    this.setState({
      cards: [
          {question: "What is a js object?",
          //answer: "An object is a collection of properties"},
          //answer: event.target.value},
          answer: event.target.value},
          {question: "2 arguments reducer() takes in?",
          answer: "1. value from previous/initial 2. callback()"}
        ]
    })
  }

  switchQuestionHandler = () => {

  }

  answerHandler = () => {

  }

  toggleShowCard = () => {
    const doesShow = this.state.showCard
    this.setState({showCard: !doesShow})

  }

deleteCardHandler = () => {

}

  render() {
    let flashcards = null

    if(this.state.showCard) {
      flashcards =  (
      ///=== true ?
      <div>
       {this.state.cards.map((card, index)=> {
         let rendercontent =
          (
           <div>

             <ViewQuestion
               question = {card.question}
               click={this.deleteCardHandler}>
             </ViewQuestion>

             <button
               className = 'Style1'
               click={this.deleteCardHandler}>>Delete Question
             </button>

             <br/>
             <p>--------------------------------</p>
             <br/>

             <ViewAnswer
               answer = {card.answer}
               click={this.deleteCardHandler}>>Delete Question
               changed = {this.realQuestionHandlerInput}>this input will change
             </ViewAnswer>

           <br/>
           <p>********************************</p>
           </div>
          )
         return rendercontent

       })}
       </div>
     )
   }

       /*
        <ViewQuestion
          question = {this.state.cards[0].question}
          click={this.realQuestionHandler}>
        </ViewQuestion>

        <button
          className = 'Style1'
          onClick={this.answerHandler}>Show Answer
        </button>

        <br/>
        <p>--------------------------------</p>
        <br/>

        <ViewAnswer
          answer = {this.state.cards[0].answer}

          changed = {this.realQuestionHandlerInput}>this input will change
        </ViewAnswer>

      <br/>
      <p>********************************</p>
      <br/>


      <ViewQuestion
        question = {this.state.cards[1].question}
        click={this.realQuestionHandler}>
      </ViewQuestion>

      <button
          className = 'Style1'
          onClick={this.answerHandler}>Show Answer
      </button>

      <br/>
      <p>--------------------------------</p>
      <br/>


      <ViewAnswer
        answer = {this.state.cards[1].answer}
        className = 'Style1'
        changed = {this.realQuestionHandlerInput}> this input will change
      </ViewAnswer>

      <br/>
      <p>********************************</p>
      <br/>
      </div>
      )
    }
    */

    return (
      <div className = "App">

        <button onClick = {this.toggleShowCard}>Show Card</button>
        <br/>

        {flashcards}
          <button className="Style1"
                  onClick = {this.switchQuestionHandler}>Go Back
          </button>

          <button className="RealAnswer"
                  onClick  = {() => this.realQuestionHandler('Its a bucket of shit!')}>See the 'real' answer
          </button>

          <button className = "Style1"
                  onClick = {this.switchQuestionHandler}>Next Card
           </button>

      </div>
      )
  }
}


export default App
