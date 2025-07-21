import { Navigate, useNavigate } from "react-router-dom";
import api from "../api";
import "../styles/Form.css";
import React, { useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";

// route prop will tell which route to follow either token or register
// method prop will tell what to do either login or register
export default function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          if (name === "Login") navigate("/register/");
          if (name === "Register") navigate("/login/");
        }}
      >
        {name === "Login" ? "Register" : "Login"}
      </button>
      <form onSubmit={handleSubmit} className="form-container">
        <h1>{name}</h1>

        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
        />

        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        {loading && <LoadingIndicator />}
        <button className="form-button" type="submit">
          {name}
        </button>
      </form>
    </>
  );
}
