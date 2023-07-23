import React, {useEffect, useState} from 'react'
const UserList = ({endpoint}) => {
  const [users, setUsers] = useState([])

  const fetchUsers = () => {
    return fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error:', error));
  }

  useEffect(() => {
    fetchUsers()
  }, [endpoint])

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

export default UserList