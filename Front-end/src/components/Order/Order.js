import React from "react";
import Button from "./../UI/Button/Button";
import classes from "./Transactions.module.css";
const Order = () => {
  return (
    <div className={classes.Transaction}>
      <h1>Order Details</h1>
      <div className={classes.Transactional}>
        <div className={classes.Detail}>
          <span>Project Name:</span>
          <div className={classes.DetailBox}>Example project 3</div>
        </div>
        <div classNameclassName={classes.DetailBox}>
          <span>Price:</span>
          <div className={classes.DetailBox}>US $119.99</div>
        </div>
      </div>
      <Button btnType="Success" style={{ float: "right" }}>
        {" "}
        Check out with PayPal
      </Button>
    </div>
  );
};

export default Order;
