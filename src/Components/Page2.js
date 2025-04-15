import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page2({hitBox, showSkills, transitioning, isJumping}){

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

  const slideAnimation = {
    initial: { opacity: 0, y: 70 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.2 } },
  };

  if (isMobile) {
    return (
      <div>
        <div className="flex flex-col items-center justify-center p-5 text-white text-center relative overflow-hidden">
          <div className="w-full max-w-md bg-black/60 rounded-2xl p-6 shadow-lg border border-[#0188fb] relative z-10">
            <div className="mb-4 relative">
              <h2 className="text-4xl font-bold text-[#0188fb] tracking-wide">
                EDUCATION
              </h2>
            </div>

            <img
              src="./images/gtbit-logo.png"
              alt="GTBIT Logo"
              className="w-24 relative z-10 mx-auto mb-3 drop-shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
            <p className="text-2xl font-semibold mb-1 text-white">
              {" "}
              Guru Tegh Bahadur Institute of Technology{" "}
            </p>

            <div className="px-4 py-3 rounded-lg bg-black/50 border border-[#0188fb]/10 hover:border-[#0188fb]/30 transition-colors duration-200">
              <p className="text-xl sm:text-xl mb-2 font-medium">
                {" "}
                B.Tech in Computer Science and Engineering{" "}
              </p>
              <div className="inline-block px-4 py-1 rounded-full bg-[#0188fb]/10 border border-[#0188fb]/40 text-[#0188fb]">
                <p className="text-base font-medium">2022-2026</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="w-full max-w-md bg-gradient-to-b from-black/50 to-black/30 rounded-2xl p-6 shadow-xl border border-[#0188fb]/30 relative z-10 mt-6">
            {/* Skills Header with animated effect */}
            <div className="mb-8 relative">
              <h2 className="text-4xl font-bold text-[#0188fb] tracking-wide flex items-center justify-center">
                <span className="animate-pulse mr-3">⚡</span>
                SKILLS
                <span className="animate-pulse ml-3">⚡</span>
              </h2>
            </div>

            {/* Skills Categories */}
            <div className="space-y-8">
              {/* Frontend Skills - Card Style */}
              <div className="skill-category relative">
                <h3 className="text-xl font-semibold mb-4 px-4 py-2 bg-gradient-to-r from-[#0188fb]/25 to-[#0188fb]/7 rounded-lg border-l-4 border-[#0188fb] inline-flex items-center">
                  <span className="text-[#0188fb] mr-2">&#60;/&#62;</span>
                  Front-end
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      name: "HTML",
                      icon: "./images/skills/html-logo.png",
                      level: 90,
                    },
                    {
                      name: "CSS",
                      icon: "./images/skills/css-logo-mob.png",
                      level: 90,
                    },
                    {
                      name: "JavaScript",
                      icon: "./images/skills/js-logo-mob.png",
                      level: 80,
                    },
                    {
                      name: "ReactJS",
                      icon: "./images/skills/react-logo-mob.png",
                      level: 80,
                    },
                    {
                      name: "NextJS",
                      icon: "./images/skills/next-logo.png",
                      level: 65,
                    },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-black/80 to-black/60 border border-[#0188fb]/20 hover:border-[#0188fb]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(1,136,251,0.3)] group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-2 bg-black/30 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={skill.icon}
                          alt={`${skill.name}`}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                      {/* Skill level bar */}
                      <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#0188fb]/70 to-[#0188fb] rounded-full transition-all duration-700 ease-out group-hover:opacity-100 opacity-70"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Skills - Card Style with different icon */}
              <div className="skill-category relative">
                <h3 className="text-xl font-semibold mb-4 px-4 py-2 bg-gradient-to-r from-[#0188fb]/25 to-[#0188fb]/7 rounded-lg border-l-4 border-[#0188fb] inline-flex items-center">
                  <span className="text-[#0188fb] mr-2">🛠️</span>
                  Tools
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      name: "Git",
                      icon: "./images/skills/git-logo.png",
                      level: 85,
                    },
                    {
                      name: "GitHub",
                      icon: "./images/skills/github-logo-mob.png",
                      level: 90,
                    },
                    {
                      name: "VS Code",
                      icon: "./images/skills/vscode-logo.png",
                      level: 95,
                    },
                    {
                      name: "Postman",
                      icon: "./images/skills/postman-logo.png",
                      level: 70,
                    },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-black/80 to-black/60 border border-[#0188fb]/20 hover:border-[#0188fb]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(1,136,251,0.3)] group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-2 bg-black/30 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={skill.icon}
                          alt={`${skill.name}`}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                      {/* Skill level bar */}
                      <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#0188fb]/70 to-[#0188fb] rounded-full transition-all duration-700 ease-out group-hover:opacity-100 opacity-70"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills - Card Style with different icon */}
              <div className="skill-category relative">
                <h3 className="text-xl font-semibold mb-4 px-4 py-2 bg-gradient-to-r from-[#0188fb]/25 to-[#0188fb]/7 rounded-lg border-l-4 border-[#0188fb] inline-flex items-center">
                  <span className="text-[#0188fb] mr-2">⚙️</span>
                  Back-end
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      name: "C++",
                      icon: "./images/skills/c++-logo-mob.png",
                      level: 80,
                    },
                    {
                      name: "Java",
                      icon: "./images/skills/java-logo-mob.png",
                      level: 75,
                    },
                    {
                      name: "Python",
                      icon: "./images/skills/python-logo.png",
                      level: 80,
                    },
                    {
                      name: "NodeJS",
                      icon: "./images/skills/node-logo.png",
                      level: 65,
                    },
                    {
                      name: "ExpressJS",
                      icon: "./images/skills/express-logo.png",
                      level: 65,
                    },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-black/80 to-black/60 border border-[#0188fb]/20 hover:border-[#0188fb]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(1,136,251,0.3)] group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-2 bg-black/30 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={skill.icon}
                          alt={`${skill.name}`}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                      {/* Skill level bar */}
                      <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#0188fb]/70 to-[#0188fb] rounded-full transition-all duration-700 ease-out group-hover:opacity-100 opacity-70"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database Skills - New section with database icon */}
              <div className="skill-category relative">
                <h3 className="text-xl font-semibold mb-4 px-4 py-2 bg-gradient-to-r from-[#0188fb]/25 to-[#0188fb]/7 rounded-lg border-l-4 border-[#0188fb] inline-flex items-center">
                  <span className="text-[#0188fb] mr-2">🗄️</span>
                  Database
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      name: "MySQL",
                      icon: "./images/skills/mysql-logo-mob.png",
                      level: 85,
                    },
                    {
                      name: "MongoDB",
                      icon: "./images/skills/mongo-logo.png",
                      level: 80,
                    },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-black/80 to-black/60 border border-[#0188fb]/20 hover:border-[#0188fb]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(1,136,251,0.3)] group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-2 bg-black/30 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={skill.icon}
                          alt={`${skill.name}`}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                      {/* Skill level bar */}
                      <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#0188fb]/70 to-[#0188fb] rounded-full transition-all duration-700 ease-out group-hover:opacity-100 opacity-70"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="floating-element circle3"></div>
        <div className="floating-element circle4"></div>
        <div className="floating-element circle5"></div>
        <div className="floating-element circle6"></div>
        <div className="floating-element square3"></div>
        <div className="floating-element square4"></div>
        <div className="floating-element square5"></div>
        <div className="floating-element square6"></div>
      </div>
    );
  } 

  return(
    <div>
      <div className="bg-1 relative pl-20 pr-20">
        {!transitioning && !isJumping && (
          <>
            <img src="./images/keys/right-arrow.svg" alt="right-arrow" className="right-arrow2" />
            <img src="./images/keys/right-arrow.svg" alt="left-arrow" className="left-arrow2" />
            <img src="./images/keys/space-bar.svg" alt="space-bar" className="space-bar" />
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
                <h2 className="text-5xl -mt-5 mb-2">SKILLS</h2>
                <div className="skills">
                  <div className="frontend">
                    <h1>Front-end</h1>
                    <ul>
                      <li>HTML<img src="./images/skills/html-logo.png" alt="html-logo" className="max-w-9 ml-2"/></li>
                      <li>CSS<img src="./images/skills/css-logo.png" alt="css-logo" className="max-w-11 ml-2"/></li>
                      <li>JavaScript<img src="./images/skills/js-logo.png" alt="js-logo" className="max-w-10 ml-2"/></li>
                      <li>ReactJS<img src="./images/skills/react-logo.png" alt="react-logo" className="max-w-9 ml-2 mt-1"/></li>
                      <li>NextJS<img src="./images/skills/next-logo.png" alt="next-logo" className="max-w-9 ml-2 "/></li>
                    </ul>
                  </div>
                  <div className="tools">
                    <h1>Tools</h1>
                    <ul>
                      <li>Git<img src="./images/skills/git-logo.png" alt="git-logo" className="max-w-8 ml-2 mt-1"/></li>
                      <li>GitHub<img src="./images/skills/github-logo.png" alt="github-logo" className="max-w-16"/></li>
                      <li>VS Code<img src="./images/skills/vscode-logo.png" alt="vscode-logo" className="max-w-8 ml-3 mt-1"/></li>
                      <li>Postman<img src="./images/skills/postman-logo.png" alt="postman-logo" className="max-w-8 ml-3 mt-1"/></li>
                    </ul>
                  </div>
                  <div className="backend">
                    <h1>Back-end</h1>
                    <ul>
                      <li>C++<img src="./images/skills/c++-logo.png" alt="c++-logo" className="max-w-20 -mt-2"/></li>
                      <li>Java<img src="./images/skills/java-logo.png" alt="java-logo" className="max-w-10 -mt-2 ml-3"/></li>
                      <li>NodeJs<img src="./images/skills/node-logo.png" alt="node-logo" className="max-w-9 ml-3"/></li>
                      <li>ExpressJs<img src="./images/skills/express-logo.png" alt="express-logo" className="max-w-9 ml-3 mt-3"/></li>
                      <li>Python<img src="./images/skills/python-logo.png" alt="python-logo" className="max-w-9 ml-3"/></li>
                    </ul>
                  </div>
                  <div className="database">
                    <h1>Database</h1>
                    <ul>
                      <li>MySQL<img src="./images/skills/mysql-logo.png" alt="mysql-logo" className="max-w-14 ml-1"/></li>
                      <li>MongoDB<img src="./images/skills/mongo-logo.png" alt="mongo-logo" className="max-w-9 ml-3"/></li>
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
                <h2 className=" text-5xl -mt-4">EDUCATION</h2>
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