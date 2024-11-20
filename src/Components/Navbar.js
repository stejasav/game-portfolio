import React, { useEffect } from "react";
import {gsap} from "gsap";
import { useTypewriter, Cursor} from "react-simple-typewriter";

export default function Navbar(){
  useEffect(() => {
    gsap.fromTo(".logo", {
        opacity:0,
        scale:0.2
      },
      { 
        opacity:1,
        duration: 1,
        scale:1,
        delay: 0.5,
        ease: "power3.out" 
      }
    );
    gsap.fromTo(".menu a", 
      { 
        opacity: 0,
        scale: 0.2
      },
      { 
        opacity: 1,
        scale: 1,
        duration: 0.7,
        delay: 0.5,
        stagger: 0.1,
        ease: "power3.out"
      }
    );
    gsap.fromTo(".specifications", 
      { 
        opacity: 0,
        scale: 0.2
      },
      { 
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.55,
        ease: "power3.out"
      }
    );
  }, []);

  const [text] = useTypewriter({
    words : ['Web Developer', 'Full Stack Developer' , 'Front-end Engineer', 'Software Engineer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60
  });

  return(
    <nav className="p-3 navbar">

      <img src="./images/logo1.png" alt="logo" className=" ml-6 mt-3 w-96 logo" />

      {/* <div className=" text-white flex menu">
        <a href="#about"> About </a>
        <a href="#skill"> Skills </a>
        <a href="#projects"> Projects </a>
        <a href="#contact"> Contact </a>
      </div> */}

      <div className="specifications">
        <p className=" text-white">
          I'm a,
        </p>
        <h1>
          <span className="text-4xl">
            {text}
          </span>
          <span className="font-bold text-4xl">
            <Cursor/>
          </span>
        </h1>
      </div>

    </nav>
  )
}