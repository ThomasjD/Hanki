import React from 'react'
import './ViewCard.css'

const viewcard = (props) => {
  return(
    <div>
      <div className = 'ViewQuestion'>

          <p>Question</p>
          <p>{props.question}</p>

          <input type = "text" onChange = {props.changedQuestion} value = {props.question}/>
      </div>

      <div className = 'ViewAnswer'>
        <p>Answer</p>
        <p>{props.answer}</p>
          <p>{props.children}</p>
        <input type = "text" onChange = {props.changedAnswer} value = {props.answer}/>
      </div>

      <button onClick = {props.youclicked}> you clicked</button>
    </div>
    )
  }

export default viewcard
