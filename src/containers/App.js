import React, { Component } from 'react'

import './App.css'
import BasicCard from '../components/BasicCards/BasicCard/BasicCard'
import BasicCards from '../components/BasicCards/BasicCards'
//import Navbar from '../components/NavBar'
import DeckList from '../components/DeckList'
import UserProfile from '../components/UserProfile'
import ReviewDeck from '../components/ReviewDeck'

class App extends Component {


  state = {
    username: "Thomas",
    decks:
      {
        adj:
          [
            {id: "2342", question: "efusivo", answer: "effusive, warm, affectionate"},
            {id: "2523", question: "encomiable?", answer: "praisworthy"},
            {id: "3523", question: "viciado?", answer: "foul, unbreathable"},
            {id: "3333", question: "asfixiante", answer: "stiffling, suffocating"},
            {id: "2423", question: "metomentodo", answer: "nosy, ghossipy"}
          ],
        verb:
          [
            {id: "1343", question: "imponerse?", answer: "prevail, win"},
            {id: "1123", question: "precariedad?", answer: "uncertainty"},
            {id: "2433", question: "ponerselo de corbata", answer: "to get somebody razzaled"},
            {id: "3332", question: "marcar a fuego", answer: "written in stone"},
            {id: "2341", question: "me/te/le/nos/os/vos la suda", answer: "I, you, he, we don't give a fuck!"},
          ]
        },
    cards:
      [
          {deck: "adj", id: "2523",  question: "encomiable?", answer: "praisworthy"},
          {deck: "adj", id: "3523", question: "viciado?", answer: "foul, unbreathable"},
          {deck: "verbs", id: "1343", question: "imponerse?", answer: "prevail, win"},
          {deck: "verbs", id: "1123",question: "precariedad?", answer: "uncertainty"}

      ],
     showCards: false,
     showDecks: false,
     showReviewDeck:false,
     showEditQuestion: false,
     showEditAnswer: false,
     reviewDeckName: '',
     reviewcardIndex: null,
     currentdeck: null
       }


  //updating the state
  triggerQuestionHandler = () => {
    const doesShow = this.state.showEditQuestion
    this.setState({showEditQuestion: !doesShow})
  }

  triggerAnswerHandler = () => {
    const doesShow = this.state.showEditAnswer
    this.setState({showEditAnswer: !doesShow})
  }

  editQuestionHandler = (event, id) => {
    const cardIndex = this.state.cards.findIndex( p => {
      return p.id === id
    })

    const card = {
      ...this.state.cards[cardIndex]
    }
    card.question = event.target.value

    const cards = [...this.state.cards]
      cards[cardIndex] = card
      this.setState({cards: cards})
  }

  editAnswerHandler = (event, id) => {
    const cardIndex = this.state.cards.findIndex( p => {
      return p.id === id
    })

    const card = {
      ...this.state.cards[cardIndex]
    }
    card.answer = event.target.value

    const cards = [...this.state.cards]
      cards[cardIndex] = card
      this.setState({cards: cards})
  }

  toggleShowEditCard = () => {
    const doesShow = this.state.showCards
    this.setState({showCards: !doesShow})

  }

  toggleShowDecks = () => {
    const doesShowDecks = this.state.showDecks
    this.setState({showDecks: !doesShowDecks})
  }

  toggleReviewDeck = (event, deckname) => {
    this.setState({reviewDeckName: deckname})
    const doesShowReviewDeck = this.state.showReviewDeck
    this.setState({showReviewDeck: !doesShowReviewDeck})
  }

  toggleShowCards = () => {
    const doesShowCards = this.state.showCards
    this.setState({showCards: !doesShowCards})
  }



  handleBtnShowReviewDeck = (reviewdeck)=>{
    //this.toggleReviewDeck(reviewdeck)
    console.log(reviewdeck)
    console.log(this.state.decks[reviewdeck])
    console.log(this.state.decks[reviewdeck].length)
    let decklength = this.state.decks[reviewdeck].length
    let randomIndex = Math.floor(Math.random() * decklength)
    console.log('random index is ')
    console.log(randomIndex)
    this.setState({currentdeck: reviewdeck})
    this.setState({reviewDeckName: reviewdeck})
    this.setState({reviewcardIndex: randomIndex})

    const doesShowCards = this.state.showReviewDeck
    let doesShowCards2 = this.state.showReviewDeck.toString()
    console.log(`This is doesShowDeck ${doesShowCards2}`)
    this.setState({showReviewDeck: !doesShowCards})
      // console.log(randomIndex)
  }
  nextCardHandler = () => {
    console.log('inside nextCardHandler')
    console.log('this.state.doesShowDeck')

    const doesShowCards = this.state.showReviewDeck
    let doesShowCards2 = this.state.showReviewDeck.toString()
    console.log(`This is doesShowDeck ${doesShowCards2}`)
    this.setState({showReviewDeck: !doesShowCards})
    console.log(`this is showReviewDeck ${this.state.showReviewDeck}`)
    let randomIndex = this.state.reviewcardIndex + 1
    console.log(`this is randomIndex ${randomIndex}`)
    this.setState({reviewcardIndex: randomIndex})
    console.log(`this is reviewcardIndex ${this.state.reviewcardIndex}`)
  }
  // let currentCards = this.decks[reviewdeck]
  // var randomIndex = Math.floor(Math.random() * currentCards.length);
  // console.log(randomIndex)
  // var card = currentCards[randomIndex];
  // if(card === this.state.currentCard){
  //   this.getRandomCard(currentCards)
  // }
  // return(card);



  deleteCardHandler = (cardIndex) => {

    const cards = [...this.state.cards]
    cards.splice(cardIndex, 1)
    this.setState({cards: cards})
  }


  render() {
    let flashcards = null
    let decks = null
    let reviewdeck = null
    let editcard = null


    if (this.state.showReviewDeck){
      flashcards =
          <ReviewDeck
          deck = {this.state.reviewDeckName}
          question = {this.state.decks[this.state.reviewDeckName][this.state.reviewcardIndex].question}
          answer = {this.state.decks[this.state.reviewDeckName][this.state.reviewcardIndex].answer}
          next = {this.handleBtnShowReviewDeck}/>
      }


    if (this.state.showDecks) {
      decks = (
        <div className = "Basic">
        <h2> Deck List</h2>

        {Object.keys(this.state.decks).map((deckname, index) => {
          console.log(deckname)
          console.log(index)

          let rendercontent =
          (
              <DeckList
                index = {index}
                deck = {deckname}
                click = {this.handleBtnShowReviewDeck}
                />

          )
          return rendercontent
        })}
        </div>
      )
      }



    if(this.state.showCards) {
      flashcards =
          <BasicCards
            cards = {this.state.cards}
            clicked = {this.deleteCardHandler}
            questionEdited = {this.editQuestionHandler}
            AnswerEdited = {this.editAnswerHandler}/>
      }


    return (
      <div className = "App">

      <div>
        <button className= "Navbar"
          onClick = {this.toggleShowDecks}>Show Decks
        </button>

        <button className= "Navbar"
          onClick = {this.toggleShowCards}>Edit Cards
        </button>

        <button className= "Navbar"
          onClick = {this.showEditCard}>Extra</button>

        <button className= "Navbar"
          onClick = {this.toggleShowEditCard}>Review Cards
      </button>
      </div>




      <br/>
      <br/>
      <UserProfile
        username = {this.state.username}></UserProfile>
      <br/>
        <h1>Edit Question or Answer in input box</h1>

        <br/>
        {decks}
        {flashcards}
        {reviewdeck}




      </div>
      )
      }
}


export default App
