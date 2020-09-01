import React from "react";
import Logo from "components/atoms/Logo/Logo";
import NavigationItems from "components/organisms/Navigation/NavigationItems/NavigationItems";
import styled from "styled-components";

const StyledSideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
`;

const SideDrawer = (props) => {
  return (
    <StyledSideDrawer open={props.open} onClick={props.closeSideDrawerFn}>
      <Logo height="11%" />
      <nav>
        <NavigationItems />
      </nav>
    </StyledSideDrawer>
  );
};

export default SideDrawer;
