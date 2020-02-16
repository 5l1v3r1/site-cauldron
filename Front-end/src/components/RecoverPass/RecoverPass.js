import React from "react";

import "../styles/User.css";
function recover() {
  return (
    <div class="user">
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
        <button>Send pin</button>
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
      <button style={{ backgroundColor: "#02b449cc" }}>Set new password</button>
    </div>
  );
}

export default recover;
