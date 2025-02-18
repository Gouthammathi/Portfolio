import React from 'react'
import styled from 'styled-components'
import Name from '../components/Hero/Name'

const Home = () => {
  return (
    <StyledWrapper>
      <div className="content-container">
        <div className="text-content">
          <div className="name-section">
            <h1 className="name-title">
              Goutham Mathi
            </h1>
            <Name />
          </div>
        </div>
        <div className="image-content">
          {/* Image placeholder - replace src with your actual image */}
          <div className="image-container">
            <img 
              src="/path-to-your-image.jpg" 
              alt="Goutham Mathi"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding-top: 60px;

  .content-container {
    display: flex;
    min-height: calc(100vh - 60px);
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
    gap: 2rem;
  }

  .text-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .name-section {
    max-width: 600px;
    width: 100%;
  }

  .name-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: bold;
    font-family: 'Mono', monospace;
    color: white;
    margin-bottom: clamp(1rem, 3vw, 2rem);
    line-height: 1.2;
  }

  .image-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .image-container {
    width: 100%;
    max-width: 500px;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: clamp(10px, 2vw, 20px);
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  /* Large screens */
  @media (min-width: 1200px) {
    .content-container {
      padding: 4rem;
    }
  }

  /* Medium screens */
  @media (max-width: 1024px) {
    .content-container {
      padding: 2rem;
      gap: 1.5rem;
    }
  }

  /* Tablet */
  @media (max-width: 768px) {
    .content-container {
      flex-direction: column;
      padding: 2rem 1.5rem;
    }

    .text-content {
      text-align: center;
      padding: 1rem 0;
    }

    .image-container {
      max-width: 400px;
      margin: 0 auto;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    .content-container {
      padding: 1.5rem 1rem;
    }

    .image-container {
      max-width: 300px;
    }
  }
`