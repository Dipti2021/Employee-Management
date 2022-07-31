import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "./PageWrapper";
import Header from "./Header";

//Landing Page Component
const LandingPage = () => {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <Heading>Welcome to Dipti's Employee Management System</Heading>

        <Heading2>
          A simple and easy way to manage your employees information.
        </Heading2>
      </Container>
    </PageWrapper>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  color: darkblue;

  font-family: cursive;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  color: darkblue;
  font-family: cursive;
`;

export default LandingPage;
