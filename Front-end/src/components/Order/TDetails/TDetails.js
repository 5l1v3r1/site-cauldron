import React from "react";

import classes from "../Transactions.module.css";
const Details = () => {
  return (
    <div class={classes.Transaction}>
      <h1>Transaction Receipt</h1>
      <div class={classes.Transactional}>
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
        <div className={classes.Detail}>
          <span>Project Name:</span>
          <div className={classes.DetailBox}>Example project 3</div>
        </div>
        <div className={classes.Detail}>
          <span>Price:</span>
          <div className={classes.DetailBox}>US $119.99</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
