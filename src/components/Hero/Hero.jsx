import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import SplitType from "split-type";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const titles = [
    "Front End Developer",
    "Back End Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "AI Tool Engineer",
  ];

  const titleRef = useRef(null);
  const nameRef = useRef(null);

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
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 text-white w-full">
      {/* Left Side - Text Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 ref={nameRef} className="text-5xl font-bold font-mono mb-4">
          Goutham Mathi
        </h1>
        <div className="text-xl md:text-2xl font-regular mt-4">
          <p className="inline">I am a </p>
          <span className="text-purple-400 font-semibold" ref={titleRef}>
            {titles[0]}
          </span>
        </div>
      </div>

      {/* Right Side - 3D Model */}
    </section>
  );
};

export default Hero;
