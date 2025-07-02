
import Image from "next/image";

export default function TalentBanner() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute top-20 left-10 text-white space-y-4">
        <h2 className="text-4xl text-gray font-semibold">Finding</h2>
        <h2 className="text-4xl text-gray font-semibold">The right</h2>
        <h2 className="text-4xl text-gray font-semibold">Talent is</h2>
        <h2 className="text-4xl text-Red font-bold">Challenging</h2>

        <div className="mt-16">
          <h2 className="text-5xl text-Blue font-bold">We are ready!</h2>
          <p className="text-2xl text-white italic">
            Talent Identification <br /> Services
          </p>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-1/2 h-full">
        <Image
          src="/WPS.png"
          alt="Digital brain"
          layout="fill"
          objectFit="contain"
          className="opacity-100"
        />
      </div>
    </div>
  );
}
