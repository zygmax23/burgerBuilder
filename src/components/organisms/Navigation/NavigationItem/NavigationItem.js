import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavigationItem = styled.li`
  margin: 0px;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;

  @media (max-width: 600px) {
    margin: 10px 0;
    width: 100%;
    display: block;
  }
`;

const StyledA = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 16px 10px;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
  display: block;

  :hover,
  :active {
    background-color: #8f5c2c;
    border-bottom: 4px solid #40a4c8;
    color: white;
  }

  &.active {
    border-bottom: 4px solid #40a4c8;
  }

  @media (max-width: 600px) {
    :hover,
    :active {
      border: none;
    }
    color: #8f5c2c;
    width: 100%;
    padding: 10px;
    border: 0;
  }
`;

const NavigationItem = (props) => (
  <StyledNavigationItem>
    <StyledA to={props.link}>{props.children}</StyledA>
  </StyledNavigationItem>
);

export default NavigationItem;
