import React from "react";
import Cross from "../../assets/images/Close.png";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.About}>
      <h2>About Us</h2>
      <img src={Cross} alt="Exit"></img>
      <div>
        Hello There...
        <p>
          We would like to welcome you to our first draft for this project, as
          you probabably can tell we are still getting our heads around react,
          routing, and a huge etcetera.. but please, stay in touch!
        </p>
        <p style={{ textAlign: "right" }}>
          --The Site Cauldron team - Feb, 2020
        </p>
      </div>
    </div>
  );
};

export default About;
