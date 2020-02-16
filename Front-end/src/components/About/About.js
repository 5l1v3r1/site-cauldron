import React from "react";
import Cross from "../../assets/images/Close.png";
import "./About.css";

function about() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <img src={Cross} alt="Exit"></img>
      <div>
        Hello There...
        <p>
          We would like to welcome you to our first draft for this project, as
          you probabably can tell we are still getting our heads around react,
          but please stay in touch
        </p>
        <p style={{ textAlign: "right" }}>
          --The Site Cauldron team - Nov, 2019
        </p>
      </div>
    </div>
  );
}

export default about;
