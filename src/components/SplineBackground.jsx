import React, { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";

const SplineBackground = () => {
  const splineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!splineRef.current) return;

      const { clientX: x, clientY: y } = event;
      const normalizedX = (x / window.innerWidth - 0.5) * 2; // Normalize X (-1 to 1)
      const normalizedY = (y / window.innerHeight - 0.5) * 2; // Normalize Y (-1 to 1)

      // Find the object inside Spline by name
      const object = splineRef.current.findObjectByName("Particles"); // Change "Particles" to your actual object name

      if (object) {
        object.position.x = normalizedX * 50; // Adjust sensitivity
        object.position.y = normalizedY * 50;
      }
    };

    // Attach mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="spline-background">
      <Spline
        ref={splineRef}
        scene="https://prod.spline.design/muWA8jEsc4Y5bc95/scene.splinecode"
      />
    </div>
  );
};

export default SplineBackground;
