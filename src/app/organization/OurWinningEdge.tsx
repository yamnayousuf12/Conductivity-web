"use client";

import Image from "next/image";

const WinningEdge = () => {
  return (
    <section className="bg-[#0C1A35] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Winning Edge</h2>
          <p className="text-white/70 mb-4">
            We don’t just fill positions — we align talent with your value delivery model.
          </p>
          <p className="text-white/70 mb-4">
            From role definition to onboarding, every step is tailored to your business context and future needs.
          </p>
          <p className="text-white/70 mb-8">
            Our process integrates manager expectations, strategic assessments, and cultural fit — ensuring each hire
            adds long-term value. It’s not just recruitment.{" "}
            <span className="font-semibold text-white/70">It’s purposeful talent alignment.</span>
          </p>

          {/* Steps */}
          <div className="flex flex-col gap-4 text-white">
            <div className=" w-fit px-6 py-3 border-t-4 border-l-4 border-[#396CAA] ml-80">
              Confirming Client Expectations
            </div>
            <div className="w-fit px-6 py-3 border-t-4 border-l-4 border-[#396CAA] ml-48">
              Live Calibration
            </div>
            <div className="w-fit px-6 py-3 border-t-4 border-l-4 border-[#396CAA] ml-12">
              Providing Talent
            </div>
          </div>
        </div>

        {/* Right Success Stories */}
        <div className="relative border border-yellow p-6 rounded-md">
          <h3 className="text-lg font-semibold mb-4">Engineering</h3>
          <div className="flex items-center gap-4 mb-6">
            <Image src="/solcraft.png" alt="solcraft" width={110} height={50} />
          </div>

          <h3 className="text-lg font-semibold mb-2">Technical Sales</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            <Image src="/saf.png" alt="SAF" width={90} height={40} />
            <Image src="/put.png" alt="Tech Links" width={140} height={30} />
          </div>

          <h3 className="text-lg font-semibold mb-2">Finance & Accounts</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            <Image src="/expertise.png" alt="Expertise" width={90} height={40} />
            <Image src="/Rh.png" alt="RH CPAs" width={90} height={40} />
            <Image src="/grant.png" alt="Grant Thornton" width={90} height={40} />
            <Image src="/axiom.png" alt="Axiomi" width={70} height={40} />
            <Image src="/o.png" alt="Red Circle" width={50} height={50} />
          </div>

          <h3 className="text-base font-semibold mb-2">Information Technology</h3>
          <div className="flex flex-wrap gap-4">
            <Image src="/chase.png" alt="Chase Up" width={90} height={40} />
            <Image src="/risk.png" alt="Risk Associates" width={90} height={40} />
            <Image src="/the wave.png" alt="The Wave" width={70} height={40} />
            <Image src="/Eusopht.png" alt="EUSOPHT" width={90} height={40} />
            <Image src="/omex.png" alt="OMEX" width={90} height={40} />
            <Image src="/solutons.png" alt="Innovative" width={50} height={40} />
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mt-16">Our Success Stories</h2>
    </section>
  );
};

export default WinningEdge;
