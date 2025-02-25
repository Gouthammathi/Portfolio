import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero/Hero";
import Desktop from "../components/Desktop";

const Home = () => {
  return (
    <StyledWrapper>
      <Desktop />
      
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding-top: 60px;
  overflow: hidden;
  color: white;
  background-color: black;
`;

export default Home;
