import React from 'react'
import './ViewCard.css'

const viewcard = (props) => {
  return(
      <div className = 'ViewQuestion'>

          <p onClick = {props.click}> Question </p>
          <p onClick = {props.click} >{props.question}</p>

          <p>{props.children}</p>

      </div>
    )
  }

export default viewcard
