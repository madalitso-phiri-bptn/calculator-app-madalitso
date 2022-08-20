import React, { FC, useState } from "react";
import styled from "styled-components";
import { useCalculator } from "../../hooks/useCalculator";

interface LabelProps {
  label_text: string | undefined;
}
const Label = styled.p`
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
  font-family: Work + Sans;
  background-color: transparent;
  text-align: end;
  z-index: 2;
`;
export const CalculatorOperationLabel: FC<LabelProps> = ({ label_text }) => {
  return <Label>{label_text ? label_text : ""}</Label>;
};
