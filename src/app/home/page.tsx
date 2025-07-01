// "use client";


// import Image from "next/image";
// import React from "react";
// import Team from "./Hteamt";
// import WhyChooseUs from "./WhyChooseUs";

// const LandingPage = () => {
//   return (
//     <div className="relative w-full min-h-screen bg-white dark:bg-[#2c2a2a] mt-4 transition-colors duration-300">
//       {/* Hero Section */}
//       <div className="flex flex-wrap items-center justify-between p-12">
//         <div className="w-full md:w-1/2 text-center md:text-left space-y-4 ">
//           <h1 className="lg:text-4xl lg:mt-0 text-xl mt-6 font-bold leading-tight text-darkBlue dark:text-white lg:text-center ">
//             C<span className="text-Red">σ</span>nductivity Consultancy (Pvt.) Ltd
//           </h1>
//           <p className="text-Red uppercase lg:text-3xl font-bold lg:text-center">Enabling success for</p>
//           {/* <p className=" text-Red lg:text-center lg:text-lg text-base">for</p> */}

//           <div className="flex justify-center md:justify-start items-center gap-4 mt-6  lg:ml-32">
//             <button className="lg:px-6 lg:py-3 bg-Blue text-white rounded-lg shadow-lg hover:bg-Red transition-colors duration-300 lg:text-base px-3 py-1 text-sm">
//               Organization
//             </button>
//             <span className="text-lg font-bold text-Red">&</span>
//             <button className=" lg:text-base lg:px-6 lg:py-3 px-3 py-1 text-sm bg-Blue text-white rounded-lg shadow-lg hover:bg-Red transition-colors duration-300">
//               Individuals
//             </button>
//           </div>
//         </div>

//         <div className="w-full md:w-1/2 mt-10 md:mt-0">
//           <Image
//             src="/im.jpg"
//             alt="Landing Illustration"
//             width={500}
//             height={500}
//             className="hidden md:flex w-full rounded-bl-full opacity-85"
//           />
//         </div>
//       </div>

//       {/* Sub-sections */}
//       <WhyChooseUs />
//       <Team />
//     </div>
//   );
// };

// export default LandingPage;


// "use client";


// import React from "react";
// import Team from "./Hteamt";
// import WhyChooseUs from "./WhyChooseUs";

// const LandingPage = () => {
//   return (
//     <div className="relative w-full min-h-screen bg-white dark:bg-[#2c2a2a] mt-4 transition-colors duration-300">
//       {/* Hero Section with Background Image */}
//       <div
//         className="relative flex flex-wrap items-center justify-center md:justify-between p-12 bg-[url('/your-background.jpg')] bg-cover bg-center bg-no-repeat min-h-[80vh]"
//       >
//         <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center space-y-4 bg-white/80 dark:bg-black/50 p-6 rounded-lg">
//           <h1 className="lg:text-4xl text-2xl font-bold leading-tight text-darkBlue dark:text-white">
//             C<span className="text-Red">σ</span>nductivity Consultancy (Pvt.) Ltd
//           </h1>
//           <p className="text-Red uppercase text-2xl lg:text-3xl font-bold">Enabling success for</p>

//           <div className="flex justify-center items-center gap-4 mt-4">
//             <button className="px-6 py-3 bg-Blue text-white rounded-lg shadow-lg hover:bg-Red transition-colors duration-300 text-base">
//               Organization
//             </button>
//             <span className="text-lg font-bold text-Red">&</span>
//             <button className="px-6 py-3 bg-Blue text-white rounded-lg shadow-lg hover:bg-Red transition-colors duration-300 text-base">
//               Individuals
//             </button>
//           </div>
//         </div>

        
//       </div>

//       {/* Sub-sections */}
//       <WhyChooseUs />
//       <Team />
//     </div>
//   );
// };

// export default LandingPage;

"use client";

import React from "react";
import Team from "./Hteamt";
import WhyChooseUs from "./WhyChooseUs";

const LandingPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-[#2c2a2a] mt-4 transition-colors duration-300">
      {/* Hero Section with Background Image and Centered Text */}
      <div
        className="relative flex items-center justify-center min-h-[80vh] bg-[url('/your-background.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="w-full md:w-2/3 lg:w-1/2 text-center flex flex-col items-center justify-center bg-white/80 dark:bg-black/50 p-8 rounded-xl space-y-4">
          <h1 className="lg:text-4xl text-2xl font-bold leading-tight text-darkBlue dark:text-white">
            C<span className="text-Red">σ</span>nductivity Consultancy (Pvt.) Ltd
          </h1>
          <p className="text-Red uppercase text-2xl lg:text-3xl font-bold">
            Enabling success for
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <button className="px-6 py-3 bg-Blue text-white rounded-lg shadow-lg hover:bg-Red transition-colors duration-300 text-base">
              Organization
            </button>
            <span className="text-lg font-bold text-Red">&</span>
            <button className="px-6 py-3 bg-Blue text-white rounded-lg shadow-lg hover:bg-Red transition-colors duration-300 text-base">
              Individuals
            </button>
          </div>
        </div>
      </div>

      {/* Sub-sections */}
      <WhyChooseUs />
      <Team />
    </div>
  );
};

export default LandingPage;
