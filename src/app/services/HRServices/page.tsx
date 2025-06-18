// components/HRServices.tsx
import Image from "next/image";

const HRServices = () => {
  return (
     <div className="w-full min-h-screen bg-white dark:bg-[#2c2a2a] text-black dark:text-white font-sans transition-colors duration-300  py-24">
          
          <div
         className="relative lg:h-96 h-52 bg-cover bg-center flex items-center justify-center -inset-x-30 -inset-y-10 dark:opacity-45 "
         style={{ backgroundImage: "url('/HR.Jpg')" }}
       > 
        </div>
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-Blue dark:text-Red">
        HUMAN RESOURCE MANAGEMENT SERVICES
      </h2>

      <p className="text-black dark:text-white text-center mb-10 max-w-3xl mx-auto">
        Our comprehensive HR services are designed to strengthen your people, processes, and
        performance, enabling sustainable business growth. We support organizations in building a
        future-ready workforce with the following solutions:
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6 text-sm ">
          <div>
            <p className="font-bold text-Blue dark:text-Red">Training and Development (T&D)</p>
            <p className="text-black dark:text-white">
              We design and deliver customized training programs that enhance employee skills,
              leadership abilities, and organizational capabilities. Our T&D initiatives are tailored
              to meet your business goals, ensuring continuous learning, employee engagement, and
              overall performance improvement.
            </p>
          </div>

          <div>
            <p className="font-bold text-Blue dark:text-Red">Salary Benchmarking</p>
            <p className="text-black dark:text-white">
              Stay competitive in the market with our salary benchmarking services. We provide
              detailed market analyses and compensation studies to help you design attractive, fair,
              and sustainable pay structures that attract and retain top talent.
            </p>
          </div>

          <div>
            <p className="font-bold text-Blue dark:text-Red">Performance Management</p>
            <p className="text-black dark:text-white">
              We help you create robust performance management systems that go beyond annual
              appraisals. Our solutions include setting clear goals, developing evaluation frameworks,
              providing continuous feedback mechanisms, and building a performance-driven culture
              within your organization.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/Picture7.png"
            alt="Employee Excellence"
            width={350}
            height={350}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
    <section className="max-w-6xl mx-auto px-4 py-2">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6 text-sm ">
          <div>
            <p className="font-bold text-Blue dark:text-Red">Talent Acquisition</p>
            <p className="text-black dark:text-white">
              Finding the right talent is critical.
We offer end-to-end talent acquisition services, from developing job descriptions and sourcing candidates to conducting assessments and supporting final selections, ensuring you hire the best fit for every role.
            </p>
          </div>

          <div>
            <p className="font-bold text-Blue dark:text-Red">Organization Structure and Design</p>
            <p className="text-black dark:text-white">
              We support businesses in designing agile and efficient organizational structures.
Our services focus on aligning roles, responsibilities, reporting lines, and workflows to maximize clarity, productivity, and collaboration across your company.
            </p>
          </div>

          <div>
            <p className="font-bold text-Blue dark:text-Red">Succession Planning</p>
            <p className="text-black dark:text-white">
              Prepare your organization for the future with effective succession planning.
We help identify and develop internal talent for critical roles, ensuring leadership continuity, minimizing risks, and supporting long-term business stability.
            </p>
          </div>
           <div>
            <p className="font-bold text-Blue dark:text-Red">Individual Performance Development Planning (IPDP)</p>
            <p className="text-black dark:text-white">
             We partner with organizations to implement Individual Performance Development Plans for employees.
Through personalized goal setting, skills assessment, and career development pathways, we foster continuous growth at both individual and organizational levels.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/Picture8.png"
            alt="Employee Excellence"
            width={350}
            height={350}
            className="rounded-md"
          />
        </div>
      </div>
       </section>
    </div>
   
  );
};

export default HRServices;
