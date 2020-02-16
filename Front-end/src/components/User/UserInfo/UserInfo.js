import React from "react";
import Button from "./../../UI/Button/Button";

import classes from "../User.module.css";
const UserInfo = () => {
  return (
    <div className={classes.User}>
      <h1>User Information</h1>
      <p>
        Name: <input type="text" placeholder=" User Name" />
      </p>
      <p style={{ display: "inline" }}>
        Email:
        <input type="text" placeholder=" Current Email / New Email" size="20" />
        &nbsp;
        <Button btnType="Information">Change Email</Button>
      </p>
      <p>
        Pin:
        <input type="text" placeholder=" - - - - " size="8" maxLength="4" />
      </p>
      <p>
        Cellphone: <input type="text" placeholder=" cellphone" />
      </p>
      <h2>Change Password</h2>

      <p>
        Current Password :
        <input type="text" placeholder=" ********* " />
      </p>
      <p>
        Type your new Password:
        <input type="text" placeholder=" ******** " />
      </p>
      <Button btnType="Success">Update</Button>
    </div>
  );
};

export default UserInfo;
