import React from "react";
import * as BuildControlStyle from "./BuildControlStyle";

const BuildControl = (props) => (
  <BuildControlStyle.BuildControl>
    <BuildControlStyle.StyledLabel>{props.label}</BuildControlStyle.StyledLabel>
    <BuildControlStyle.LessBtn onClick={props.removeFn} disabled={props.disabled}>
      Less
    </BuildControlStyle.LessBtn>
    <BuildControlStyle.MoreBtn onClick={props.addFn}>More</BuildControlStyle.MoreBtn>
  </BuildControlStyle.BuildControl>
);

export default BuildControl;
