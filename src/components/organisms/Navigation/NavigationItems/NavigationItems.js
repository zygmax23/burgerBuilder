import React from "react";
import styled from "styled-components";
import NavigationItem from "components/organisms/Navigation/NavigationItem/NavigationItem";

const StyledNavigationItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const NavigationItems = (props) => (
  <StyledNavigationItems>
    <NavigationItem exact link="/">
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </StyledNavigationItems>
);

export default NavigationItems;
