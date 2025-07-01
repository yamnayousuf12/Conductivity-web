import React from "react";

const TeamSection = () => {
  return (
    <section className="bg-[rgb(220,220,240)] dark:bg-[#535050] text-darkBlue dark:text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto border-b-4 border-Red dark:border-Red mb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            OUR TRADEMARKED <br /> PROCESS & WORKFLOW.
          </h2>
        </div>
      </div>

      {/* Four Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
        {features.map((item) => (
          <div
            key={item.title}
            className="space-y-3 bg-white dark:bg-gray2 shadow-md dark:shadow-lg p-6 rounded-xl transition-colors"
          >
            <div className="text-3xl">{item.icon}</div>
            <h3 className="font-bold text-lg dark:text-darkBlue">{item.title}</h3>
            <p className="text-sm text-gray dark:text-white font-bold">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const features = [
  {
    icon: "🔍",
    title: "Project Research",
    desc: "The first step to make yourself familiar with the task.",
  },
  {
    icon: "📊",
    title: "Competitor Analysis",
    desc: "Keeping up with the changing strengths and weaknesses.",
  },
  {
    icon: "💡",
    title: "Design Strategies",
    desc: "Knowing your audience. Knowing what’s beneficial.",
  },
  {
    icon: "💻",
    title: "Implementation",
    desc: "The execution of the plan and then anticipate the outcome.",
  },
];

export default TeamSection;
