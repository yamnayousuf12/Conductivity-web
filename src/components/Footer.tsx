
"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-Blue dark:bg-[#535050] text-white dark:text-white py-10"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <p className="text-sm md:text-base">
            We provide top-notch career guidance, resume building, and online courses.
          </p>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="text-sm md:text-base space-y-2">
            <li><a href="#" className="hover:text-gray dark:hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-gray dark:hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-graydark:hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-gray dark:hover:text-white">Contact</a></li>
          </ul>
        </motion.div>

        {/* Column 3: Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-sm md:text-base">Email: careers@conductivity.com.pk</p>
          <p className="text-sm md:text-base">Phone: +123 456 7890</p>
          <p className="text-sm md:text-base">Address: B-65, Block 2. Gulshan-e-Iqbal, Karachi, Pakistan.</p>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center text-sm md:text-base mt-6"
      >
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
