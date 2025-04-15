import React from "react";
import About from "../Components/About";
import Page1 from "../Components/Page1";
import Page2 from "../Components/Page2";
import Project from "../Components/Project";
import Contact from "../Components/Contact";
import FooterMobile from "../Components/FooterMobile";

export default function MainMobile() {
  return (
    <div className="bg-black min-h-screen min-w-full">
      <Page1 />
      <About />
      <Page2 />
      <Project />
      <Contact />
      <FooterMobile />
      <div className="floating-element circle7"></div>
      <div className="floating-element circle8"></div>
      <div className="floating-element square7"></div>
      <div className="floating-element square8"></div>
    </div>
  );
}
