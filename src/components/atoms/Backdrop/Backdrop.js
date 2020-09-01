import React from "react";
import StyledBackdrop from "./BackdropStyle";

const Backdrop = (props) =>
  props.show ? <StyledBackdrop onClick={props.hideClickFn}></StyledBackdrop> : null;

export default Backdrop;
