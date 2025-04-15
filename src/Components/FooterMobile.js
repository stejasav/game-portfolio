import React from "react";

export default function FooterMobile() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mobile-footer">
      {/* Glowing background elements */}
      <div className="footer-glow-container">
        <div className="footer-glow-circle one"></div>
        <div className="footer-glow-circle two"></div>
      </div>

      {/* Wave animation */}
      <div className="footer-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0188fb"
            fillOpacity="0.15"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="social-media-container">
          <a
            href="https://www.linkedin.com/in/tejasav-singh-63b618276/"
            className="social-link linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="social-hover-effect"></div>
            <img
              src="./images/socials/linkedin-logo-white.png"
              alt="LinkedIn"
              className="social-icon-footer"
            />
          </a>
          <a
            href="https://github.com/stejasav"
            className="social-link github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <div className="social-hover-effect"></div>
            <img
              src="./images/socials/github-logo.png"
              alt="GitHub"
              className="social-icon-footer github"
            />
          </a>
          <a
            href="https://www.instagram.com/stejasav/"
            className="social-link instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <div className="social-hover-effect"></div>
            <img
              src="./images/socials/instagram-logo-white.png"
              alt="Instagram"
              className="social-icon-footer insta"
            />
          </a>
          <a
            href="mailto:tejasavsingh2517@gmail.com"
            className="social-link gmail"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <div className="social-hover-effect"></div>
            <img
              src="./images/socials/gmail-logo-white.png"
              alt="Gmail"
              className="social-icon-footer"
            />
          </a>
        </div>

        <div className="footer-divider">
          <span className="divider-line"></span>
          <span className="divider-dot"></span>
          <span className="divider-line"></span>
        </div>

        <div className="footer-text-container">
          <p className="footer-text">Copyright © {currentYear} Tejasav Singh</p>
          <p className="footer-rights">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
