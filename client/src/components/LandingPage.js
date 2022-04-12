import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "./PageWrapper";
import Header from "./Header";
import Footer from "./Footer";
import { keyframes } from "styled-components";

const LandingPage = () => {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <h1>
          <span>Welcome to Dipti's Employee Management System</span>
        </h1>
        <h2>A simple and easy way to manage your employees information.</h2>
        <Nav>
          <NavLink to="/employees">Know More..</NavLink>
        </Nav>
      </Container>
      <Footer />
    </PageWrapper>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  color: beige;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  &:focus {
    outline: blue;
  }
`;

const Nav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  font-size: 25px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 50px;
  a {
    text-decoration: none;
    color: black;
  }
`;

export default LandingPage;
