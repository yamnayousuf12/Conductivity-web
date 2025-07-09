"use client";
import Image from "next/image";

const services = [
  {
    title: "Research & Information Services",
    logos: ["/DE.png", "/sm.png", "/south.png", "/ya.png"],
  },
  {
    title: "Total HR Outsourcing",
    logos: [
      "/put.png",
      "/omex.png",
      "/gp.png",
     
    ],
  },
  {
    title: "Remote office & EOR Solutions",
    logos: [
      "/dome.png",
      "/vistas.png",
      "/expertise.png",
      "/Rh.png",
      ,
    ],
  },
  {
    title: "Organization Development & Structuring",
    logos: [
      "/nelson.jpg",
      "/bdo.png",
       "/ssgc.png",
      "/Hamdard.jpg",
      "/risk.png",
    ],
  },
  {
    title: "Talent Acquisition",
    logos: [
      "/solutons.png",
      "/the wave.png",
      "/axiom.png",
      "/grant.png",
      "/chase.png",
      "/c.png",
      "/o.png",
    ],
  },
  {
    title: "Training & Development",
    logos: ["/Rh.png",  "/nelson.jpg", "/risk.png"],
    
  },
];

export default function ClientSuccess() {
  return (
    <div className="bg-[#061841] min-h-screen text-white py-16 px-4 md:px-20">
      <h1 className="text-3xl md:text-5xl font-semibold mb-10 text-center">
        Past 11 years, Domestic and Global Client Success
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10  ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-white/20 shadow-md flex flex-col items-center"
          >
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {service.logos.map((logo, i) => (
                <div key={i} className="relative w-24 h-14">
                  <Image
                    src={logo}
                    alt={`Client logo ${i}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-sm mt-7 text-black font-extrabold" >{service.title}</p>
          </div>
        ))}
      </div>

      <div className="text-right mt-10 text-2xl font-bold text-white">
        <h1>C
        <span className="text-Red">σ</span>nductivity
        </h1>
      </div>
    </div>
  );
}
