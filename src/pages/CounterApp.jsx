// Use State
import React, { useState } from 'react'

const CounterApp = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = (e) =>{
    setCounter(counter+1)
  }

  return (
    <>
      <h2>Contador:</h2>
      <p>{counter}</p>
      <button onClick={(e)=>handleClick(e)}>Add 1</button>

    </>
  )
}

export default CounterApp