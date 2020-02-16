import React from "react";

import "../styles/Transactions.css";
function order() {
  return (
    <div class="transaction">
      <h1>Order Details</h1>
      <div class="transactional">
        <div class="detail">
          <span>Project Name:</span>
          <div class="detailBox">Example project 3</div>
        </div>
        <div class="detail">
          <span>Price:</span>
          <div class="detailBox">US $119.99</div>
        </div>
      </div>
      <button style={{ float: "right" }}> Check out with PayPal</button>
    </div>
  );
}

export default order;
