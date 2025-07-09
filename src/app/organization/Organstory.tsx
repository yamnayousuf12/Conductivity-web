"use client";
import Image from "next/image";


export default function ConductivityStory() {
  return (
    <div className="relative bg-white text-[#061841]">
      {/* Background image in corner */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/puzzle.png"
          alt="Puzzle Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative z-10 px-6 md:px-20 py-16 space-y-10">
        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold">
          The Conductivity Story
        </h1>

        {/* Boxed Text */}
        <div className="border-2 border-[#13388d] rounded-md p-4 text-lg max-w-4xl text-customBlue">
          <p>
            Pakistan is rich of talent, yet{" "}
            <span className="font-semibold text-[#092a78]">lack of maturity</span>{" "}
            has eclipsed the Pakistan’s shining Human Resource market.
          </p>
          <p className="mt-3 font-medium">Maturity, in terms of</p>
          
        </div>
        
          <ul className="list-disc ml-6">
            <li>workers</li>
            <li>working environment</li>
            <li>talent acquisition partners.</li>
          </ul>

        {/* Bottom 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 text-sm">
          <div className="bg-[#0d376b] text-white p-2 rounded shadow">
            <p>
              In 2014, feeling an urge to showcase Pakistan’s talent and with the
              aim to God-father the developing talent via career development
              initiatives, CEO Mirza Faizan Baig established this company with only
              an idea in head and nothing in hands in terms of resources.
            </p>
          </div>

          <div className="bg-[#0d376b] text-white p-6 rounded shadow">
            <p>
              Today Conductivity has evolved into a private limited company with
              presence in various areas of Pakistan, Middle East and Europe via
              partner companies, and multiple offices in Karachi, Pakistan
            </p>
          </div>

          <div className="bg-[#0d376b] text-white p-6 rounded shadow">
            <p>
              Our aim is to develop talent maturity in Pakistan and help the world
              access, prepare, and sustain top-tier talent through{" "}
              <span className="font-semibold">
                readiness programs and pipeline solutions.
              </span>
            </p>
          </div>
        </div>

       
       
      </div>
    </div>
  );
}
