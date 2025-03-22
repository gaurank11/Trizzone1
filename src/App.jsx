import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import PropertiesPage from "./components/properties";
import Contact from "./pages/Contact";
import Header from "./components/header";
import Preloader from "./components/loading";
import Footer from "./components/footer";
import AboutUs from "./pages/About";
import ProjectGallery from "./components/projects";
import ProjectDetail from "./components/ProjectDetail";
import Project1 from "./pages/project1";
import HeroPage from "./components/Hero_Page";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // Show only the Preloader until loading is complete
  }

  return (
<div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/project1" element={<Project1/>} />
        <Route path="/hero" element={<HeroPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
