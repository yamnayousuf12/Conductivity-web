"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className="w-full md:w-1/2"
        >
          <Image
            src="/about.png"
            alt="About Us"
            width={150} height={50}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.3 }} 
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-[#20126e] mb-4">About Us</h2>

          {/* Animated Underline */}
          <motion.div 
            initial={{ scaleX: 0 }} 
            animate={{ scaleX: 1 }} 
            transition={{ duration: 1, delay: 0.6 }} 
            className="w-16 h-1 bg-[#d67979] my-4 mx-auto ml-4 origin-left"
          ></motion.div>

          <p className="text-gray2 leading-relaxed">
            Conductivity Career & HR Solutions is dedicated to enhancing human capital for businesses and professionals alike. Our platform offers HR consultancy, career services, and workforce solutions tailored to meet the unique needs of our clients. From recruitment and talent management to organizational development and career coaching, we strive to empower individuals and companies to reach their full potential.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;


