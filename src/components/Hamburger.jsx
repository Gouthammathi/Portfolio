import React from 'react';
import styled from 'styled-components';

const Hamburger = ({ onClick, isOpen }) => {
  return (
    <StyledWrapper data-active={isOpen}>
      <label className="icon-menu" onClick={onClick}>
        <div className="bar bar--1" />
        <div className="bar bar--2" />
        <div className="bar bar--3" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .icon-menu {
    --gap: 5px;
    --height-bar: 3px;
    --pos-y-bar-one: 0;
    --pos-y-bar-three: 0;
    --scale-bar: 1;
    --rotate-bar-one: 0;
    --rotate-bar-three: 0;
    width: 30px;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    cursor: pointer;
    position: relative;
  }

  .bar {
    position: relative;
    height: var(--height-bar);
    width: 100%;
    border-radius: .5rem;
    background-color: white;
    transition: all 0.3s ease;
  }

  .bar--1 {
    top: var(--pos-y-bar-one);
    transform: rotate(var(--rotate-bar-one));
  }

  .bar--2 {
    transform: scaleX(var(--scale-bar));
  }

  .bar--3 {
    bottom: var(--pos-y-bar-three);
    transform: rotate(var(--rotate-bar-three));
  }

  /* Active state when menu is open */
  &[data-active="true"] .icon-menu {
    --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
    --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
    --scale-bar: 0;
    --rotate-bar-one: 45deg;
    --rotate-bar-three: -45deg;
  }
`;

export default Hamburger;
