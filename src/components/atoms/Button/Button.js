import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  ${(props) =>
    props.success &&
    css`
      color: #5c9210;
    `}

  ${(props) =>
    props.danger &&
    css`
      color: #944317;
    `}
    
    :disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const Button = (props) => <StyledButton {...props}>{props.children}</StyledButton>;

export default Button;
