import React from 'react'
import './ViewCard.css'
const decklist = (props) => {
  return (
    <div>
      <p onClick = {props.click}>{props.deck}</p>
      <p>{props.children}</p>
    </div>
  )
}
export default decklist
