import React from "react";

export default function Page1({ transitioning }) {
  return (
    <div>
      <div className="bg-1 pl-24 pr-24 page1">
        <h1>Innovative, Skilled, and Tech-Savvy Engineer Building the Future with Code</h1>
        <p>Bringing Ideas to Life with Code, Crafting Scalable Solutions for Real-World Challenges</p>
        {!transitioning && (<img src="./images/keys/right-arrow.svg" alt="right-arrow" className="right-arrow" />)}
      </div>
      <div className="ground"></div>
    </div>
  );
}
