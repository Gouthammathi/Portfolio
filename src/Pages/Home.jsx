import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero/Hero";
import SplineBackground from "../components/SplineBackground";

const Home = () => {
  return (
    <StyledWrapper>
      <SplineBackground />
      <div className="hero-content">
        <Hero />
      </div>
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

  .spline-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    pointer-events: none; /* Allows mouse events to pass through */
  }

  .hero-content * {
    pointer-events: auto; /* Keeps buttons, links clickable */
  }
`;

export default Home;
