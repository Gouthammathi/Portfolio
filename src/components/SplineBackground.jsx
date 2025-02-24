import React, { useRef, useEffect, Suspense } from "react";
import Spline from "@splinetool/react-spline";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
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

// Load the Avatar Model
const Avatar = () => {
  const { scene } = useGLTF("/avatar.glb");
  const avatarRef = useRef();

  // Continuous Rotation Effect
  useFrame(() => {
    if (avatarRef.current) {
      avatarRef.current.rotation.y += 0.005; // Controls rotation speed
    }
  });

  return <primitive object={scene} ref={avatarRef} scale={1} position={[0, -1.2, 0]} />;
};

const SplineBackground = () => {
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

  return (
    <StyledContainer>
      {/* Background Spline Scene */}
      <ErrorBoundary>
        <Spline
          className="spline-viewer"
          scene="https://prod.spline.design/muWA8jEsc4Y5bc95/scene.splinecode"
        />
      </ErrorBoundary>

      {/* 3D Avatar */}
      <div className="avatar-container">
        <Canvas camera={{ position: [0, 5, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Avatar />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Overlayed Text */}
      <div className="text-overlay">
        <h1 ref={nameRef} className="name">Goutham Mathi</h1>
        <div className="title">
          <p className="inline">I am a </p>
          <span className="highlight" ref={titleRef}>{titles[0]}</span>
        </div>
      </div>
    </StyledContainer>
  );
};

// Error Boundary to prevent crashes
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong loading the 3D model.</h2>;
    }
    return this.props.children;
  }
}

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

  .avatar-container {
    position: absolute;
    top: 50%;
    left: 10%; /* Positioning model to left-center */
    transform: translateY(-50%);
    width: 35%;
    height: 80%;
    z-index: 1;
  }

  .text-overlay {
    position: absolute;
    top: 20%;
    right: 5%;
    text-align: left;
    color: white;
    z-index: 2;
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
      top: 10%;
      right: 5%;
    }

    .name {
      font-size: 2.5rem;
    }

    .title {
      font-size: 1.2rem;
    }

    .avatar-container {
      width: 60%;
      left: 5%;
    }
  }
`;

export default SplineBackground;
