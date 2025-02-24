import React, { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import SplitType from "split-type";
import styled from "styled-components";

gsap.registerPlugin(TextPlugin);

const titles = [
  "Front End Developer",
  "Back End Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "AI Tool Engineer",
];

const SplineBackground = () => {
  const splineRef = useRef(null);
  const titleRef = useRef(null);
  const nameRef = useRef(null);

  // Animate Titles (Rotating Text Effect)
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    titles.forEach((title, index) => {
      tl.to(titleRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        delay: index === 0 ? 0 : 1,
      })
        .set(titleRef.current, { text: title })
        .to(titleRef.current, { opacity: 1, scale: 1, duration: 0.5 });
    });

    return () => tl.kill();
  }, []);

  // Animate Name (Split Text Effect)
  useEffect(() => {
    const text = new SplitType(nameRef.current, { types: "chars" });

    gsap.from(text.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  // Mouse Interaction with 3D Model
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!splineRef.current) return;

      const { clientX: x, clientY: y } = event;
      const normalizedX = (x / window.innerWidth - 0.5) * 2;
      const normalizedY = (y / window.innerHeight - 0.5) * 2;

      const object = splineRef.current.findObjectByName("Particles"); // Adjust this name based on your Spline model

      if (object) {
        object.position.x = normalizedX * 50;
        object.position.y = normalizedY * 50;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <StyledContainer>
      {/* 3D Model */}
      <Spline className="spline-viewer" ref={splineRef} scene="https://prod.spline.design/muWA8jEsc4Y5bc95/scene.splinecode" />

      {/* Overlayed Animated Text */}
      <div className="text-overlay">
        <h1 ref={nameRef} className="name">
          Goutham Mathi
        </h1>
        <div className="title">
          <p className="inline">I am a </p>
          <span className="highlight" ref={titleRef}>
            {titles[0]}
          </span>
        </div>
      </div>
    </StyledContainer>
  );
};

// Styled Components
const StyledContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  .spline-viewer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .text-overlay {
    position: absolute;
    top: 200px; /* Adds spacing from the header */
    left: 70px; /* Adjusted to align to top-left */
    text-align: left;
    color: white;
    z-index: 2;
    background: none;
    padding: 10px 20px;
    border-radius: 10px;
    backdrop-filter: none;
  }

  .name {
    font-size: 3rem;
    font-weight: bold;
    font-family: monospace;
  }

  .title {
    font-size: 1.5rem;
    margin-top: 10px;
  }

  .highlight {
    color: #a855f7;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .text-overlay {
      top: 100px; /* Adjusts spacing for smaller screens */
      left: 0px;
    }

    .name {
      font-size: 2.5rem;
    }

    .title {
      font-size: 1.2rem;
    }
  }
`;

export default SplineBackground;
