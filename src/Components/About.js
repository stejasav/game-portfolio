import React from "react";

export default function About({transitioning}){
  return(
    <div>
      { !transitioning && (
        <>
          <img src="./images/keys/right-arrow.svg" alt="right-arrow" className="right-arrow3" />
          <img src="./images/keys/right-arrow.svg" alt="left-arrow" className="left-arrow3" />
        </>
      )}
      <div className="bg-1 text-white about">
        <h1>ABOUT</h1>
        <div className="flex flex-row">
          <div className="text-section">
            <div className=" mt-10">
              <p>
                An aspiring <em><strong><span className="highlight">Computer Science student</span></strong></em> currently pursuing my B.Tech at Guru Gobind Singh Indraprastha University. <span className="font-mono">I</span>’m passionate about software development, with a strong foundation in <em><strong><span className="highlight">Data Structures and Algorithms</span></strong></em> and a growing expertise in <em><strong><span className="highlight">web development</span></strong></em> .
              </p>
              <p>
              <span className="font-mono">I</span> have developed a diverse portfolio of <em><strong><span className="highlight">projects</span></strong></em>, ranging from a <em><strong><span className="highlight">YouTube Clone</span></strong></em> to interactive web applications such as a <em><strong><span className="highlight">Rock-Paper-Scissors game</span></strong></em>  and a <em><strong><span className="highlight">To-Do List</span></strong></em> . As a Web Development Intern, I gained hands-on experience by designing and implementing responsive, user-focused web interfaces.
              </p>
              <p>
                <span className="font-mono">I</span>’m well-versed in <em><strong><span className="highlight">C++, HTML, CSS, JavaScript, React, Tailwind</span></strong></em>, and <span className="font-mono">I</span>’m continuously learning new technologies to stay updated with the industry trends. My approach is user-centric, aiming to combine smart, creative solutions with functional design.
              </p>
            </div>
          </div>

          <div className="avatar-section">
            <img src="./images/avatar.webp" alt= "avatar" className="avatar"/>
          </div>
        </div>

      </div>
      <div className="ground"></div>

    </div>
  )
}