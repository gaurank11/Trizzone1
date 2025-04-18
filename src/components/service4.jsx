import React from 'react';


const Service4 = () => {
  return (
    <section className="bg-[#1b1b1b] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Left: Image Section */}
      <div className="relative flex justify-center md:w-1/2">
        <div className="bg-[#f7d6d6] rounded-3xl p-4 w-fit">
          <img
            src=""
            alt="Mobile Mockup"
            className="w-[250px] md:w-[300px] rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Right: SEO and CMS Text */}
      <div className="md:w-1/2 space-y-12">
        {/* SEO */}
        <div>
          <h2 className="text-3xl font-extrabold">SEO</h2>
          <p className="mt-2 text-white font-medium">
            <span className="font-bold">Search Engine Optimisation</span> - Visibility is everything. Our SEO experts optimize your website to rise in search rankings, attract the right audience, and drive growth. By blending technical expertise with a keen understanding of search trends, we set your business up to be found where it matters.
          </p>
        </div>

        {/* CMS */}
        <div>
          <h2 className="text-3xl font-extrabold">
            <span className="text-white">CMS</span>
            <span className="text-gray-500"> </span>
          </h2>
          <p className="mt-2 text-white font-medium">
            <span className="font-bold">Content Management System</span> - Take control of your content with a seamless, customised CMS. We build user-friendly systems that let you manage updates effortlessly. Whether it’s a blog, a product catalog, or a portfolio, we make content management a breeze.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service4;
