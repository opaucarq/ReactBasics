import { useState } from "react";
import { useForm } from "../hooks/useForm";

const Form = () => {
  const initialForm = {
    username: "",
    email: "",
    password: "",
  };
  const { formState, handleChange } = useForm(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  const { username, email, password } = formState;
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="username..."
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="email@example.com"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="password..."
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
