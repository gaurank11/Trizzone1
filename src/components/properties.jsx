import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Houses",
  "Hospitality",
  "Thumbnails",
  "World Map",
];

const propertiesData = {
  All: [
    { 
      img: "https://static.wixstatic.com/media/2db2e6_1485538733094508a402dd7b154b7c25~mv2_d_3888_2592_s_4_2.jpg/v1/fill/w_1901,h_869,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2db2e6_1485538733094508a402dd7b154b7c25~mv2_d_3888_2592_s_4_2.jpg", 
      name: "ESSEL TOWER APARTMENT INTERIOR", 
      project: "Project: Apartment Interior",
      location: "Location: Essel Tower, Gurgaon, Haryana",
      year: "Year: 2015", 
      team: "Team: Trizzone Design Studio",
      link: "/project1"
    },
    { 
      img: "https://static.wixstatic.com/media/2db2e6_85fddecb1d3a4b549199cf18c4d9e9d7~mv2_d_3888_2592_s_4_2.jpg/v1/fill/w_1901,h_869,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2db2e6_85fddecb1d3a4b549199cf18c4d9e9d7~mv2_d_3888_2592_s_4_2.jpg", 
      name: "MGI OFFICE INTERIOR", 
      project: "Project: Corporate Office Interior",
      location: "Location: Jasola, New Delhi",
      year: "Year: 2015", 
      team: "Team: Trizzone Design Studio",
      link: "/project2"
    },
    { 
      img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/ss_camasa/ss_homepage.webp", 
      name: "SS CAMASA", 
      price: "$550,000",
      link: "/ss-camasa"
    },
  ],
};

const PropertiesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col md:flex-row mt-28 p-4">
      
      {/* MOBILE VIEW (Interiors First + Horizontal Categories) */}
      <div className="md:hidden">
        <h2 className="text-3xl font-bold mb-4">Interiors</h2>
        <div className="flex overflow-x-auto gap-2 whitespace-nowrap pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm px-4 py-2 rounded-lg ${
                selectedCategory === category ? "text-black font-bold" : "text-gray-400"
              } hover:text-black`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW (Sidebar Categories) */}
      <div className="hidden md:flex md:w-1/4 flex-col space-y-2 p-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-left p-2 rounded-lg text-gray-400 text-sm hover:text-black ${
              selectedCategory === category ? "text-black font-bold" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* PROPERTIES GRID */}
      <div
        className={`w-full md:w-3/4 transition-all duration-1000 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-50"
        }`}
      >
        {/* Interiors Title (Only for Desktop) */}
        <h2 className="hidden md:block text-3xl font-bold mb-4">Interiors</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {propertiesData[selectedCategory]?.map((property, index) => (
            <Link to={property.link} rel="noopener noreferrer" key={index}>
              <div className="relative group cursor-pointer shadow-lg overflow-hidden h-[200px]">
                <img src={property.img} alt={property.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-4">
                  <p className="text-white text-lg font-bold">{property.name}</p>
                  <p className="text-white text-sm">{property.project}</p>
                  <p className="text-white text-sm">{property.location}</p>
                  <p className="text-white text-sm">{property.year}</p>
                  <p className="text-white text-sm">{property.team}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
