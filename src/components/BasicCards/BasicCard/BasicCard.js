import React from 'react'
import '../../ViewCard.css'

const viewcard = (props) => {
  if(props.showEditCardsNow) {
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
        <button onClick = {props.changedQuestion}> Edit Question</button>
        <button onClick = {props.click}> Delete Card</button>
        <button onClick = {props.changedAnswer}> Edit Answer</button>
      </div>
      )
    }

    else {
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

          <button onClick = {props.changedQuestion}> Edit Question</button>

          <button
            onClick = {props.click}
            >Delete Card</button>

          <button onClick = {props.changedAnswer}> Edit Answer</button>
        </div>
        )
      }
    }
export default viewcard
