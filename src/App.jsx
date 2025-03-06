import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/loading";
import Home from "./pages/Home";
import PropertiesPage from "./components/properties";
import Contact from "./pages/Contact";

function App() {
  return (
   
      <Routes>
        {/* Show Loader initially and navigate to Home */}
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

  );
}

export default App;
