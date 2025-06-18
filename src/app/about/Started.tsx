"use client";
import React from "react";
import { motion } from "framer-motion";

const HowItWasStarted = () => {
  return (
    <div className="bg-white min-h-screen p-6 md:p-12">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-Red mb-8"
      >
        How It Was Started
      </motion.h1>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto text-gray space-y-6">
        {/* Opening Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg text-center text-gray"
        >
          “It is amazing how a feeling, an idea, and an effort can trigger such a grand change. 
          You can call it the snowball effect.”
        </motion.p>

        {/* Story Paragraphs */}
        {[
          "The feeling of being stuck and needing guidance.",
          "At the time I registered in BBA-Hons, my focus was clear…. I had to become a successful advertising professional. However, at the end of BBA, due to a change in my aspirations, I was compelled to change my career focus. After 8 career moves in different fields, within a span of 3 years, I received advice from my elder brother to join Human Resource (for which I would remain eternally thankful). With no clear idea of what it was, I got selected in the 2nd interview, where my first mentor actually gave me work, and I got to know what HR is. I was an instant success at work!",
          "This triggered something in me, the feeling I was talking about….. I had the luxury of changing 8 fields as I wasn’t the primary bread-earner of my house, but what about those who didn’t have this luxury? To tell you the truth, Conductivity had been born that day, but I didn’t know what was coming my way.",
          "The feeling triggered the idea that changed everything.",
          "I understood that the best service I could give to people was guidance, and I started giving career guidance services early in the year 2005. I found a course that was being offered for free by Harvard on our company intranet on Career Management. By the time it was 2012, I had already counseled students in thousands and made career efforts for many. By this time, I was very clear that my efforts in career counseling should continue. Never did I dream till that time of forming a company.",
          "In 2003 I went to Saudi Arabia and saw the real value of Pakistani talent as well as the support available to Pakistani expatriates in legal and logistic terms. It engrained the idea that we don’t need individuals for career management; instead, a structured effort needs to be made. Therefore, Conductivity was born, in the year 2014, by the will of Allah.",
          "Conductivity initially was only a career management company, but since this idea was new and people at that time had little understanding of how critically this service was needed, we weren’t able to generate any funds from the main activity, and we still face this challenge. Therefore, I had to add Human Capital Solutions to our portfolio.",
          "To me, Conductivity is my purpose in life and my way of helping my people and mankind. I started this company from a computer, then we were able to secure a room, then an entire office, and now, Alhamdulillah, the company is thriving, for which I am really thankful to Allah.",
          "Conductivity is a social response to disparity, an effort to help people enable themselves to learn better, earn better, and connect better with society. We wish to deliver Conductivity to society as an institution and a silent, effective revolution. – Please pray for us!",
        ].map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-lg leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}

        {/* Author Name */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-right font-semibold text-gray"
        >
          — Mirza Faizan Baig
        </motion.p>
      </div>
    </div>
  );
};

export default HowItWasStarted;
