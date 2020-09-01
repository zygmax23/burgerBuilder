import React from "react";
import * as BuildControlsStyled from "./BuildControlsStyle";
import BuildControl from "components/organisms/BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <BuildControlsStyled.BuildControls>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            addFn={() => props.addIngredientFn(ctrl.type)}
            removeFn={() => props.removeIngredientFn(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <BuildControlsStyled.StyledOrderButton disabled={!props.purchasable} onClick={props.ordered}>
        Order Now
      </BuildControlsStyled.StyledOrderButton>
    </BuildControlsStyled.BuildControls>
  );
};

export default BuildControls;
