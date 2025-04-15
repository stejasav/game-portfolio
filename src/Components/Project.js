import React from "react";
 
export default function Project({transitioning}){

  return(
    <div className="project-page">
      <div className="bg-1 text-white project overflow-hidden">
        {!transitioning && (
          <>
            <img src="./images/keys/right-arrow.svg" alt="right-arrow" className="right-arrow3" />
            <img src="./images/keys/right-arrow.svg" alt="left-arrow" className="left-arrow3" />
          </>
        )}

        <h1 className="project-heading">PROJECTS</h1>
        <section className="project-container">

          <div className="project-preview">
            <div className="project-inner">
              <div className="project-image-container">
                <img src="./images/projects-ss/rock-paper-scissor.png" alt="rock-paper-scissors" className="project-image" />
                <a href="https://github.com/stejasav/Rock-Paper-Scissor" target="_blank" rel="noopener noreferrer" className="github-link-wrapper">
                  <img src="./images/skills/github-logo.png" alt="github logo" className="github-link" />
                </a>
              </div>
              <div className="project-info">
                <p className="project-title">Rock Paper Scissors</p>
                <p className="project-about">This Rock Paper Scissors game, built with HTML, CSS, and JavaScript, offers an interactive experience with score tracking and keyboard controls, allowing users to easily play and reset the game.</p>
                <div className="languages-used">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-preview ">
            <div className="project-inner">
              <div className="project-image-container">
                  <img src="./images/projects-ss/health-guardian-1.png" alt="health-guardian" className="project-image" />
                  <a href="https://github.com/stejasav/Health-Guardian" target="_blank" rel="noopener noreferrer" className="github-link-wrapper">
                    <img src="./images/skills/github-logo.png" alt="github logo" className="github-link" />
                  </a>
              </div>
              <div className="project-info">
                <p className="project-title">Health Guardian</p>
                <p className="project-about">Health Guardian is a healthcare web application built with React.js that helps users identify possible diseases based on their symptoms. It also allows users to find nearby hospitals and doctors, chat with an AI doctor, and get estimated treatment costs.</p>
                <div className="languages-used">
                  <p>HTML/CSS</p>
                  <p>JavaScript</p>
                  <p>ReactJS</p>
                  <p>Python</p>
                  <p>ML</p>
                  <p>Java</p>
                  <p>MongoDB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-preview">
            <div className="project-inner">
              <div className="project-image-container">
                <img src="./images/projects-ss/kplr.png" alt="KPLR" className="project-image" />
                <a href="https://github.com/stejasav/KPLR" target="_blank" rel="noopener noreferrer" className="github-link-wrapper">
                  <img src="./images/skills/github-logo.png" alt="github logo" className="github-link" />
                </a>
              </div>
              <div className="project-info">
                <p className="project-title">KPLR</p>
                <p className="project-about">KPLR is a login-based web application built with React.js, featuring user authentication and a dashboard for secure access. It allows users to create accounts, log in, and navigate a personalized interface.</p>
                <div className="languages-used">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>React</p>
                  <p>RestAPI</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-preview">
            <div className="project-inner">
              <div className="project-image-container">
                <img src="./images/projects-ss/meme-generator.png" alt="meme-generator" className="project-image" />
                <a href="https://github.com/stejasav/Meme-Generator" target="_blank" rel="noopener noreferrer" className="github-link-wrapper">
                  <img src="./images/skills/github-logo.png" alt="github logo" className="github-link" />
                </a>
              </div>
              <div className="project-info">
                <p className="project-title">Meme Generator</p>
                <p className="project-about">This Meme Generator, built with React, allows users to create custom memes by adding top and bottom text to random images. It features a simple interface and dynamically fetches new images.</p>
                <div className="languages-used">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>React</p>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </div>
      <div className="ground"></div>
    </div>
  )
}
