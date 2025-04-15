import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Contact from "../Components/Contact";
import Page1 from "../Components/Page1";
import Page2 from "../Components/Page2";
import Project from "../Components/Project";
import About from "../Components/About";

export default function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [marioImage, setMarioImage] = useState(
    "./images/mario/mario-stand-right.gif"
  );
  const [marioDirection, setMarioDirection] = useState("right");
  const [isJumping, setIsJumping] = useState(false);
  const [hitBox, setHitBox] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const totalSlides = 5;
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        // Only move to the next slide if it's not the last slide
        if (currentSlide < totalSlides - 1) {
          setMarioDirection("right");
          setCurrentSlide((prev) => prev + 1);
        }
      } else if (event.key === "ArrowLeft") {
        // Only move to the previous slide if it's not the first slide
        if (currentSlide > 0) {
          setMarioDirection("left");
          setCurrentSlide((prev) => prev - 1);
        }
      } else if (event.key === " ") {
        if (currentSlide === 2 && !isJumping) {
          setIsJumping(true);
          setMarioImage(`./images/mario/mario-jump-${marioDirection}.png`);
          setTimeout(() => setHitBox(true), 200);
          setTimeout(() => {
            setIsJumping(false);
            setMarioImage(`./images/mario/mario-stand-${marioDirection}.gif`);
            setHitBox(false);
            setShowSkills((prev) => !prev);
          }, 400);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide, isJumping, totalSlides, marioDirection]);

  const handleSlideChange = (index) => {
    setMarioImage(`./images/mario/mario-run-${marioDirection}.gif`);
    setTransitioning(true);
    setTimeout(() => {
      setMarioImage(`./images/mario/mario-stand-${marioDirection}.gif`);
      setTransitioning(false);
    }, 2400);
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <img
        src={marioImage}
        alt="mario"
        className={`mario ${isJumping ? "jumping" : ""}`}
      />
      <p className="footer">
        Copyright© {currentYear} Tejasav Singh | All right reserved.
      </p>
      <div className="flex mr-12 mb-3 media">
        <abbr title="LinkedIn">
          <a href="https://www.linkedin.com/in/tejasav-singh-63b618276/">
            <img
              src="./images/socials/linkedin-logo-white.png"
              alt="linkdin-logo"
              className="social-icon linkedin-logo"
            />
          </a>
        </abbr>
        <abbr title="GitHub">
          <a href="https://github.com/stejasav">
            <img
              src="./images/socials/github-logo.png"
              alt="github-logo"
              className="social-icon github-logo"
            />
          </a>
        </abbr>
        <abbr title="Instagram">
          <a href="https://www.instagram.com/stejasav/">
            <img
              src="./images/socials/instagram-logo-white.png"
              alt="instagram-logo"
              className="social-icon instagram-logo"
            />
          </a>
        </abbr>
        <abbr title="Gmail">
          <a href="Mailto: tejasavsingh2517@gmail.com">
            <img
              src="./images/socials/gmail-logo-white.png"
              alt="linkdin-logo"
              className="social-icon gmail-logo"
            />
          </a>
        </abbr>
      </div>
      <Carousel
        selectedItem={currentSlide}
        onChange={handleSlideChange}
        className="slider"
        transitionTime={2500}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
      >
        <div>
          <Page1 transitioning={transitioning} />
        </div>
        <div>
          <About transitioning={transitioning} />
        </div>
        <div id="skill">
          <Page2
            hitBox={hitBox}
            showSkills={showSkills}
            transitioning={transitioning}
            isJumping={isJumping}
          />
        </div>
        <div id="projects">
          <Project transitioning={transitioning} />
        </div>
        <div id="contact">
          <Contact transitioning={transitioning} />
        </div>
      </Carousel>
    </div>
  );
}
