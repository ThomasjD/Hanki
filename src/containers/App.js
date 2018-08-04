import React, { Component } from 'react'

import './App.css'
import BasicCard from '../components/BasicCards/BasicCards/BasicCard/BasicCard'
import BasicCards from '../components/BasicCards/BasicCards'
import NavBar from './components/NavBar'
import DeckList from '../components/DeckList'
import UserProfile from '../components/UserProfile'


class App extends Component {
/*[
  rock: [
    {}
    {}
  ]


]*/

  state = {
    username: "Thomas",
    decks:
      {
        rock:
          [
            {id: "2523", question: "encomiable?", answer: "praisworthy"},
            {id: "3523", question: "viciado?", answer: "foul, unbreathable"}
          ],
        verb:
          [
            {id: "1343", question: "imponerse?", answer: "prevail, win"},
            {id: "1123", question: "precariedad?", answer: "uncertainty"}
          ]
        },
    cards:
      [
          {deck: "adj", id: "2523",  question: "encomiable?", answer: "praisworthy"},
          {deck: "adj", id: "3523", question: "viciado?", answer: "foul, unbreathable"},
          {deck: "verbs", id: "1343", question: "imponerse?", answer: "prevail, win"},
          {deck: "verbs", id: "1123",question: "precariedad?", answer: "uncertainty"}
      ],
     showCard: false,
     showDecks: false,
     showReviewDeck:false,
     showEditQuestion: false,
     showEditAnswer: false,
     reviewDeckName: 'notathing'
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
    const doesShow = this.state.showCard
    this.setState({showCard: !doesShow})

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
  handleBtnShowReviewDeck = ((reviewdeck)=>{
    this.props.toggleReviewDeck(reviewdeck)

  })

  deleteCardHandler = () => {
  }

  render() {
    let flashcards = null
    let decks = null
    let reviewdeck = null
    let editcard = null

    if (this.state.showDecks) {
      decks = (
        <div className = "Basic">
        <h2> Deck List</h2>

        {Object.keys(this.state.decks).map((deckname, index) => {
          let rendercontent =
          (
              <DeckList
                index = {index}
                deck = {deckname}
                click = {(event) => this.toggleReviewDeck(event, index)}>
              </DeckList>


          )
          return rendercontent
        })}
        </div>
      )
      }

    if(this.state.toggleReviewDeck) {
      reviewdeck =  (
        <div>
          <div className = 'Basic'>

            <BasicCard
              question = {this.state.decks.reviewDeckName[0].question}
              answer = {this.state.decks.reviewDeckName[0].answer}>
            </BasicCard>
          </div>
        </div>
        )
      }

    if(this.state.showCard) {
      flashcards =  (
        <div>
          <BasicCards
          cards = {this.state.cards}
          clicked = {this.deletePersonHandler}
          changedQuestion = (event) =>{this.editQuestionHandler(event, card.id)}
          changedAnswer = (event) =>{this.editAnswerHandler(event, card.id)}/>
        </div>
        )
      }
        /*
        <div className = "Basic">
         {this.state.cards.map((card, index)=> {
           let rendercontent =
            (
             <div >
               <BasicCard
                 key = {card.id}
                 answer = {card.answer}
                 question = {card.question}
                 changedQuestion={(event) => this.editQuestionHandler(event, card.id)}
                 changedAnswer={(event) => this.editAnswerHandler(event, card.id)}>
               </BasicCard>



               <button>Edit Question</button>
               <button type="input">Edit Answer</button>
             </div>
             return rendercontent

           })}
           </div>
             */






    return (
      <div className = "App">
      <div>
        <button className= "Navbar" onClick = {this.toggleShowDecks}>Show Decks
        </button>

        <button className= "Navbar" onClick = {this.toggleShowCards}>Show Cards
        </button>

        <button className= "Navbar" onClick = {this.toggleShowEditCard}>Edit Cards</button>

        <button className= "Navbar">Review Cards
        </button>

        <button className= "Navbar" onClick = {this.toggleShowLogOut}> Logout
        </button>
      </div>
      <br/>
      <br/>
      <UserProfile username = {this.state.username}></UserProfile>
      <br/>
        <h1>Edit Question or Answer in input box</h1>


        <br/>
        {decks}
        {flashcards}
        {reviewdeck}

          <button className="Style1">Go Back
          </button>

          <button className="RealAnswer"
                  onClick  = {() => this.editQuestionHandler('inmunda')}>Edit question
          </button>

          <button className = "Style1">Next Card
           </button>


      </div>
      )
      }
}


export default App
