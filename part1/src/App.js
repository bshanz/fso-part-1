import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const FeedbackCount = (props) => {
  return (
    <div>{props.text}: {props.value}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => {
    console.log("goodfeedback")
    setGood(good + 1)
    console.log(good, "good feedback")
  }

  const neutralFeedback = () => {
    console.log("neutralfeedback")
    setNeutral(neutral + 1)
    console.log(neutral, "neutral feedback")
  }

  const badFeedback = () => {
    console.log("badfeedback")
    setBad(bad + 1)
    console.log(bad, "bad feedback")
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={goodFeedback} text="Good Feeback!"/>
      <Button handleClick={neutralFeedback} text="Neutral Feedback!"/>
      <Button handleClick={badFeedback} text="Bad Feedback!"/>
      <FeedbackCount value={good} text="Good Feedback Count" />
      <FeedbackCount value={neutral} text="Neutral Feedback Count" />
      <FeedbackCount value={bad} text="Bad Feedback Count" />
    </div>
  )
}

export default App