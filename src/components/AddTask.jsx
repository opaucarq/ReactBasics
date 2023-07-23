import React, { useState } from 'react'

const AddTask = ({setArray}) => {
  const [inputValue, setInputValue] = useState('')
  const handleInput = (e) =>{
    setInputValue(e.target.value)
    console.log(inputValue)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {title: inputValue, state: false}
    setArray(value=>([...value,data]))
    setInputValue('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Add task'
          value={inputValue}
          onChange={(e)=>handleInput(e)}/>
      </form>
    </>
  )
}

export default AddTask