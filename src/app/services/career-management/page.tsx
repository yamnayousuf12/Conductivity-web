"use client";
import Image from "next/image";

const CareerServices = () => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#2c2a2a] text-black dark:text-white font-sans transition-colors duration-300  py-24">
          
          <div
         className="relative lg:h-96 h-52 bg-cover bg-center flex items-center justify-center -inset-x-30 -inset-y-10 "
         style={{ backgroundImage: "url('/caree.png')" }}
       > <div className="max-w-5xl mx-auto px-4 py-10">
         <h2 className="text-2xl font-bold text-center mb-2 text-darkred">CAREER SERVICES</h2>
      <p className="text-center text-darkBlue font-extrabold mb-10">
        At every stage of your career, the right guidance can make all the difference.
        We offer tailored solutions that help you reach your professional goals with confidence.
      </p>
       </div>
        </div>
    <div className="max-w-5xl mx-auto px-4 py-10">
     

      <h3 className="text-xl font-bold mb-2 text-Blue dark:text-Red">Freshers</h3>
      <p className="mb-6 text-black dark:text-white">
        Kickstart your career journey with the right tools and guidance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div className="flex items-start gap-4">
          <Image src="/Picture.png" alt="Career Growth" width={150} height={150} />
          <div>
            <p className="font-bold text-Blue dark:text-Red">Career Mapping</p>
            <p className="text-black dark:text-white text-sm mb-3">
              We help you design a clear roadmap for your career based on your interests, skills,
              and market demand, guiding you towards the most suitable career paths.
            </p>

            <p className="font-bold dark:text-Red text-Blue">Personality Assessment</p>
            <p className="text-black dark:text-white text-sm">
              Understand your strengths, traits, and areas of improvement through our
              <span className="text-Red  hover:text-customBlue font-extrabold"> Sanjeeda Personality Assessment</span> .
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-start gap-4">
          <Image src="/Picture1.png" alt="Counseling" width={150} height={150} />
          <div>
            <p className="font-bold dark:text-Red text-Blue">Job Readiness</p>
            <p className="text-black dark:text-white text-sm mb-3">
              Receive a detailed evaluation of your job readiness, highlighting your employability skills,
              gaps, and actionable suggestions to enhance your career prospects.
            </p>

            <p className="font-bold text-Blue dark:text-Red">Career Counseling / Mentorship</p>
            <p className="text-black dark:text-white text-sm">
              Our expert mentors and counselors provide one-on-one sessions to guide you through
              career decisions, industry expectations, and growth strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Resume & Portfolio Section */}
      <div className="mt-10 flex items-center gap-4">
        <Image src="/Picture2.png" alt="Resume" width={150} height={150} />
        <div>
        <p className="font-bold dark:text-Red text-Blue">Resume and Portfolio Building</p>
         <p className="text-black dark:text-white text-sm mb-3">Get professional assistance in creating a compelling resume and an impressive portfolio that effectively showcase your skills, education, and projects.</p>
          <p className="font-bold text-Blue dark:text-Red">Training / Internship / Job Searching</p>
           <p className="text-black dark:text-white text-sm">Access curated training programs, internships, and job opportunities to gain practical experience and make a strong entr into the professional world.</p>
         </div>  
         
      </div>
       <div className="max-w-5xl mx-auto px-4 py-10">
      <h3 className="text-xl font-bold text-Blue dark:text-Red mb-2 ">Job Seekers</h3>
      <p className="mb-6 text-black dark:text-white">
        Empowering you to transition into the right career opportunities with confidence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div className="flex items-start gap-4">
          <Image src="/Picture5.png" alt="Profile Cube" width={150} height={150} />
          <div>
            <p className="font-bold text-Blue dark:text-Red">Profile Building</p>
            <p className="text-sm mb-3 text-black dark:text-white">
              Create a professional and attractive profile that highlights your key achievements,
              skills, and career goals to potential employers.
            </p>

            <p className="font-bold text-Blue dark:text-Red">Resume Building / 3D CV Building</p>
            <p className="text-black dark:text-white text-sm">
              Develop a customized, impactful resume and innovative 3D CVs that set you apart in today’s
              competitive job market.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-start gap-4">
          <Image src="/Picture6.png" alt="Interview" width={150} height={150} />
          <div>
            <p className="font-bold text-Blue dark:text-Red">Interview Preparation</p>
            <p className="text-black dark:text-white text-sm">
              Prepare for interviews with mock sessions, common Q&A practice, and expert tips
              on communication, presentation, and negotiation skills.
            </p>
             <p className="font-bold text-Blue dark:text-Red">Job Matching</p>
            <p className="text-black dark:text-white text-sm">
              Get matched with job openings that best suit your skills, experience, and career aspirations through our intelligent job matching services.
            </p>
            
          </div>
          
        </div> 
      </div>
       <div>
        <p className="font-bold dark:text-Red text-Blue">Application Tracking</p>
         <p className="text-black dark:text-white text-sm mb-3"> Stay organized and ahead with our application tracking support - monitoring your job applications, interview schedules, and feedback.</p>
         
         </div> 
    </div>
     
          
    <div className="max-w-5xl mx-auto px-4 py-10">
      
      <h3 className="text-xl font-bold mb-2 dark:text-Red text-Blue">Professionals</h3>
      <p className="mb-6 dark:text-white text-black">
        Advance your career with strategic planning and personal branding.
      </p>
      

      <div className="mb-6">
        <p className="font-bold dark:text-Red text-Blue">Learning and Development</p>
        <p className="dark:text-white text-black text-sm mb-4">
          Stay updated and competitive through continuous learning opportunities, workshops, and
          development programs customized for working professionals.
        </p>
        

        <p className="font-bold dark:text-Red text-Blue">Career Progression Planning</p>
        <p className="dark:text-white text-black text-sm">
          Map your career growth with a detailed progression plan that aligns your current skills,
          experiences, and future goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex items-start gap-4">
          <Image src="/Picture4.png" alt="Salary Offer" width={100} height={100} />
          
          <div>
            <p className="font-bold dark:text-Red text-Blue">Offer Evaluation / Offers Support</p>
            <p className="dark:text-white text-black text-sm mb-3">
              Receive expert advice on evaluating job offers, salary negotiations, and making
              strategic career moves with confidence.
            </p>

            <p className="font-bold dark:text-Red text-Blue">Profile Building / Personal Branding</p>
            <p className="dark:text-white text-black text-sm">
              Craft a strong personal brand through profile enhancement services, professional social
              media presence building, and leadership profiling.
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <Image src="/Picture3.png" alt="Ideas" width={200} height={200} className="rounded" />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CareerServices;
