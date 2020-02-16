import React from "react";

import Button from "./../UI/Button/Button";
import classes from "./Preview.module.css";

import Cross from "../images/eliminar.png";
import Database from "../images/Database.PNG";

const Preview = () => {
  return (
    <div className={classes.Preview}>
      <h2>Preview</h2>
      <img className={classes.Close} src={Cross} alt="Exit"></img>

      <div>
        <img
          className={classes.ImgDatabase}
          src={Database}
          alt="Database example"
        ></img>
        <span>
          Proyect Name:
          <p>Proyect number one</p>
          Status:
          <p>Ready</p>
          <Button>Editing</Button>
          <br />
          <Button>Download</Button>
        </span>
      </div>
    </div>
  );
};

export default Preview;
