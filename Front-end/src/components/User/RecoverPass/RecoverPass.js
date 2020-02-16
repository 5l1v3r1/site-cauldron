import React from "react";
import Button from "./../../UI/Button/Button";
import classes from "../User.module.css";
const RecoverPass = () => {
  return (
    <div className={classes.User}>
      <p>
        <em>
          Enter your registered email, a pin will be sent to you. Once the pin
          is validated, you can generate a new password.
        </em>
      </p>
      <br />

      <p style={{ display: "inline" }}>
        Email:
        <input type="text" placeholder="Email" size="20" />
        &nbsp;
        <Button btnType="Information">Send pin</Button>
      </p>
      <p>
        Pin:
        <input type="text" placeholder=" - - - - " size="8" maxlength="4" />
      </p>
      <p>
        New Password :
        <input type="text" placeholder=" ********* " />
      </p>
      <p>
        Confirm Password:
        <input type="text" placeholder=" ******** " />
      </p>
      <Button btnType="Success">Set new password</Button>
    </div>
  );
};

export default RecoverPass;
