

import React from "react";

const AboutHero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mt-16 ">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="lg:absolute lg:w-full lg:h-full lg:object-cover"
      >
        <source src="/w.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent dark:from-black/45 top-0" />

     
    </div>
  );
};

export default AboutHero;
