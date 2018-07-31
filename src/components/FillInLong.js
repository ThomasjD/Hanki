import React from 'react'
import './ViewCard.css'

const viewanswer = (props) => {
  return (
    <div className = "ViewAnswer">
      <p>Answer </p>

      <p onClick = {props.click}>{props.answer}</p>

      <p>{props.children}</p>
        <input type="text"
        onChange = {props.changed} />
    </div>
  )
}

export default viewanswer
