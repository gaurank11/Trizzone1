import React from "react";
import ProjectGallery from "../components/projects";

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
    id: 4,
    title: "MEnss",
    category: "RESIDENTIAL",
    image: "https://minaleandmann.com/wp-content/uploads/2018/05/alexander_desktop.jpg",
  },


  {
    id: 5,
    title: "hhhs",
    category: "RESIDENTIAL",
    image: "https://minaleandmann.com/wp-content/uploads/2018/05/alexander_desktop.jpg",
  },

  {
    id: 6,
    title: "ssss",
    category: "RESIDENTIAL",
    image: "https://minaleandmann.com/wp-content/uploads/2018/05/alexander_desktop.jpg",
  },
];

const Project1 = () => {
  return (
    <div>
      <ProjectGallery projects={projects} />
    </div>
  );
};

export default Project1;
