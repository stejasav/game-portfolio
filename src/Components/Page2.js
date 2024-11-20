import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page2({hitBox, showSkills, transitioning, isJumping}){

  const slideAnimation = {
    initial: { opacity: 0, y: 70 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.2 } },
  };

  return(
    <div>
      <div className="bg-1 relative pl-20 pr-20">
        {!transitioning && !isJumping && (
          <>
            <img src="./images/keys/right-arrow.svg" alt="right-arrow" className="right-arrow2" />
            <img src="./images/keys/right-arrow.svg" alt="left-arrow" className="left-arrow2" />
            <img src="./images/space-bar.svg" alt="space-bar" className="space-bar" />
          </>
        )}

        <img src={`./images/hit-box${showSkills? "1" : "2"}.png`} alt="hit-box" className={`hit-box ${hitBox ? "animate-hit-box" : ""}`}/>
        <img src="./images/brick-box-frame.svg" alt="box" className="box"/>
        <AnimatePresence mode="wait">
          {showSkills ? (
              <motion.div
                key="skills"
                className="skill-container"
                variants={slideAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h2 className=" text-5xl -mt-1 mb-2">SKILLS</h2>
                <div className="skills">
                  <div className="frontend">
                    <h1>Front-end</h1>
                    <ul>
                      <li>HTML<img src="./images/skills/html-logo.png" alt="html-logo" className=" max-w-9 ml-2"/></li>
                      <li>CSS<img src="./images/skills/css-logo.png" alt="css-logo" className=" max-w-11 ml-2 "/></li>
                      <li>JavaScript<img src="./images/skills/js-logo.png" alt="js-logo" className=" max-w-10 ml-2 "/></li>
                      <li>ReactJS<img src="./images/skills/react-logo.png" alt="react-logo" className=" max-w-9 ml-2 mt-1"/></li>
                    </ul>
                  </div>
                  <div className="tools">
                    <h1>Tools</h1>
                    <ul>
                      <li>Git<img src="./images/skills/git-logo.png" alt="git-logo" className=" max-w-8 ml-2 mt-1"/></li>
                      <li>GitHub<img src="./images/skills/github-logo.png" alt="github-logo" className=" max-w-16"/></li>
                      <li>VS Code<img src="./images/skills/vscode-logo.png" alt="vscode-logo" className=" max-w-8 ml-3 mt-1"/></li>
                    </ul>
                  </div>
                  <div className="backend">
                    <h1>Back-end</h1>
                    <ul>
                      <li>C++<img src="./images/skills/c++-logo.png" alt="c++-logo" className=" max-w-20"/></li>
                      <li>MySql<img src="./images/skills/mysql-logo.png" alt="mysql-logo" className=" max-w-14 ml-1"/></li>
                      <li>Python<img src="./images/skills/python-logo.png" alt="python-logo" className=" max-w-9 ml-3"/></li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="education"
                className="education-container"
                variants={ slideAnimation }
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <img src="./images/floating-computer2.gif" alt="floating computer" className="floating-laptop1"/>
                <img src="./images/floating-computer.gif" alt="floating computer" className="floating-laptop2"/>
                <h2 className=" text-5xl -mt-1">EDUCATION</h2>
                <img src="./images/gtbit-logo.png" alt="gtbit-logo" className=" max-w-32 mt-5 mb-6"/>
                <p className=" text-4xl pl-10 pr-10 mb-3">Guru Tegh Bahadur Institute of Technology</p>
                <p className=" text-3xl pl-10 pr-10 mb-3">B.Tech in Computer Science and Engineering</p>
                <p className=" text-2xl pl-10 pr-10">2022-2026</p>
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
      <div className="ground"></div>
    </div>
  )
}