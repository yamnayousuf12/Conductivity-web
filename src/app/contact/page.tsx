'use client';


import React from 'react';

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#2c2a2a] text-black dark:text-white font-sans transition-colors duration-300 mt-16">
      {/* Banner */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/see.png')" }}
      >
        <div className="text-Blue dark:text-Blue text-3xl md:text-5xl font-bold border-b border-gray dark:border-gray px-8 py-4">
          CONTACT US
        </div>
      </div>

      {/* Info Section */}
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20 py-12 text-center text-sm">
        <div>
          <h3 className="font-semibold mb-1 text-gray dark:text-white">HOURS OF OPERATION</h3>
          <p className="text-gray dark:text-white">9:00 to 17:00, Mon–Fri (Excluding Holidays)</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1 text-gray dark:text-white">PHONE</h3>
          <p className="text-gray dark:text-white">+92 21 34832777</p>
          <p className="text-gray dark:text-white">+92 313 2193503</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1 text-gray dark:text-white">GENERAL INQUIRIES</h3>
          <p>
            <a
              href="https://conductivity.com.pk/"
              className="text-Blue dark:text-white hover:underline"
            >
             mfbaig@conductivity.com.pk
            </a>
          </p>
          <p>
            <a
              href="mailto:info@conductivity.com.pk"
              className="text-Blue dark:text-white hover:underline"
            >
              info@conductivity.com.pk
            </a>
          </p>
          <p>
            <a
              href="mailto:info@conductivity.com.pk"
              className="text-Blue dark:text-white hover:underline"
            >
              careers@conductivity.com.pk
            </a>
          </p>
        </div>
      </div>

      {/* Message */}
      <div className="text-center px-6 md:px-40 text-sm mb-10">
        <p className="mb-2 font-semibold text-gray dark:text-white">
          “The fastest way to solve a problem is often by making it easy for customers to find answers on their own. Investing in a help center and making it easily accessible is a great way to make this happen,”
        </p>
        <p className="mb-2 font-bold text-Red dark:text-Red">says Mirza Faizan Baig</p>
      </div>
    </div>
  );
};

export default ContactUs;
