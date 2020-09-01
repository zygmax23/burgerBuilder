import React from "react";
import styled, { css } from "styled-components";

const StyledInputWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ${({ invalid, touched }) =>
    invalid &&
    touched &&
    css`
      border: 1px solid red;
      background-color: #fda49a;
    `}

  :focus {
    outline: none;
    background-color: #ccc;
  }
`;

const StyledTextArea = styled.textarea`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font-family: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;

  ${({ invalid, touched }) =>
    invalid &&
    touched &&
    css`
      border: 1px solid red;
      background-color: #fda49a;
    `}

  :focus {
    outline: none;
    background-color: #ccc;
  }
`;

const StyledOption = styled.option`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;

  ${({ invalid, touched }) =>
    invalid &&
    touched &&
    css`
      border: 1px solid red;
      background-color: #fda49a;
    `}

  :focus {
    outline: none;
    background-color: #ccc;
  }

  :focus {
    outline: none;
    background-color: #ccc;
  }
`;

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <StyledInput
          invalid={props.invalid}
          touched={props.touched}
          {...props}
          onChange={props.changed}
        />
      );
      break;

    case "textarea":
      inputElement = (
        <StyledTextArea
          invalid={props.invalid}
          touched={props.touched}
          {...props}
          onChange={props.changed}
        />
      );
      break;

    case "select":
      inputElement = (
        <select {...props} touched={props.touched} onChange={props.changed}>
          {props.options.map((option) => {
            return (
              <StyledOption invalid={props.invalid} value={option.value}>
                {option.displayValue}
              </StyledOption>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = <StyledInput {...props} />;
  }

  return (
    <StyledInputWrapper>
      <StyledLabel>{props.label}</StyledLabel>
      {inputElement}
    </StyledInputWrapper>
  );
};

export default Input;
