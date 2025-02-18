import React from 'react';
import styled from 'styled-components';

const Name = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="loader">
          <p>I am a</p>
          <div className="words">
            <span className="word">Front End Developer</span>
            <span className="word">Back End Developer</span>
            <span className="word">UI/UX Developer</span>
            <span className="word">Graphic Designer</span>
            <span className="word">AI tool Engineer</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    --bg-color: #000000;
    background-color: transparent;
    padding: 0.5rem 0;
  }
  
  .loader {
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: clamp(1.5rem, 3vw, 2rem);
    display: flex;
    align-items: center;
    gap: clamp(0.5rem, 1vw, 1rem);
  }

  .words {
    overflow: hidden;
    position: relative;
    height: clamp(2.5rem, 4vw, 3rem);
  }
  
  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    color: #956afa;
    animation: spin_4991 7s infinite;
    white-space: nowrap;
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  }

  @keyframes spin_4991 {
    10% { transform: translateY(-102%); }
    25% { transform: translateY(-100%); }
    35% { transform: translateY(-202%); }
    50% { transform: translateY(-200%); }
    60% { transform: translateY(-302%); }
    75% { transform: translateY(-300%); }
    85% { transform: translateY(-402%); }
    100% { transform: translateY(-400%); }
  }

  /* Tablet and smaller */
  @media (max-width: 768px) {
    .loader {
      justify-content: center;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    .card {
      padding: 0.25rem 0;
    }
  }
`;

export default Name;
