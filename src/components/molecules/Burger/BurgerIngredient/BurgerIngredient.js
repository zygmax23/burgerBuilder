import React from "react";
import * as BurgerIngredients from "./BurgerIngredientsStyled";
import PropTypes from "prop-types";

const BurgerIngredient = ({ ingredientType }) => {
  const DynamicIngredient = BurgerIngredients[ingredientType];

  return <DynamicIngredient />;
};

BurgerIngredient.propTypes = {
  ingredientType: PropTypes.string.isRequired,
};

export default BurgerIngredient;
