import React from 'react'
import '../ViewCards.css'
import './BasicCard/BasicCard'

const basiccards = (props) => props.cards.map((card, index)=> {

   return <BasicCard
        click = {() => props.clicked(index)}
        key = {card.id}
        answer = {card.answer}
        question = {card.question}
        changedQuestion={(event) => props.clicked(event, card.id)}
        changedAnswer={(event) => props.clicked(event, card.id)}>
      </BasicCard>

  })



export default basicards
