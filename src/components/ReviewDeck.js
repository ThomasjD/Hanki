import React from 'react'
import './ViewCard.css'

const viewcard = (props) => {

    return(
      <div>
        <div className = 'ViewQuestion'>

            <p>Question</p>
            <p onClick={props.click}>{props.question}</p>


        </div>

        <div className = 'ViewAnswer'>
          <p>Answer</p>
          <p>{props.answer}</p>
            <p>{props.children}</p>
        </div>
        <button onClick = {() => props.next(props.deck)}>Next Card</button>

        <button onClick= {props.back}>Go Back</button>
      </div>
      )

  }
export default viewcard
