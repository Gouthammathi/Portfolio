import React from 'react'
import styled from 'styled-components'
import Name from '../components/Hero/Name'

const Home = () => {
  return (
    <StyledWrapper>
      <div className="content-container">
        <div className="text-content">
          <div className="name-section">
            <h1 className="text-5xl font-bold font-mono text-white mb-4">
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
    align-items: center;
  }

  .text-content {
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-right: 4rem;
  }

  .name-section {
    max-width: 600px;
    width: 100%;

    h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  }

  .image-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-container {
    width: 100%;
    max-width: 500px;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    .text-content {
      padding-right: 2rem;
    }

    .image-container {
      max-width: 450px;
    }
  }

  @media (max-width: 1024px) {
    .content-container {
      padding: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .content-container {
      flex-direction: column;
      gap: 2rem;
      padding: 2rem 1.5rem;
      justify-content: center;
    }

    .text-content {
      padding-right: 0;
      align-items: center;
      text-align: center;
    }

    .image-container {
      max-width: 400px;
    }
  }

  @media (max-width: 480px) {
    .content-container {
      padding: 1.5rem 1rem;
    }

    .image-container {
      max-width: 300px;
    }

    .name-section h1 {
      font-size: 2rem;
    }
  }
`
export default Home
