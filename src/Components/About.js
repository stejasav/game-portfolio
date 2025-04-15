import React, { useEffect, useState } from "react";

export default function About({transitioning}){
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

  if (isMobile) {
    return (
      <div>
        <div className="bg-1 text-white about">
          <h1>ABOUT</h1>
          <div className="flex flex-col">
            <div className="mobile-card-container">
              <div className="mobile-card">
                <div className="card-header">
                  <span className="mac-dot red"></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
                <div className="card-content">
                  <p>
                    Passionate <span className="highlight">Front-end developer</span> skilled in <span className="highlight">React.js</span>, <span className="highlight">JavaScript</span>, and <span className="highlight">Node.js</span>, with <span className="highlight">projects</span> including a <span className="highlight">YouTube Clone</span>, <span className="highlight">Health Guardian</span>, <span className="highlight">KPLR</span> (secure authentication app), and a <span className="highlight">Meme Generator</span>. Experienced in building responsive interfaces during my Web Development Internship. Committed to merging innovative design with strong functionality for seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }  

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
            <div className="mt-10">
              <p>
                An aspiring <span className="highlight">Computer Science Student</span> currently pursuing my B.Tech at Guru Gobind Singh Indraprastha University. <span className="font-mono">I</span>'m passionate about software development, with a strong foundation in <span className="highlight">Data Structures and Algorithms</span> and growing expertise in <span className="highlight">Front-end Development</span>.
              </p>
              <p>
                <span className="font-mono">I</span> have developed a diverse portfolio including a responsive <span className="highlight">YouTube Clone</span>, healthcare application <span className="highlight">Health Guardian</span>, secure authentication platform <span className="highlight">KPLR</span> with personalized dashboards, and an interactive <span className="highlight">Meme Generator</span>. As a <span className="highlight">Web Development Intern</span>, I designed and implemented responsive, user-focused interfaces while adhering to industry best practices.
              </p>
              <p>
                <span className="font-mono">I</span>'m proficient in <span className="highlight">C++</span>, <span className="highlight">JavaScript</span>, <span className="highlight">React.js</span>, <span className="highlight">Node.js</span>, <span className="highlight">HTML/CSS</span>, and <span className="highlight">Tailwind CSS</span>. Continuously expanding my technical knowledge, I strive to combine innovative design with robust functionality to deliver seamless digital experiences.
              </p>
            </div>
          </div>

          <div className="avatar-section">
            <img src="./images/avatar.webp" alt="avatar" className="avatar"/>
          </div>
        </div>
      </div>
      <div className="ground"></div>
    </div>
  )
}