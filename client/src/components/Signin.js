import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "./PageWrapper";
// import Showemployee from "./employees/Showemployees";
import Header from "./Header";

import axios from "axios";

//create a signin component using uaername and password
// signin pageis loaded when the button on the landing page is clicked

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }; //end of handleSubmit
  return (
    <PageWrapper>
      <Header />
      <SigninWrapper>
        <h1>Signin</h1>
        <Form>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </Form>
      </SigninWrapper>
    </PageWrapper>
  );
};

const SigninWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const Form = styled.div`
  width: 600px;
  height: 400px;
  display: flex;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    label {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 10px;
      color: darkblue;
    }
    input {
      width: 100%;
      height: 40px;
      border-radius: 10px;
      border: 1px solid black;
      margin-bottom: 10px;
      padding: 0 10px;
      color: black;
    }
    button {
      background-color: darkblue;
      color: white;
      font-size: 20px;
      margin-top: 50px;
      padding: 20px;
      justify-content: center;
      width: 40%;
      border-radius: 10px;
      align-self: center;
      &:hover {
        background-color: lightblue;
        color: white;
       
    }
  }
`;

export default Signin;
