import React from 'react';
import styled from 'styled-components';

const Hireme = () => {
  return (
    <StyledWrapper>
      <button>
        <span className="button_top">Hire me</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  margin-left: 20px;
  
  button {
    --button_radius: 0.75em;
    --button_color: #ffffff;
    --button_outline_color: #000000;
    font-size: 15px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: var(--button_radius);
    background: var(--button_outline_color);
  }

  .button_top {
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.5em 1.25em;
    background: var(--button_color);
    color: #101720;
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
  }

  button:hover .button_top {
    transform: translateY(-0.33em);
  }

  button:active .button_top {
    transform: translateY(0);
  }
`;

export default Hireme; 