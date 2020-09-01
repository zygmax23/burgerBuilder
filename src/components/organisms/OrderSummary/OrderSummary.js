import React, { useEffect } from "react";
import Button from "components/atoms/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span> {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button danger onClick={props.purchaseCancelledFn}>
        CANCEL
      </Button>
      <Button success onClick={props.purchaseContinuedFn}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;
