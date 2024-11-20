import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [showHero, setShowHero] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        setStartAnimation(true);
        setTimeout(() => setShowHero(false), 2000);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const homepage = {
    initial: { y: 0 },
    animate: { y: "-100vh", transition: { duration: 1.25 } },
  };

  return (
    <AnimatePresence mode="wait">
      {showHero ? (
        <motion.div
          className="h-screen w-full bg-black homepage"
          variants={homepage}
          initial="initial"
          animate={startAnimation ? "animate" : "initial"}
        >
          <div className="h-screen w-full bg-black homepage">
            <Navbar />
            <Hero />
          </div>
        </motion.div>
      ) : (
        <></>
      )}
      <div className = "h-screen w-full gamepage">
        <Main />
      </div>
    </AnimatePresence>
  );
}
