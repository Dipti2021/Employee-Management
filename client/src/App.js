// import logo from "./logo.svg";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
// import Header from "../src/components/Header";
// import Footer from "../src/components/Footer";
import Employees from "./components/employees/Employees";
import Signin from "./components/Signin";
import Showemployee from "./components/employees/Showemployees";
import EmployeePage from "./components/EmployeePage";
// import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      {/* <GlobalStyles /> */}
      {/* <Header /> */}
      <Switch>
        <Route exact path="/login">
          <Signin />
        </Route>

        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/employees">
          <Employees />
        </Route>
        <Route path="/showemployees">
          <Showemployee />
        </Route>
        <Route path="/employeepage">
          <EmployeePage />
        </Route>
      </Switch>
      {/* <Footer /> */}"
    </BrowserRouter>
  );
}

export default App;
