import React from "react";

import "../styles/Transactions.css";
function details() {
  return (
    <div class="transaction">
      <h1>Transaction Receipt</h1>
      <div class="transactional">
        <p>
          Transaction Information: <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit fames
          parturient pharetra, vulputate suspendisse dictumst vivamus mi tortor
          libero sociosqu quam, dui commodo massa leo hendrerit aptent non eget
          magnis.
        </p>
        <p>
          Billing Information: <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit fames
          parturient pharetra, vulputate suspendisse dictumst vivamus mi tortor
          libero sociosqu quam, dui commodo massa leo hendrerit aptent non eget
          magnis.
        </p>
        <div class="detail">
          <span>Project Name:</span>
          <div class="detailBox">Example project 3</div>
        </div>
        <div class="detail">
          <span>Price:</span>
          <div class="detailBox">US $119.99</div>
        </div>
      </div>
    </div>
  );
}

export default details;
