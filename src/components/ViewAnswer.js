import React from 'react'
import './ViewCard.css'

const viewanswer = (props) => {
  return (
    <div>
      <p onClick = {props.click}>Answer </p>

      <p>{props.answer}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default viewanswer
