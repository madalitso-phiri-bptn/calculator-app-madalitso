import React, { FC, useState } from "react";
import styled from "styled-components";
import { CalculatorContext } from "../../state/context";

const Label = styled.p`
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
  font-family: Work + Sans;
  background-color: transparent;
  text-align: end;
  z-index: 2;
`;
export const CalculatorOperationLabel = () => {
  const { previous_operation } = React.useContext(CalculatorContext);
  return (
    <Label>
      {previous_operation}
    </Label>
  );
};
