import React, { useState, useEffect } from "react";
import Toolbar from "components/organisms/Navigation/Toolbar/Toolbar";
import BurgerBuilderView from "views/BurgerBuilderView";
import styled from "styled-components";
import BackDrop from "components/atoms/Backdrop/Backdrop";
import SideDrawer from "components/organisms/SideDrawer/SideDrawer";
import CheckoutView from "../views/CheckoutView";
import { Route } from "react-router-dom";
import OrdersView from "views/OrdersView";

const StyledLayout = styled.div`
  margin-top: 72px;
`;

const MainTemplate = ({ children }) => {
  const [backDropOpen, setBackDropOpen] = useState(true);
  const [isSideDrawerVisible, setSideDrawerVisibility] = useState(false);

  const handleSideBarToggle = () => {
    setSideDrawerVisibility(!isSideDrawerVisible);
  };

  const sideDrawerClosedHandler = () => {
    setSideDrawerVisibility(false);
  };

  return (
    <>
      <Toolbar toggleSideDrawerFn={handleSideBarToggle} />
      <SideDrawer open={isSideDrawerVisible} />
      <BackDrop show={isSideDrawerVisible} hideClickFn={sideDrawerClosedHandler} />
      <StyledLayout>
        <Route path="/" exact component={BurgerBuilderView} />
        <Route path="/checkout" component={CheckoutView} />
        <Route path="/orders" component={OrdersView} />
        <main>{children}</main>
      </StyledLayout>
    </>
  );
};

export default MainTemplate;
