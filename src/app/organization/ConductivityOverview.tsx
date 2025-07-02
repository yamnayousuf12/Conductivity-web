// app/components/ConductivityDiagram.tsx
import Image from "next/image";
export default function ConductivityDiagram() {
  return (
    <section className="bg-[#021028] text-white px-6 py-10 md:px-16 md:py-16">
      {/* Top Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Organizations are Circuits <br />
        Process is Conductivity! <span className="text-Red font-bold inline-block text-7xl">σ</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Circle Diagram */}
        <div className="relative flex justify-center">
          <div className="relative w-[300px] md:w-[400px] h-[400px] flex items-center justify-center">
            
            <div className="flex justify-center items-center w-full h-full p-6">
           <Image
             src="/og.png" // Save your graphic here
             alt="Change Management Diagram"
             width={800}
             height={800}
             className="rounded-lg"
           />
         </div>

            
          </div>
        </div>

        {/* Right Side: Description and Table */}
        <div className="flex flex-col justify-center space-y-3 -mt-28">
          <p className="text-white mb-4 text-base leading-relaxed">
            At Conductivity, we see <span className="font-semibold text-Red">‘Organizations’ </span>as<span className="font-semibold text-Red"> purposeful and powerful circuits</span>, that produce ‘work’ of ‘value’ for their clientele. This work is produced by their people who conduct their energies to render results. Based on this philosophy, we help organizations:
          </p>
          <p className="text-white mb-8 text-base leading-relaxed">
            We have a proven track record of bringing our clientele’s organizational performance readiness to the optimum level – by finding out the performance issues and solving them for Superior performance.
          </p>

          {/* Table */}
          <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base ">
            <div >
              <h3 className="font-semibold text-white mb-6 border-b border-gray">Client Concerns</h3>
              <ul className="space-y-10">
                <li className="bg-[#1b2b48] px-4 py-2 rounded">Right Process</li>
                <li className="bg-[#1b2b48] px-4 py-2 rounded">Right People</li>
                <li className="bg-[#1b2b48] px-4 py-2 rounded">Ideas & Risk Management</li>
                <li className="bg-[#1b2b48] px-4 py-2 rounded">Learning & Growth</li>
                <li className="bg-[#1b2b48] px-4 py-2 rounded">Communication & Information</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-6 border-b border-gray ">Conductivity Services</h3>
              <ul className="space-y-3">
                <li className="bg-[#2c3e60] px-4 py-2 rounded">Organization Development & HR Process Consultation</li>
                <li className="bg-[#2c3e60] px-4 py-2 rounded">Talent Identification Services & Succession Development</li>
                <li className="bg-[#2c3e60] px-4 py-2 rounded">Policy Development and Change Management</li>
                <li className="bg-[#2c3e60] px-4 py-2 rounded">Training & Development Services</li>
                <li className="bg-[#2c3e60] px-4 py-2 rounded ">Organizational Communication Consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

