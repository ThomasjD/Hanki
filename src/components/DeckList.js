import React from 'react'
import './ViewCard.css'
const decklist = (props) => {
  return (
    <div>
    <li key = {props.index}>{props.index} {props.deck}</li>
      <button value = {props.index} onClick = {props.click}>Review this Deck</button>
      <p>{props.children}</p>

    </div>
  )
}
export default decklist
