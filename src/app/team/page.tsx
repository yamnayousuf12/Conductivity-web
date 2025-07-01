
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
    name: "Syed Saqib Hassain",
    role: "Facility Manager",
    image: "/saqib.jpg",
   
  },
  {
    id: 2,
    name: "Iqra Sohail",
    role: "Staff & OD Executive",
    image: "/II.jpg",
   
  }, 
  {
    id: 3,
    name: "Syed Muhammad Asad",
    role: "Social Media Executive",
    image: "/asad.jpeg",

  },
  {
    id: 4,
    name: "Wafa Fazal",
    role: "Accounts & Finance Executive",
    image: "/Wafa.jpg",
    
  },
  
  {
    id: 5,
    name: "Tarb Mohsin",
    role: "Software Engineer",
    image: "/TM.jpg",

  },
  // {
  //   id: 6,
  //   name: "Yamna Yousuf",
  //   role: "UI/UX  Dlpveloper",
  //   image: "/YY.jpg",
  //   github: "https://github.com/bobsmith",
  //   linkedin: "https://linkedin.com/in/alice"
  // },
  // {
  //   id: 7,
  //   name: "Rafia",
  //   role: "Research Associate Intern",
  //   image: "/Rif.jpg",
  //   twitter: "https://twitter.com/carla_design",
  
  // },
];




const Team: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#2c2a2a] transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-darkBlue dark:text-white">
          Team Behind Cσnductivity
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray2 dark:bg-gray2 p-6 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-gray transition duration-300 "
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
              <p className="text-Red mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 text-gray dark:text-gray text-xl">
                {member.linkedin && (
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </Link>
                )}
                {member.twitter && (
                  <Link
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </Link>
                )}
                {member.github && (
                  <Link
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </Link>
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