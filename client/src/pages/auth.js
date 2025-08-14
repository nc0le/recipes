import React, { useState } from "react";
import axios from "axios";

export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a request to your login endpoint
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      // TODO: Save the token and userID
      alert("Login Successful");
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a request to your register endpoint
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now you can login.");
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="reg-username">Username:</label>
          <input type="text" id="reg-username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="reg-password">Password:</label>
          <input type="password" id="reg-password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};