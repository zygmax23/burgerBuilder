import React, { useState, useEffect } from "react";
import Burger from "components/molecules/Burger/Burger";
import BuildControls from "components/organisms/BuildControls/BuildControls";
import Modal from "components/organisms/Modal/Modal";
import OrderSummary from "components/organisms/OrderSummary/OrderSummary";
import axios from "axios";
import Spinner from "components/atoms/Spinner/Spinner";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const BurgerBuilderView = (props) => {
  const [ingredientsState, setIngredientState] = useState(null);
  const [priceState, setPriceState] = useState(4.0);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("/Ingredients.json")
      .then((response) => {
        setIngredientState(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  const updatePurchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    setPurchasable(sum > 0);
    console.log("update purchasable " + sum);
  };

  const addIngredientHandler = (type) => {
    const oldCount = ingredientsState[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredientsState,
    };
    updatedIngredients[type] = updatedCount;

    setIngredientState(updatedIngredients);

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = priceState;
    const newPrice = oldPrice + priceAddition;
    setPriceState(newPrice);

    updatePurchasable(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = ingredientsState[type];

    if (oldCount <= 0) return;

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredientsState,
    };
    updatedIngredients[type] = updatedCount;

    setIngredientState(updatedIngredients);

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = priceState;
    const newPrice = oldPrice - priceDeduction;
    setPriceState(newPrice);

    updatePurchasable(updatedIngredients);
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancelHander = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in ingredientsState) {
      queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(ingredientsState[i]));
    }
    queryParams.push("price=" + priceState);
    const queryString = queryParams.join("&");
    props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  const disabledInfo = {
    ...ingredientsState,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let burger = error ? "Ingredients can't be loaded" : <Spinner />;
  let orderSummary = null;

  if (ingredientsState) {
    burger = (
      <>
        <Burger ingredients={ingredientsState} />
        <BuildControls
          addIngredientFn={addIngredientHandler}
          removeIngredientFn={removeIngredientHandler}
          disabled={disabledInfo}
          price={priceState}
          purchasable={purchasable}
          ordered={purchaseHandler}
        />
      </>
    );

    orderSummary = (
      <OrderSummary
        ingredients={ingredientsState}
        purchaseCancelledFn={purchaseCancelHander}
        purchaseContinuedFn={purchaseContinueHandler}
        price={priceState}
      />
    );
  }

  if (loading) {
    orderSummary = <Spinner />;
  }

  return (
    <>
      <Modal show={purchasing} closeModalFn={purchaseCancelHander}>
        {orderSummary}
      </Modal>
      {burger}
    </>
  );
};

export default withErrorHandler(BurgerBuilderView, axios);
