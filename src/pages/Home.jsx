import { useEffect, useState } from "react";
import Hero from "../components/hero"; // Importing the Hero component

const Home = () => {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHero(true);
    }, 1000); // Delay before showing the Hero component
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-[70px] md:text-[280px] font-bold relative">
      {/* Show Hero Component after delay */}
      {showHero && <Hero />}
    </div>
  );
};

export default Home;
