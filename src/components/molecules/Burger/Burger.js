import React, { useState } from "react";
import * as BurgerParts from "./BurgerStyled";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map((igkey) => {
      return [...Array(ingredients[igkey])].map((_, i) => {
        return (
          <BurgerIngredient
            ingredientType={igkey.charAt(0).toUpperCase() + igkey.slice(1)}
            key={igkey + i}
          />
        );
      });
    })
    .reduce((arr, current) => {
      return arr.concat(current);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <BurgerParts.BurgerWrapper>
      <BurgerParts.BreadTop>
        <BurgerParts.Seeds1 />
        <BurgerParts.Seeds2 />
      </BurgerParts.BreadTop>
      {transformedIngredients}
      <BurgerParts.BreadBottom />
    </BurgerParts.BurgerWrapper>
  );
};

export default Burger;
