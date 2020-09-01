import React from "react";
import styled from "styled-components";

const StyledSideDrawerToggle = styled.div`
  z-index: 999;
`;

const SideDrawerToggle = (props) => (
  <StyledSideDrawerToggle onClick={props.toggleSideDrawerFn}>MENU</StyledSideDrawerToggle>
);

export default SideDrawerToggle;
