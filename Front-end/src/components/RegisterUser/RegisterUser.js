import React from "react";

import "../UserInfo/User.css";
function register() {
  return (
    <div className="user">
      <h1>Register to start making projects!</h1>
      <p>
        Name: <input type="text" placeholder=" User Name" />
      </p>
      <p style={{ display: "inline" }}>
        Email:
        <input type="text" placeholder=" Email" size="20" />
        &nbsp;
        <button>Verify Email</button>
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
      <button style={{ backgroundColor: "#02b449cc" }}>Register!</button>
    </div>
  );
}

export default register;
