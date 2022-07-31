import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import Signin from "./Signin";
import { useHistory } from "react-router-dom";

//on clicking the signin button render the signin component

//create a function for clicking the signin button and pushnig to the signin component

const Header = () => {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signin button clicked");
    //push to the signin component
    history.push("/login");
  };
  return (
    <HeaderWrapper>
      <Nav>
        {/* //using material UI core and icons use signin and home and avatar  */}
        <NavLink to="/">
          {/* style the home icon */}
          <HomeIcon style={{ height: "70px", width: "70px", margin: "20px" }} />
        </NavLink>
        <Center>EMS System</Center>
        <NavLink to="/login">
          {/* create a button for signin */}
          {/*  */}
          <Button onClick={handleSubmit}>Signin</Button>
        </NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: gray;
  font-size: 25px;
  font-weight: bold;
`;
const Center = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Nav = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 50px;
  a {
    text-decoration: italic;
    color: white;
  }
`;
const Button = styled.button`
  background-color: darkgray;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  height: 50px;
  width: 150px;
  border: none;
  margin: 20px;
  &:hover {
    background-color: lightgray;
    color: white;
    font-size: 30px;
  }
`;

export default Header;
