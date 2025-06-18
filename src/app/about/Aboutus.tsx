"use client";
import Image from 'next/image';
import React from 'react';

const clients = [
  { name: 'Lucky Textile Mills', logo: '/lucky.png' },
  { name: 'Nelson Paints', logo: '/nelson.jpg' },
  { name: 'Expertise', logo: '/expertise.jpg' },
  { name: 'Morango', logo: '/morango.jpg' },
  { name: 'SSGC LPG', logo: '/ssgc.jpg' },
  { name: 'Eusopht', logo: '/Eusopht.jpg' },
  { name: 'Baithak School Network', logo: '/school.jpg' },
  { name: 'Beerbal & Co.', logo: '/beerbal.jpg' },
  { name: 'MIA', logo: '/mia.png' },
  { name: 'Unnamed', logo: '/unnamed.jpg' },
  { name: 'omex', logo: '/omex.jpg' },
  { name: 'Hamdard', logo: '/Hamdard.jpg' },
  { name: 'Risk', logo: '/Risk.jpg' },
];

const LatestClients = () => {
  return (
    <section className="py-12 bg-white dark:bg-[#2c2a2a] transition-colors duration-300 -mt-72 lg:mt-0 ">
      <div className="container mx-auto px-4 text-center ">
        <h2 className="text-3xl font-bold text-Blue dark:text-white mb-10">
          Latest Clients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray p-4 shadow hover:shadow-md dark:shadow-graytransition duration-300 rounded"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={100}
                className="w-full h-20 object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestClients;
