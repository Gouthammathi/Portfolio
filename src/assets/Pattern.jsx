import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    --s: 75px;

    --tree-color: #228b22;
    --ornament-color: #ff0000;
    --snowflake-color: #ffffff;
    --background-color: #000000;

    --_c: var(--tree-color), var(--background-color) 1deg 79deg,
      var(--background-color) 81deg;

    --g0: conic-gradient(from 140deg at 50% 87.5%, var(--_c));
    --g1: conic-gradient(from 140deg at 50% 81.25%, var(--_c));
    --g2: conic-gradient(from 140deg at 50% 75%, var(--_c));

    --g3: conic-gradient(at 10% 20%, #0000 75%, var(--snowflake-color) 0);
    --g4: repeating-conic-gradient(
      from 45deg,
      var(--ornament-color) 0 25%,
      #fff 0 50%
    );

    background:
      var(--g0) 0 calc(var(--s) / -4),
      var(--g0) var(--s) calc(3 * var(--s) / 4),
      var(--g1),
      var(--g1) var(--s) var(--s),
      var(--g2) 0 calc(var(--s) / 4),
      var(--g2) var(--s) calc(5 * var(--s) / 4),
      var(--g3) calc(var(--s) / -10) var(--s),
      var(--g3) calc(9 * var(--s) / 10) calc(2 * var(--s)),
      var(--g4) calc(var(--s) / 2) var(--s);

    background-size: calc(2 * var(--s)) calc(2 * var(--s));
    background-position: center center;
    background-repeat: repeat;
  }`;

export default Pattern;
