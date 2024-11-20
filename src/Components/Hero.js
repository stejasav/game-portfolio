import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.fromTo(".game-on",
      {
        x: -450,
      },
      {
        x: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      }
    );
    gsap.fromTo(".my-profile",
      {
        opacity: 0,
        y: 450,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      }
    );
    gsap.fromTo(".socials img",
      {
        opacity: 0,
        x: 450,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.1,
        rotate: 360,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="p-3 pb-0 hero">
        <div className="game-on">
          <h2>PRESS</h2>
          <img src="./images/space-bar.svg" alt="space bar" className=" w-40" />
        </div>

      <div className="my-profile">
        <img
          src="./images/my-avatar.png"
          alt="my-photo"
          className="profile-pic"
        />
        <img src="./images/blue_ring1.png" alt="ring" className="ring" />
      </div>

      <div className="socials">
        <span className="tooltip-container">
          <a href="https://www.linkedin.com/in/tejasav-singh-63b618276/">
            <img
              src="./images/socials/linkedin-logo-white.png"
              alt="linkedin-logo"
              className="linkedin-logo"
            />
          </a>
          <span className="tooltip">LinkedIn</span>
        </span>
        <span className="tooltip-container">
          <a href="https://github.com/stejasav">
            <img
              src="./images/socials/github-logo.png"
              alt="github-logo"
              className="github-logo"
            />
          </a>
          <span className="tooltip">GitHub</span>
        </span>
        <span className="tooltip-container">
          <a href="https://www.instagram.com/stejasav/">
            <img
              src="./images/socials/instagram-logo-white.png"
              alt="instagram-logo"
              className="instagram-logo"
            />
          </a>
          <span className="tooltip">Instagram</span>
        </span>
        <span className="tooltip-container">
          <a href="Mailto: tejasavsingh2517@gmail.com">
            <img
              src="./images/socials/gmail-logo-white.png"
              alt="gmail-logo"
              className="gmail-logo"
            />
          </a>
          <span className="tooltip">Gmail</span>
        </span>
      </div>
    </div>
  );
}
