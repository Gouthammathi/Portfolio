import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: black; /* Change as needed */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  .loader {
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
    box-shadow: 6px -6px 12px #c5c5c5, -6px 6px 12px #ffffff;
    display: inline-flex;
    border: 0px solid #000;
    border-radius: 5px;
  }

  .loader::before,
  .loader::after {
    content: "l o a d i n g";
    font-size: 30px;
    font-family: monospace;
    font-weight: bold;
    line-height: 1em;
    height: 1em;
    width: 1.2ch;
    text-align: center;
    outline: 1px solid #000;
    color: #0000;
    text-shadow: 0 0 0 #000;
    overflow: hidden;
    animation: l4 2s infinite linear;
  }

  .loader::before {
    animation-duration: 4s;
  }

  @keyframes l4 {
    100% {
      text-shadow: 0 var(--t, -10em) 0 #000;
    }
  }
`;

export default Loading;
