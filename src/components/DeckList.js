import React from 'react'
import './ViewCard.css'
const decklist = (props) => {
  return (
    <div>
    <li> {props.deck}</li>
      <button value = {props.key} onClick = {() => props.click(props.deck)}>Review this Deck</button>
      <p>{props.children}</p>

    </div>
  )
}
export default decklist
