import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "NO. 40",
    category: "RESIDENTIAL",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9XTZJ_iQJubqUgivruOTXc3kymITA3Bbfg&s",
  },
  {
    id: 2,
    title: "MEWS HOUSE",
    category: "RESIDENTIAL",
    image: "https://minaleandmann.com/wp-content/uploads/2018/05/alexander_desktop.jpg",
  },
  {
    id: 3,
    title: "THORNTON",
    category: "RESIDENTIAL",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AQQBAcaEZKirUYWyUevw3FQ3i1xSWRLM-A&s",
  },
  {
    id: 1,
    title: "NO. 40",
    category: "RESIDENTIAL",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9XTZJ_iQJubqUgivruOTXc3kymITA3Bbfg&s",
  },
  {
    id: 2,
    title: "MEWS HOUSE",
    category: "RESIDENTIAL",
    image: "https://minaleandmann.com/wp-content/uploads/2018/05/alexander_desktop.jpg",
  },
  {
    id: 3,
    title: "THORNTON",
    category: "RESIDENTIAL",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AQQBAcaEZKirUYWyUevw3FQ3i1xSWRLM-A&s",
  },
];

const ProjectGallery = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
    setTimeout(() => navigate(`/project/${project.id}`), 500);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="w-full flex flex-col items-center bg-black py-10 relative overflow-hidden scrollbar-hidden">
      {/* Project List with Horizontal Scroll */}
      <div className="flex gap-6 px-4 relative z-10 overflow-x-auto w-full custom-scrollbar">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => handleClick(project)}
            className="cursor-pointer flex flex-col items-center min-w-[300px]"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-[300px] h-60 object-cover rounded-lg"
            />
            <h3 className="text-white text-lg font-semibold mt-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm">{project.category}</p>
          </motion.div>
        ))}
      </div>

      {/* Enlarged Project View */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative w-[80%] max-w-3xl p-4 bg-white rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-4 text-black text-xl font-bold"
            >
              ✖
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-80 object-cover rounded-lg"
            />
            <h2 className="text-black text-2xl font-semibold mt-4">
              {selectedProject.title}
            </h2>
            <p className="text-gray-600 text-lg">{selectedProject.category}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectGallery;
