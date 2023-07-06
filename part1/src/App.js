import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}


const Statistics = (props) => {
  if (props.allValues > 0){
    return (
      <>
      <table>
        <tbody>
          <StatisticLine value={props.goodValue} text={props.goodText} />
          <StatisticLine value={props.neutralValue} text={props.neutralText} />
          <StatisticLine value={props.badValue} text={props.badText} />
          <StatisticLine value={props.calculateTotal} text={props.totalText} />
          <StatisticLine value={props.calculateAverage} text={props.averageText} />
          <StatisticLine value={props.calculatePositive} text={props.positiveText} />
        </tbody>
      </table>
      </>
    )
  } else {
    return (
      <div>No Feedback Given</div>
    )
  }
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

  // Calculate the average feedback
  const calculateAverage = () => {
    const totalFeedbacks = good + neutral + bad;
    const sumFeedbacks = good - bad;  // neutral feedback is 0 so no need to include it

    // Round to two decimals
    const roundedAverage = Math.round((sumFeedbacks / totalFeedbacks)*100)/100

    return totalFeedbacks ? roundedAverage : 0;
  }

  // Calculate the percentage of positive feedback
const calculatePositive = () => {
  const totalFeedbacks = good + neutral + bad;
  const percentagePositive = (good / totalFeedbacks) * 100;
  
  // Use Math.round() to round to the nearest whole number
  const roundedPercentage = Math.round(percentagePositive);
  
  return totalFeedbacks ? `${roundedPercentage}%` : '0%';
}

// Calculate the feedback total
const calculateTotal = () => {
  return good + neutral + bad;
}



  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={goodFeedback} text="Good Feeback!"/>
      <Button handleClick={neutralFeedback} text="Neutral Feedback!"/>
      <Button handleClick={badFeedback} text="Bad Feedback!"/>
      <h2>Statistics</h2>
      <Statistics calculatePositive={calculatePositive()} positiveText="Percentage Positive Feedback" calculateAverage={calculateAverage()} averageText="Average Feedback" badValue={bad} badText="Bad Feedback Count" neutralValue={neutral} neutralText="Neutral Feedback Count" goodValue={good} goodText="Good Feedback Count" calculateTotal={calculateTotal()} totalText="Total Feedback" allValues={good + neutral + bad}/>
    </div>
  )
}

export default App