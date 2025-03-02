import React, { useRef } from 'react';
import cartoonImage from '../images/cartoon.png'; // Adjust the path as necessary

const Home = () => {
  const heroRef = useRef(null);

  return (
    <div className="bg-[#F3F2ED] flex items-center justify-between h-screen p-10">
      <div className="w-1/2 h-full flex items-center pl-30 pb-40">
        <div ref={heroRef} className="font-bold">
          <h1 className="text-[10rem] text-[#212A37] font-glitar -mt-10">Hello</h1>
          <p className="text-2xl text-[#212A37]  font-serif">I am a passionate and creative undergraduate with a strong enthusiasm for technology and innovation.</p>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <img 
          src={cartoonImage} 
          alt="Cartoon" 
          className="max-w-[80%] h-auto "
        />
      </div>
    </div>
  );
};

export default Home;
