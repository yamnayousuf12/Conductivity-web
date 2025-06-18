
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "HR Consultancy",
      description:
        "Our HR consultancy services help businesses optimize their human resources through strategic planning and expert advice.",
      image: "/hrs.webp",
    },
    {
      title: "Career Coaching",
      description:
        "We provide personalized career coaching to help professionals identify and achieve their career goals.",
      image: "/cc.webp",
    },
    {
      title: "Workforce Solutions",
      description:
        "Our workforce solutions include recruitment, talent management, and organizational development services tailored to your business needs.",
      image: "/ws.webp",
    },
  ];

  return (
    <section className="py-12 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-Blue font-bold"
      >
        SERVICES
      </motion.h2>

      {/* Animated Underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-16 h-1 bg-[#d67979] my-4 mx-auto"
      ></motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
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
            <h3 className="font-bold mt-6 text-Red text-xl">{service.title}</h3>
            <p className="mt-2 text-gray">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
