import React from "react";
import styled from "styled-components";
import Logo from "components/atoms/Logo/Logo";
import NavigationItems from "components/organisms/Navigation/NavigationItems/NavigationItems";
import SideDrawerToggle from "components/organisms/SideDrawerToggle/SideDrawerToggle";

const StyledToolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

const StyledNav = styled.nav`
  height: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Toolbar = (props) => (
  <StyledToolbar>
    <SideDrawerToggle toggleSideDrawerFn={props.toggleSideDrawerFn} />
    <Logo height="80%" />
    <StyledNav>
      <NavigationItems />
    </StyledNav>
  </StyledToolbar>
);

export default Toolbar;
