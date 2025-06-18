
'use client';

import React from "react";

const AboutHero = () => {
  return (
    <div className="relative lg:w-full lg:h-screen w-full h-auto">
      {/* Gradient Overlay and Video Background */}
      <div className="absolute inset-0 top-16 bg-gradient-to-b from-white to-transparent dark:from-black/70  z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute lg:w-full lg:h-full  object-cover"
        >
          <source src="/Wes.mp4" type="video/mp4" />
        </video>
      </div>

     
    </div>
  );
};

export default AboutHero;
