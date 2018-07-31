import React from 'react'
import './ViewCard.css'

const viewcard = (props) => {
  return(
    <div>
      <div className = 'ViewQuestion'>

          <p onClick = {props.click}> Question </p>
          <p onClick = {props.click} >{props.question}</p>

          <p>{props.children}</p>

      </div>

      <div className = "ViewAnswer">
        <p>Answer </p>

        <p onClick = {props.click}>{props.answer}</p>

        <p>{props.children}</p>
        <input type="text"
        onChange = {props.changed} />
      </div>
    </div>
    )
  }

export default viewcard
