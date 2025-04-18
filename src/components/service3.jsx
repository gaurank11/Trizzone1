import React from 'react';
 // Replace with your actual image path

const Service3 = () => {
  return (
    <section className="min-h-screen bg-[#1b1b1b] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">
      
      {/* Left: Text Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-sm text-gray-300">✦ Website design with purpose.</p>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Results–Driven <br />
          Web <span className="text-gray-500">Design</span>
        </h1>
        
        <p className="text-gray-400 text-base md:text-lg max-w-lg">
          Our website designs go beyond visuals—they’re crafted to captivate, communicate, and convert. We dive deep into understanding your brand’s personality and message, creating a design that’s as engaging as it is intuitive. With a unique blend of creativity and strategy, we design sites that look good and perform even better.
        </p>
        
        <button className="mt-4 border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
          Get Started
        </button>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <div className="rounded-xl overflow-hidden bg-gray-800 p-2 shadow-xl">
          <img
            src=""
            alt="Website Mockup"
            className="rounded-md w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Service3;
