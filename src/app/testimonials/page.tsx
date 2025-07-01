

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Zubair Farooqui",
    role: "Director, TL",
    image: "/tl.jpg",
    rating: 5,
    feedback:
      "As far as our satisfaction is concerned, please be assured that we could not have asked for a better consultant who has been patient with us while also guiding us in HR matters. Thank you for your dedication on this project. Surely, Conductivity Career & HR Solutions is the best Career Counselling & HR company in Pakistan and we are glad to have you as our consultant.",
  },
  {
    id: 2,
    name: "Waleed sheikh",
    role: "CEO, Oil industries of Pakistan",
    image: "/ceo.png",
    rating: 5,
    feedback:
      "I couldn’t believe on my eyes, when I saw my updated profile. Never thought of improving my own profile like I do for the companies I work for. I’m glad that I found Conductivity Career & HR Solutions who understands business and the science of Branding. No doubt, Conductivity Career & HR Solutions is one of the leading HR company in Pakistan.",
  },
  {
    id: 3,
    name: "Sataish",
    role: "Recruiter, ICMA",
    image: "/sa.jpg",
    rating: 4,
    feedback:
      "Thank you very much conductivity for deliver the right message in our annual sales conference to our sales team. It is critical to embed the right message for sales team and we are really happy with the way Conductivity Career & HR Solutions did it.",
  },
   {
    id: 4,
    name: "Waqqas Asghar",
    role: "CEO RH CPAs",
    image: "/Waqqas.jpg",
    rating: 4,
    feedback:
      "We are pleased to acknowledge the professional services of Conductivity Consultancy (Pvt.) Ltd., our outsourced HR and payroll service provider for our Karachi-based employees. Over the past few years, we have witnessed significant growth in their capabilities, service quality, and operational maturity.Their team has consistently demonstrated a high level of responsiveness and commitment to resolving issues in a timely and efficient manner. Notably, their enhanced attention to detail and adaptability to evolving requirements have strengthened our confidence in their support.We appreciate their continued efforts in improving service delivery and look forward to a mutually beneficial relationship ahead.",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-white dark:bg-[#2c2a2a] p-4 md:p-6 text-center">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-bold text-3xl md:text-4xl text-Blue dark:text-white mt-10 md:mt-20">
          TESTIMONIALS
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-16 h-1 bg-Red mx-auto my-2"
        ></motion.div>
      </motion.div>

      {/* Swiper Section */}
      <div className="relative mt-8">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // pagination={{ clickable: true }}
          loop={true}
          className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto "
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="w-full p-4 md:p-10"
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={150}
                    height={150}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-2 border-gray dark:border-gray2 mx-auto"
                  />
                </motion.div>

                <div className="flex justify-center mt-2 text-yellow">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div className="relative mt-4 px-4">
                  <FaQuoteLeft className="text-gray dark:text-white text-xl md:text-2xl absolute -left-4 top-2" />
                  <p className="text-base md:text-lg text-gray dark:text-white italic mx-4">
                    {testimonial.feedback}
                  </p>
                  <FaQuoteRight className="text-gray dark:text-white text-xl md:text-2xl absolute -right-4 bottom-2" />
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-16 h-1 bg-Red my-4 mx-auto"
                ></motion.div>

                <h4 className="mt-2 font-bold text-gray dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm font-semibold text-Red dark:text-Red">
                  {testimonial.role}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 text-gray dark:text-gray hover:text-black dark:hover:text-white">
          <FiChevronLeft size={24} />
        </button>
        <button className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 text-gray dark:text-gray hover:text-black dark:hover:text-white">
          <FiChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
