import React from "react";
import styled from "styled-components";
import Burger from "components/molecules/Burger/Burger";
import Button from "components/atoms/Button/Button";

const StyledWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin: auto;
`;

const StyledCheckoutSummart = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

const CheckoutSummary = (props) => {
  return (
    <StyledCheckoutSummart>
      <h1>We hope it tastes well!</h1>
      <StyledWrapper>
        <Burger ingredients={props.ingredients} />
      </StyledWrapper>
      <Button danger onClick={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button success onClick={props.checkoutContinued}>
        CONTINUE
      </Button>
    </StyledCheckoutSummart>
  );
};

export default CheckoutSummary;
