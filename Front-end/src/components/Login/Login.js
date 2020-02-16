import React from "react";

import Button from "../UI/Button/Button";
import classes from "./Login.module.css";

import Cauldron from "../../assets/images/Cauldron.jpg";

const Login = () => {
  return (
    <div className={classes.Login}>
      <div>
        <div>
          <span>
            {" "}
            Database Name:
            <input maxLength="20" size="20" type="text" />
          </span>
          <br />
          <span>
            {" "}
            Description:
            <input maxLength="250" size="40" type="text" />
          </span>
          <p>
            <Button>Login</Button>
          </p>
          <p>
            <a href="#">Forgot password?</a>
          </p>
          <p>
            <a href="#">Are you new?</a>
          </p>
        </div>

        <div>
          <img src={Cauldron}></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
