"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mirza Faizan Baig",
    role: "CEO",
    image: "/Capture.jpg",
  },
  {
    id: 2,
    name: "Sadaf Faizan",
    role: "Director",
    image: "/sadaf.jpg",
  },
  {
    id: 3,
    name: "Farrukh Amir Beig",
    role: "Director Business Development",
    image: "/farrukh.jpeg",
  },
  {
    id: 4,
    name: "Farukh Hassan",
    role: "Director Research and Development",
    image: "/farukhhh.jpg",
  },
  {
    id: 5,
    name: "Mohammad Majid Khan",
    role: "Director IT",
    image: "/images.png",
  },
];

const Team: React.FC = () => {
  return (
    <section className="lg:py-16 py-80 bg-white dark:bg-[#2c2a2a] transition-colors duration-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-darkBlue dark:text-white ">
          Top Management Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className=" w-56 lg:w-72 bg-gray2 ml-8 lg:ml-0 dark:bg-gray2 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <Image
                width={300}
                height={300}
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-darkBlue dark:text-white">
                {member.name}
              </h3>
              <p className="text-Red dark:text-Red mb-4 font-bold">{member.role}</p>
              <div className="flex justify-center gap-4 text-gray dark:text-gray text-xl">
                {member.linkedin && (
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </Link>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
