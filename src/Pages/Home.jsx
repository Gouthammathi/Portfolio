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
    height: calc(100vh - 60px);
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .text-content {
    flex: 1;
    display: flex;
    align-items: center;
    padding-right: 2rem;
  }

  .name-section {
    max-width: 600px;
  }

  .image-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-container {
    width: 80%;
    max-width: 500px;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 20px;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .content-container {
      flex-direction: column;
      padding: 2rem;
    }

    .text-content {
      padding-right: 0;
      padding-bottom: 2rem;
    }

    .image-container {
      width: 100%;
      max-width: 300px;
    }
  }
`
export default Home
