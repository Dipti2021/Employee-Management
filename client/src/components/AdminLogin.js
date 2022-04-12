import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "./PageWrapper";
import Showemployee from "./employees/Showemployees";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const AdminLoginOnly = () => {
  const [user, setUser] = useState({
    username: "username",
    password: "password",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/login", user)
      .then((res) => {
        console.log(res);
        if (res.data.message === "Admin Logged In") {
          localStorage.setItem("admin", res.data.admin);
          window.location.href = "/employees";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PageWrapper>
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <h1>Admin Login</h1>
          <TextField
            id="username"
            label="Username"
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            required
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
            fullWidth
          />
          <Button type="submit">Login</Button>
        </form>
      </Container>
      <Footer />
    </PageWrapper>
  );
};

export default AdminLoginOnly;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const TextField = styled.input`
  margin: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 1em;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 1em;
`;
