import React, { useEffect, useState } from 'react'
import UserList from '../components/UserList'
// jsonplaceholder.typicode.com 
const UsersApp = () => {
  const [endPoint, setEndPoint] = useState(true)
  
  const handleFetch = () => {
    setEndPoint(!endPoint);
  }
  
  return (
    <>
      <h1>Users List</h1>
      <button onClick={handleFetch}>Click me</button>
      <UserList endpoint={endPoint ? 'users' : 'comments'}/>
      
    </>
  )
}

export default UsersApp