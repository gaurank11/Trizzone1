import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroPage = ({ projects = [], content = {} }) => {
  const location = useLocation();
  const selectedProject = location.state?.selectedProject || projects[0]; // Default to first project
  const initialSlide = projects.findIndex((p) => p.id === selectedProject?.id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: initialSlide >= 0 ? initialSlide : 0, // Ensure a valid slide index
  };

  return (
    <div className="w-full flex flex-col items-center bg-black py-10">
      <div className="w-full max-w-4xl">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-white mt-6 px-4 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold">{selectedProject?.title || "No Title"}</h2>
        <p className="text-gray-400 text-lg mt-2">{selectedProject?.category || "No Category"}</p>
      </div>

      {/* Content Section */}
      <div className="text-gray-300 text-lg mt-6 px-6 max-w-3xl">
        {content[selectedProject?.id] || "No additional content available."}
      </div>
    </div>
  );
};

export default HeroPage;
