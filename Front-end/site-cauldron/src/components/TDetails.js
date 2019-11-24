import React from "react";

import "../styles/Transactions.css";
function details() {
  return (
    <div class="user">
      <h1>User Information</h1>
      <p>
        Name: <input type="text" placeholder=" User Name" />
      </p>
      <p style={{ display: "inline" }}>
        Email:
        <input type="text" placeholder=" Current Email / New Email" size="20" />
        &nbsp;
        <button>Change Email</button>
      </p>
      <p>
        Pin:
        <input type="text" placeholder=" - - - - " size="8" maxlength="4" />
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
      <button style={{ backgroundColor: "#02b449cc" }}>Update</button>
    </div>
  );
}

export default details;
