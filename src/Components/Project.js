import React from "react";

export default function Project({transitioning}){

  return(
    <div>
      <div className="bg-1 text-white project">
        {!transitioning && (<img src="./images/keys/right-arrow.svg" alt="right-arrow" className="right-arrow3" />)}
        {!transitioning && (<img src="./images/keys/right-arrow.svg" alt="left-arrow" className="left-arrow3" />)}
        
        <h1>PROJECTS</h1>
        <section className="project-container">
          <div className="project-preview m-7 -mt-1 -ml-1">
            <div className="p-5">
              <div className="mb-3 relative">
                  <img src="./images/projects-ss/youtube-clone.png" alt="youtube clone" className="w-full rounded-2xl" />
                  <a href="https://github.com/stejasav/YouTube_Clone" target="_blank" rel="noopener noreferrer" className="github-link-wrapper">
                    <img src="./images/skills/github-logo.png" alt="github logo" className="github-link" />
                  </a>
              </div>
              <div className="project-info">
                <p className="project-title">YouTube Clone</p>
                <p className="project-about">This YouTube clone, built with HTML and CSS, replicates the homepage layout with a responsive design and video thumbnails, helping me practice styling and layout skills.</p>
                <div className="languages-used">
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-preview m-7 -mt-1 -ml-1">
            <div className="p-5">
              <div className="mb-3 relative">
                  <img src="./images/projects-ss/rock-paper-scissor.png" alt="rock-paper-scissors" className="w-full rounded-2xl" />
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

          <div className="project-preview m-7 -mt-1 -ml-1">
            <div className="p-5">
              <div className="mb-3 relative">
                  <img src="./images/projects-ss/meme-generator.png" alt="meme-generator" className="w-full rounded-2xl" />
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