

'use client';
import { useState, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const images = [
  { src: "/2GIF.gif", thumbnail: "/2G.jpg" },
  { src: "/7gif.gif", thumbnail: "/7.png" },
  { src: "/job.gif", thumbnail: "/job.png" },
  // { src: "/job2.gif", thumbnail: "/job.png" },
  
];

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const darkMode = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentIndex(newIndex),

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerMode: false },
      },
    ],

    appendDots: (dots: React.ReactNode) => (
      <div className="dots-wrapper">
        <ul className="dotsContainer  flex justify-center space-x-2">{dots}</ul>
      </div>
    ),

    customPaging: (i: number) => (
      <div
        className={`dot ${currentIndex === i ? "dot-active" : "dot-inactive"}
        }`}
      />
    ),
  };

  return (
    <div className="relative lg:w-full lg:py-8 lg:px-4 lg:mt-6 mt-16 bg-white dark:bg-black transition-colors duration-300 lg:min-h-screen  flex flex-col items-center justify-center text-white dark:text-gray-300 w-full h-48">
      {/* Background Image Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20 dark:opacity-30"
          style={{ backgroundImage: `url(${images[currentIndex].src})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

      
       <div className="lg:relative lg:z-10 lg:mt-96 mt-24 w-10/12 sm:w-4/5 md:w-3/4 lg:w-2/3 ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`px-2 transition-transform duration-400 ${currentIndex === index ? "transform -translate-y-8" : ""}`}
            >
              <div className="lg:flex lg:justify-center hidden
               ">
              <Image
                src={image.thumbnail}
                alt={image.thumbnail}
                width={200}
                height={300}
                className=" object-cover rounded-lg cursor-pointer transition-all shadow-lg lg:mt-20  hover:scale-105  "
              />
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
