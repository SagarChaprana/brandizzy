import React from "react";
import styled from "styled-components";

const Button = ({ children, isDisabled, className }) => {
  return (
    <Container isDisabled={isDisabled} disabled={isDisabled} className={className}>
      {children}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  all: unset;
  margin-right: 10px;
  padding: 15px 25px;
  border-radius: 10px;
  background-color: #6423dd;
  background-image: linear-gradient(135deg, #475ac3, #8b55d0);
  box-shadow: 14px 14px 35px 0 rgba(33, 38, 106, 0.1);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  text-align: center;

  :hover {
    -webkit-transform: translate(0, -2px);
    -ms-transform: translate(0, -2px);
    transform: translate(0, -2px);
  }

  cursor: ${({isDisabled}) => isDisabled ? "not-allowed" : "pointer" };

  &.disabled {
    background-color: grey;
  }

  a {
    all: unset;
  }

  &.full-width {
    display: block;
    width: 90.5%;
  }

  &.nav-btn {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  &.bg-dark {
    background-color: #212024;
    background-image: none;
  }

  &.card-btn {
    margin-right: 0px;
    padding: 10px 20px;
  }
`;
