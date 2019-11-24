import React from "react";

import "../styles/Body.css";
function info() {
  return (
    <div class="body">
      <h1>User Information</h1>
      <p>
        Name: <input type="text" placeholder=" User Name" />
      </p>
      <p style={{ display: "inline" }}>
        Email:
        <input type="text" placeholder=" Current Email / New Email" size="35" />
        &nbsp;
        <button>Change Email</button>
      </p>
      <p>
        Code:
        <input type="text" placeholder=" - - - - " size="8" maxlength="4" />
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
      <button>Update</button>
    </div>
  );
}

export default info;
