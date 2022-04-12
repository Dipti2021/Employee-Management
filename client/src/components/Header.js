import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import Employees from "../components/employees/Employees";

const Header = () => {
  // const [employees, setEmployees] = useContext(Employees);
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/employees">Know More...</NavLink>
        {/* <NavLink to="/showemployees">Show Employees</NavLink> */}

        <NavLink to="/login">Login</NavLink>
        {/* <Employees /> */}
      </Nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  background-color: gray;
  font-size: 25px;
  font-weight: bold;
`;

const Nav = styled.div`
  width: 100%;
  height: 50px;
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

export default Header;
