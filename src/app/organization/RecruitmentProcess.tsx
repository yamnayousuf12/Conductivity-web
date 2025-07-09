import React from "react";
import Image from "next/image";

// const RecruitmentProcess: React.FC = () => {
//   return (
//     <div className="bg-darkBlue text-white min-h-screen flex flex-col md:flex-row p-6 md:p-12 gap-12">
//       {/* LEFT SIDE – Flowchart */}
//       <div className="flex-1 flex flex-col items-center justify-center gap-3">
//         <h2 className="text-3xl font-semibold text-white mb-6 text-center">Our Process is Different</h2>
//         <div className="flex flex-col gap-3 text-center max-w-xs">
//           {[
//             "Talent Sourcing",
//             "Candidate Screening",
//             "Technical Interviews",
//             "HR Interviews / Job-Profile Matching",
//             "Personality Testing",
//             "Skills Assessment",
//           ].map((step, index) => (
//             <div
//               key={index}
//               className="bg-[#3e4a7a] px-4 py-3 rounded text-sm font-medium shadow-md"
//             >
//               {step}
//             </div>
//           ))}
//         </div>
//         {/* Labels around process */}
//         <div className="text-xs text-lightBlue mt-6 text-center space-y-2">
//           <div>← Organization’s Value Delivery Model</div>
//           <div>↓ Line managers’ expectations</div>
//           <div>→ Job Description & Specification</div>
//           <div>↑ Facilitate interviews & Onboarding</div>
//         </div>
//       </div>

//       {/* RIGHT SIDE – Textual Content */}
//       <div className="flex-1 text-lightBlue space-y-6 text-sm md:text-base">
//         <p>
//           With high class recruiters in our team having global and domestic exposure of more than 21 years, we <span className="italic">understand</span> how to deliver what our clients expect.
//         </p>
//         <p>
//           We consider <span className="font-semibold text-white">Job Description</span>, Team and Organizational Culture against candidate maturity.
//         </p>
//         <p>
//           In addition, we use <span className="text-white font-semibold">AI</span> to provide impartial evaluation for candidates.
//         </p>
//         <div className="text-white font-bold text-xl pt-4">
//           <span className="text-customBlue">C</span>
//           onductiv
//           <span className="text-customRed">i</span>
//           ty
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecruitmentProcess;

// components/ProcessFlow.tsx

export default function ProcessFlow() {
  return (
    <div className="bg-[#011332] text-white min-h-screen flex flex-col md:flex-row p-6 md:p-12 font-sans">
      {/* Left: Flowchart */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
      
      <Image
        src="/process.png"
        alt="Our Process Flowchart"
        width={600}
        height={400}
        className="w-full h-auto rounded-lg shadow-lg"
        priority
      />

    </div>
 {/* Right: Description */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 text-gray-300 md:pl-12 flex flex-col justify-center">
        <p className="mb-6 text-base md:text-lg leading-relaxed">
          With high class recruiters in our team having global and domestic exposure of more than 21 years, we <span className="italic">understand</span> how to deliver what our clients expect.
        </p>
        <p className="mb-6 text-base md:text-lg leading-relaxed">
          We consider <strong>Job Description</strong>, Team and Organizational Culture against candidate maturity.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          In addition, we use <strong>AI</strong> to provide impartial evaluation for candidates.
        </p>
        <div className="mt-72 font-bold text-3xl ml-72">
           <h1 className="text-white">C
            <span className="text-Red">σ</span>nductivity</h1></div>
      </div>
    </div>
  );
}
