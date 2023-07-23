import React from "react";
import { userFetch } from "../hooks/userFetch";

const Users = () => {
  const { data, isLoading, errors } = userFetch(
    "https://jsonplaceholder.typicode.com/user"
  );
  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : errors ? (
        <p>Errors {error}</p>
      ) : (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Users;
