import React from "react";

import "./Login.css";

import Cauldron from "../../assets/images/Cauldron.jpg";

function Login() {
  return (
    <div className="Login">
      <div className="row">
        <div className="column">
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
            <button>LogIn</button>
          </p>
          <p>
            <a href="#">Forgot password?</a>
          </p>
          <p>
            <a href="#">Are you new?</a>
          </p>
        </div>

        <div className="column">
          <img src={Cauldron}></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
