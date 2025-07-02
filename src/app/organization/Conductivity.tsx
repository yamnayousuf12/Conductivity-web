
import Image from "next/image";

export default function Conductivity() {
  return (
    <section className="relative bg-black min-h-screen flex flex-col justify-center items-center text-white overflow-hidden mt-16">
      {/* Background circuit */}
      <Image
        src="/og1.png" // Replace with your actual path
        alt="Circuit background"
        fill
        className="object-cover opacity-80 z-0"
      />

      {/* Overlay content */}
      <div className="z-10 -mt-96 mr-auto justify-start items-start p-4 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-white">C</span>
          <span className="text-Red">σ</span>
           nductivity
        </h1>
        <p className="text-lg md:text-xl font-medium space-x-4">
          <span>Readiness</span>
          <span className="text-gray2">|</span>
          <span>Opportunities</span>
          <span className="text-gray2">|</span>
          <span>Success</span>
        </p>
      </div>
    </section>
  );
}
