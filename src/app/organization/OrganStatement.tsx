// app/page.tsx
import Image from 'next/image';
import {
  FaBriefcase,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaCity,
} from "react-icons/fa";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Mirza Faizan Baig</h1>

          {/* Logos */}
          {/* <div className="flex gap-6 items-center">
            <Image src="/sigma.png" alt="Sigma" width={100} height={100} />
            <Image src="/elite.png" alt="Elite HRSP" width={100} height={100} />
            <Image src="/gov.png" alt="Government" width={100} height={10} />
          </div> */}

          {/* Titles */}
          {/* <div className="flex gap-8 text-xl font-semibold text-Blue">
            <span>CEO</span>
            <span>CTO</span>
            <span>Trainer</span>
          </div> */}
          <div className="flex gap-6 items-center">
  <div className="flex flex-col items-center">
    <Image src="/sigma.png" alt="Sigma" width={100} height={100} />
    <span className="mt-2 text-sm font-medium text-center text-white">CEO</span>
  </div>
  <div className="flex flex-col items-center">
    <Image src="/elite.png" alt="Elite HRSP" width={100} height={100} />
    <span className="mt-2 text-sm font-medium text-center text-white">CTO</span>
  </div>
  <div className="flex flex-col items-center">
    <Image src="/gov.png" alt="Government" width={50} height={50} />
    <span className="mt-2 text-sm font-medium text-center text-white">Trainer</span>
  </div>
</div>

          {/* Image */}
          <Image
            src="/ceo.png"
            alt="ceo"
            width={600}
            height={400}
            className="rounded shadow-lg"
          />

          {/* Services */}
         
          <div className="flex gap-3 text-center justify-center mt-8 flex-wrap">
      <div className="w-40">
        <div className="text-2xl flex justify-center mb-2 ">
          <FaBriefcase />
        </div>
        <p>Career Management</p>
      </div>

      <div className="w-40">
        <div className="text-2xl flex justify-center mb-2">
          <FaChalkboardTeacher />
        </div>
        <p>Consulting & Training</p>
      </div>

      <div className="w-40">
        <div className="text-2xl flex justify-center mb-2 ">
          <FaClipboardCheck />
        </div>
        <p>Due Diligence</p>
      </div>

      <div className="w-40">
        <div className="text-2xl flex justify-center mb-2 ">
          <FaCity />
        </div>
        <p>Socio Economic Projects</p>
      </div>
    </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6 text-sm md:text-base">
          {/* Experience */}
         <div className="max-w-md border border-white rounded">
             <h1 className="text-2xl font-bold mb-4">Experience</h1>
      <table className="w-full text-center text-white">
        
        <thead className="bg-gray2">
            
          <tr>
            <th className="border border-white px-4 py-2 font-semibold">Trainer</th>
            <th className="border border-white px-4 py-2 font-semibold">OD & HR Practitioner</th>
            <th className="border border-white px-4 py-2 font-semibold">Total</th>
          </tr>
        </thead>
        <tbody className="bg-black">
          <tr>
            <td className="border border-white px-4 py-2">7 years</td>
            <td className="border border-white px-4 py-2">21 years</td>
            <td className="border border-white px-4 py-2">25 years</td>
          </tr>
        </tbody>
      </table>
    </div>

         

         

          <div className="text-sm text-white space-y-10">

      {/* Current Organizations */}
      <div>
       
        <table className="w-full border border-white text-center">
          <thead className="bg-gray2">
            <tr>
              <th className="border border-white px-2 py-1">Current Organization</th>
              <th className="border border-white px-2 py-1">Association</th>
              <th className="border border-white px-2 py-1">Locale</th>
              <th className="border border-white px-2 py-1">Nature of Work</th>
              <th className="border border-white px-2 py-1">% of Career</th>
            </tr>
          </thead>
          <tbody className="bg-black">
            <tr>
              <td className="border border-white px-2 py-1">Conductivity Pvt Ltd / LLP</td>
              <td className="border border-white px-2 py-1">Consulting</td>
              <td className="border border-white px-2 py-1">Pakistan / UK</td>
              <td className="border border-white px-2 py-1">Hybrid</td>
              <td className="border border-white px-2 py-1">8.74%</td>
            </tr>
            <tr>
              <td className="border border-white px-2 py-1">Elite HRSP Pvt Ltd</td>
              <td className="border border-white px-2 py-1">Consulting</td>
              <td className="border border-white px-2 py-1">Pakistan</td>
              <td className="border border-white px-2 py-1">Project Based</td>
              <td className="border border-white px-2 py-1">33.86%</td>
            </tr>
            <tr>
              <td className="border border-white px-2 py-1">Pakistan Institute of Management</td>
              <td className="border border-white px-2 py-1">Adj. Faculty</td>
              <td className="border border-white px-2 py-1">Pakistan</td>
              <td className="border border-white px-2 py-1">Task Based</td>
              <td className="border border-white px-2 py-1">57.40%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Organizations */}
      <div>
        
        <table className="w-full border border-white text-center">
          <thead className="bg-gray2">
            <tr>
              <th className="border border-white px-2 py-1">Organizations</th>
              <th className="border border-white px-2 py-1">Nature of Business</th>
              <th className="border border-white px-2 py-1">Locale</th>
              <th className="border border-white px-2 py-1">Years</th>
            </tr>
          </thead>
          <tbody className="bg-black">
            <tr>
              <td className="border border-white px-2 py-1">Deloitte Yousuf Adil</td>
              <td className="border border-white px-2 py-1">Consulting</td>
              <td className="border border-white px-2 py-1">Pakistan</td>
              <td className="border border-white px-2 py-1">10.79 yrs</td>
            </tr>
            <tr>
              <td className="border border-white px-2 py-1">Conductivity</td>
              <td className="border border-white px-2 py-1">Consulting</td>
              <td className="border border-white px-2 py-1">Pakistan</td>
              <td className="border border-white px-2 py-1">5.33 yrs</td>
            </tr>
            <tr>
              <td className="border border-white px-2 py-1">ThalNova Power Thar (Pvt.) Ltd.-(TN)
              </td>
              <td className="border border-white px-2 py-1">Power Sector</td>
              <td className="border border-white px-2 py-1">Pakistan</td>
              <td className="border border-white px-2 py-1">2.18 yrs</td>
            </tr>
            <tr>
              <td className="border border-white px-2 py-1">Battyoor Holding Company BHC</td>
              <td className="border border-white px-2 py-1">Conglomerate</td>
              <td className="border border-white px-2 py-1">KSA</td>
              <td className="border border-white px-2 py-1">1.46 yrs</td>
            </tr>
            <tr>
              <td className="border border-white px-2 py-1">White Nile Company Ltd. WN - KSA</td>
              <td className="border border-white px-2 py-1">Engineering</td>
              <td className="border border-white px-2 py-1">KSA</td>
              <td className="border border-white px-2 py-1">0.30 yrs</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Assignments */}
      <div>
        <h2 className="bg-gray2 font-bold px-2 py-1 rounded-t">Assignments(Total: 50)</h2>
        <table className="w-full border border-white text-left">
          <tbody className="bg-black">
            {[
              ["Career Development", 3],
              ["Company Restructuring & Transformation", 4],
              ["HR Audit", 9],
              ["Policies and Procedures", 3],
              ["Staff Rationalization", 2],
              ["Training & Development", 12],
              ["Training Need Analysis", 1],
              ["Recruitment & International Mobility", 11],
              ["HR Advisory", 5],
            ].map(([title, count], i) => (
              <tr key={i}>
                <td className="border border-white px-2 py-1 w-3/4">{title}</td>
                <td className="border border-white px-2 py-1 text-center">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Qualification */}
      <div>
        
        <table className="w-full border border-white text-center">
          <thead className="bg-gray">
            <tr>
              <th className="border border-white px-2 py-1">Qualification</th>
              <th className="border border-white px-2 py-1">Institution</th>
              <th className="border border-white px-2 py-1">Year</th>
            </tr>
          </thead>
          <tbody className="bg-black">
            <tr>
              <td className="border border-white px-2 py-1">MPhil - Governance</td>
              <td className="border border-white px-2 py-1">University of Karachi</td>
              <td className="border border-white px-2 py-1">2021 (Theory cleared)</td>
            </tr>
            <tr>
              <td className="border border-white px-2 py-1">MBA - Human Resource</td>
              <td className="border border-white px-2 py-1">SZABIST, Karachi</td>
              <td className="border border-white px-2 py-1">2008</td>
            </tr>
            <tr>
              <td className="border border-white px-2 py-1">BBA Hons. - Marketing</td>
              <td className="border border-white px-2 py-1">Bahria Institute, Karachi</td>
              <td className="border border-white px-2 py-1">2001</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
        </div>
      </div>

      {/* Personal Statement */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold">Personal Statement</h2>
        <p className="mt-2 text-lg max-w-2xl mx-auto text-gray2">
          Purpose defines people, their realities and their priorities;
          observe their actions and you will know their purpose.
        </p>
      </div>

      {/* Skills Icons */}
     
      <div className="flex flex-wrap justify-center mt-8 gap-4 text-sm mr-9">
  <div className="bg-gray p-2 rounded flex items-center gap-1">
    <Image src="/value.png" alt="Value" width={50} height={50} />
    Value Delivery Focused
  </div>
  <div className="bg-gray p-2 rounded flex items-center gap-1">
    <Image src="/analytics.png" alt="Analytics" width={50} height={50} />
    Analytics Savvy
  </div>
  <div className="bg-gray p-2 rounded flex items-center gap-1">
    <Image src="/people.png" alt="People" width={50} height={50} />
    People Championship
  </div>
  <div className="bg-gray p-2 rounded flex items-center gap-1">
     <Image src="/Advisory.png" alt="People" width={50} height={50} /> 
     Advisory & Consultation</div>
         <div className="bg-gray p-2 rounded flex items-center gap-1"><Image src="/Change.png" alt="People" width={50} height={50} /> 
        Change Management</div>
         <div className="bg-gray p-2 rounded flex items-center gap-1"><Image src="/leadership.png" alt="People" width={50} height={50} /> 
        Leadership</div>
</div>
    </div>
  );
}
