import React, { Component } from 'react'

import './App.css'
import BasicCard from './components/BasicCard'
import NavBar from './components/NavBar'
import DeckList from './components/DeckList'



class App extends Component {


  state = {
    decks:
      {
        rock:
          [
            {question: "encomiable?", answer: "praisworthy"},
            {question: "viciado?", answer: "foul, unbreathable"}
          ],
        verb:
          [
            {question: "imponerse?", answer: "prevail, win"},
            {question: "precariedad?", answer: "uncertainty"}
          ]
        },
    cards:
      [
          {deck: "adj", question: "encomiable?", answer: "praisworthy"},
          {deck: "adj", question: "viciado?", answer: "foul, unbreathable"},
          {deck: "verbs", question: "imponerse?", answer: "prevail, win"},
          {deck: "verbs", question: "precariedad?", answer: "uncertainty"}
      ],
     showCard: false,
     showDecks: false
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

  toggleShowDecks = () => {
    const doesShowDecks = this.state.showDecks
    this.setState({showDecks: !doesShowDecks})
  }

deleteCardHandler = () => {

}
      //{this.state.decks.map((deck, index) => {
  render() {
    let flashcards = null
    let decks = null

    if (this.state.showDecks) {
      decks = (
        <div className = "Basic">
        <h2> Deck List</h2>

        {Object.keys(this.state.decks).map((deckname) => {
          let rendercontent =
          (

            <div>
              <DeckList deck = {deckname}>
              </DeckList>
            </div>

          )
          return rendercontent
        })}
        </div>
      )
}
    if(this.state.showCard) {
      flashcards =  (
      ///=== true ?
      <div className = "Basic">
       {this.state.cards.map((card, index)=> {
         let rendercontent =
          (
           <div >

             <BasicCard
               question = {card.question}
               click={this.deleteCardHandler}>
             </BasicCard>

             <button
               className = 'Style1'
               click={this.deleteCardHandler}>>Delete Question
             </button>

             <br/>
             <p>--------------------------------</p>
             <br/>

             <BasicCard
               answer = {card.answer}
               click={this.deleteCardHandler}>>Delete Question
               changed = {this.realQuestionHandlerInput}>this input will change
             </BasicCard>

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
      <div >
        <button className= "Navbar" onClick = {this.toggleShowDecks}>Show Decks
        </button>

        <button className= "Navbar" onClick = {this.toggleShowEditCard}>Add
        </button>

        <button className= "Navbar">Search
        </button>

        <button className= "Navbar" onClick = {this.toggleShowLogOut}> Logout
        </button>
      </div>
      <br/>
      <br/>
      <br/>
        <h1 className>Hello I am outside of component</h1>

        <button onClick = {this.toggleShowCard}>Show Card</button>
        <br/>
        {decks}
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
