"use client";
import Image from "next/image";
import Link from "next/link"; // Step 1: Import Link
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Career Management",
      description:
        "At every stage of your career, the right guidance can make all the difference. We offer tailored solutions that help you reach your professional goals with confidence.",
      image: "/hrs.webp",
      link: "/services/career-management", // Step 2: Add a link
    },
    {
      title: "HUMAN RESOURCE MANAGEMENT SERVICES",
      description:
        "Our comprehensive HR services are designed to strengthen your people, processes, and performance, enabling sustainable business growth. We support organizations in building a future-ready workforce with the following solutions.",
      image: "/cc.webp",
      link: "/services/HRServices", // Step 2: Add a link
    },
    {
      title: "Workforce Solutions",
      description:
        "Our workforce solutions include recruitment, talent management, and organizational development services tailored to your business needs.",
      image: "/ws.webp",
      link: "/services/workforce-solutions",
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-[#2c2a2a] text-center mt-12 transition-colors duration-300">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-Blue dark:text-white font-bold"
      >
        SERVICES
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-16 h-1 bg-[#d67979] my-4 mx-auto"
      ></motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray2 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 text-black dark:text-white cursor-pointer"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="w-40 h-40 mx-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={160}
                  height={160}
                  className="w-full h-full rounded-full object-cover shadow-md"
                />
              </motion.div>
              <h3 className="font-bold mt-6 text-Red dark:text-Red text-xl">{service.title}</h3>
              <p className="mt-2 text-gray dark:text-white">{service.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
