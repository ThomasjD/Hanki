import React from 'react'
import './ViewCard.css'
const viewcard = (props) => {
  return(
      <div>

          <p onClick = {props.click}> Question </p>
          <p>{props.question}</p>

          <p>{props.children}</p>

      </div>
    )
  }

export default viewcard
