// pages/individuals.tsx
"use client";

import React from "react";
import Link from "next/link";

const Individuals = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#2c2a2a] text-darkBlue dark:text-white">
      {/* Hero Section */}
      <div className="bg-[url('/your-individuals-bg.jpg')] bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center justify-center text-center px-4">
        <div className="bg-white/80 dark:bg-black/50 p-8 rounded-lg max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Empowering Individuals to Succeed
          </h1>
          <p className="text-lg">
            Personalized guidance and career support tailored to your goals.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-6 max-w-5xl mx-auto space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Career Counseling & Coaching</li>
            <li>CV & Profile Optimization</li>
            <li>Job Interview Preparation</li>
            <li>Skill Development Workshops</li>
            <li>Ongoing Job Support Services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="mb-4">
            Whether you&apos;re a fresh graduate or a mid-career professional, we&apos;re here to help you unlock your full potential.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-Blue text-white rounded-lg hover:bg-Red transition-colors duration-300"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Individuals;
