import { useState } from 'react'

const Button = (props) => {
  
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  

  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])
   
  const [selected, setSelected] = useState(0)

  const handleClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    console.log(random)
    setSelected(random)
  }

  const increasePoints = () =>{
    // make copy of points array
    const copy = [...points]
    // update the proper one by one
    copy[selected] += 1
    // set new state of points array
    setPoints(copy)
  }

  // Get the highest-vote anecdote
  const highestVoteIndex = points.reduce((maxIndex, currentNumber, currentIndex, array) => {
    return currentNumber > array[maxIndex] ? currentIndex : maxIndex;
}, 0);

console.log(highestVoteIndex)

  return (
    <div>
      <h1>Anecdotes</h1>
      {anecdotes[selected]}
      <Button handleClick={handleClick} text="Generate Anecdote" />
      <Button handleClick={increasePoints} text="Vote"  />
      <h4>Votes for this anecdote: {points[selected]}</h4>
      <h3>Highest voted anecdote:</h3>
      <div>{anecdotes[highestVoteIndex]}</div>
    </div>
  )
}

export default App
