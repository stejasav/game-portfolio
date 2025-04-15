import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Main from "./pages/Main";
import { motion, AnimatePresence } from "framer-motion";
import MainMobile from "./pages/MainMobile";

export default function App() {
  const [showHero, setShowHero] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Space key and click handler (for desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        setStartAnimation(true);
        setTimeout(() => setShowHero(false), 2000);
      }
    };

    const handleClick = () => {
      setStartAnimation(true);
      setTimeout(() => setShowHero(false), 2000);
    };

    window.addEventListener("keydown", handleKeyDown);

    // Click listener for the PRESS element
    const gameOnElement = document.querySelector(".game-on");

    if (gameOnElement) {
      gameOnElement.addEventListener("click", handleClick);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (gameOnElement) {
        gameOnElement.removeEventListener("click", handleClick);
      }
    };
  }, [isMobile]);

  const homepage = {
    initial: { y: 0 },
    animate: { y: "-100vh", transition: { duration: 1.25 } },
  };

  if (isMobile) {
    return (
      <div className="mobile-view">
        <div className="min-h-screen w-full bg-black homepage-mobile">
          <Navbar />
          <Hero />
        </div>
        <div className="min-h-screen w-full gamepage-mobile">
          <MainMobile />
        </div>
      </div>
    );
  }

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
      <div className="h-screen w-full gamepage">
        <Main />
      </div>
    </AnimatePresence>
  );
}
