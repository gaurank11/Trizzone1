import React from "react";

const processSteps = [
  {
    week: "Week 0",
    title: "Discovery Call",
    description:
      "Schedule a free call with our team to understand your company and the desired outcome. We then create a tailored project plan.",
  },
  {
    week: "Week 1",
    title: "Strategy & Branding",
    description:
      "The project plan has been approved, and overall brand messaging has been confirmed. Now, leave it to us.",
  },
  {
    week: "Week 2",
    title: "UI/UX Design",
    description:
      "We start designing intuitive and modern user interfaces aligned with your brand and target audience.",
  },
  {
    week: "Week 3",
    title: "Frontend Development",
    description:
      "Our frontend engineers turn the design into responsive code using modern technologies like React and Tailwind.",
  },
  {
    week: "Week 4",
    title: "Backend & APIs",
    description:
      "We develop scalable backend systems and APIs to power your platform securely and efficiently.",
  },
  {
    week: "Week 5",
    title: "Testing & QA",
    description:
      "Rigorous manual and automated testing ensures performance, security, and cross-device compatibility.",
  },
  {
    week: "Week 6",
    title: "Launch & Support",
    description:
      "We go live! Your product is launched with post-launch support and documentation for smooth operations.",
  },
];

const Service5 = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white flex flex-col md:flex-row gap-16">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <p className="font-medium text-black">✦ Our Process</p>
        <h1 className="text-5xl font-extrabold text-gray-300 leading-tight">
          From Consult <br /> to Project <br /> Launch
        </h1>
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 rounded-full bg-white border border-black font-semibold shadow-[0_0_20px_2px_#e9ffb1]">
            Book A Call
          </button>
          <button className="px-6 py-3 rounded-full border border-black font-medium text-black">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Side Timeline */}
      <div className="md:w-1/2 relative border-l-2 border-gray-200 pl-6">
        {processSteps.map((step, index) => (
          <div key={index} className="relative mb-12">
            <span
              className={`absolute -left-3 top-1.5 w-3 h-3 rounded-full ${
                index === 0 ? "bg-black" : "bg-gray-300"
              }`}
            />
            <p className="text-sm text-gray-500">{step.week}</p>
            <h3 className="text-xl font-bold mt-1">{step.title}</h3>
            <p className="text-gray-600 mt-1">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service5;
