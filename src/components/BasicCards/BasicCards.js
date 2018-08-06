import React from 'react'
import '../ViewCard.css'
import BasicCard from './BasicCard/BasicCard'

const basiccards = (props) => props.cards.map((card, index)=> {

   return <BasicCard
        click = {() => props.clicked(index)}
        key = {card.id}
        answer = {card.answer}
        question = {card.question}
        changedQuestion={(event) => props.questionEdited(event, card.id)}
        changedAnswer={(event) => props.AnswerEdited(event, card.id)}/>
        
  })



export default basiccards
