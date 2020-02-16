import React from "react";
import Button from "./../../UI/Button/Button";

import "../User.module.css";
import classes from "../User.module.css";
const RegisterUser = () => {
  return (
    <div className={classes.User}>
      <h1>Register to start making projects!</h1>
      <p>
        Name: <input type="text" placeholder=" User Name" />
      </p>
      <p style={{ display: "inline" }}>
        Email:
        <input type="text" placeholder=" Email" size="20" />
        &nbsp;
        <Button btnType="Information">Verify Email</Button>
      </p>
      <p>
        Pin:
        <input type="text" placeholder=" _ _ _ _ " size="8" maxLength="4" />
      </p>
      <p>
        Cellphone: <input type="text" placeholder=" cellphone" />
      </p>
      <br />
      <h5>
        <em>Make sure to pick a strong password</em>
      </h5>
      <p>
        Password :
        <input type="text" placeholder=" ********* " />
      </p>
      <p>
        Confirm Password:
        <input type="text" placeholder=" ******** " />
      </p>
      <Button btnType="Success">Register!</Button>
    </div>
  );
};

export default RegisterUser;
