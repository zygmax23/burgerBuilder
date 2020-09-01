import React from "react";
import LogoImage from "assets/burger-logo.png";
import styled from "styled-components";

const StyledLogo = styled.div`
  background-color: white;
  padding: 8px;
  height: ${(props) => props.height};
  box-sizing: border-box;
  border-radius: 5px;
`;

const StyledImage = styled.img`
  height: 100%;
`;

const Logo = (props) => (
  <StyledLogo height={props.height}>
    <StyledImage src={LogoImage} alt="MyBurger" />
  </StyledLogo>
);

export default Logo;
