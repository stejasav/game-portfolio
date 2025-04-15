import React, { useEffect, useState } from "react";

export default function Page1({ transitioning }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className={`page1-container ${isMobile ? "mobile" : ""}`}>
      <div className="bg-1 pl-24 pr-24 page1">
        <div className="content-wrapper">
          <h1>
            <span className="highlight">Innovative</span>,{" "}
            <span className="highlight">Skilled</span>, and{" "}
            <span className="highlight">Tech-Savvy</span> Engineer
            <br className="desktop-break"></br>
            <span className="building-text">
              {" "}
              Building the Future with <span className="code-text">Code</span>
            </span>
          </h1>

          <div className="separator">
            <div className="line"></div>
            <div className="dot"></div>
            <div className="line"></div>
          </div>

          <p className="tagline">
            Bringing Ideas to Life with Code, Crafting Scalable Solutions for
            Real-World Challenges
          </p>
        </div>
        {!transitioning && (
          <img
            src="./images/keys/right-arrow.svg"
            alt="right-arrow"
            className="right-arrow"
          />
        )}
      </div>
      <div className="ground"></div>

      <div className="floating-element circle1"></div>
      <div className="floating-element circle2"></div>
      <div className="floating-element square1"></div>
      <div className="floating-element square2"></div>

    </div>
  );
}