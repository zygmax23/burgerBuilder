import React, { useState, useEffect } from "react";
import CheckoutSummary from "components/organisms/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactDataView from "views/ContactDataView";

const Checkout = (props) => {
  const [ingredients, setIngredients] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const ingredientsFromQuery = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredientsFromQuery[param[0]] = +param[1];
      }
    }
    setTotalPrice(price);
    setIngredients(ingredientsFromQuery);
  }, []);

  const handleCheckoutCancelled = () => {
    console.log("go back not working");
    props.history.goBack();
  };

  const handleCheckoutContinued = () => {
    console.log(props.match.path + "/contact-data");
    props.history.replace("/checkout/contact-data");
  };

  return (
    <div>
      <CheckoutSummary
        checkoutCancelled={handleCheckoutCancelled}
        checkoutContinued={handleCheckoutContinued}
        ingredients={ingredients}
      />
      <Route
        path={props.match.path + "/contact-data"}
        render={(props) => (
          <ContactDataView ingredients={ingredients} price={totalPrice} {...props} />
        )}
      />
    </div>
  );
};

export default Checkout;
