import React from "react";
import styled from "styled-components";

const StyledOrder = styled.div`
  width: 80%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`;

const Order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({ name: ingredientName, amout: props.ingredients[ingredientName] });
  }

  const ingredientOutput = ingredients.map((ing) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ing.name}
      >
        {ing.name} ({ing.amout})
      </span>
    );
  });
  return (
    <StyledOrder>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </StyledOrder>
  );
};

export default Order;
