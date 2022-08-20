import React, { FC, SetStateAction, useState } from "react";
import styled from "styled-components";
import { useCalculator } from "../../hooks/useCalculator";

const Input = styled.input`
  border: 0;
  width: 100%;
  outline: 0;
  font-size: 2rem;
  font-weight: 500;
  font-family: Work + Sans;
  background-color: transparent;
  text-align: end;
  z-index: 2;
`;
export const CalculatorDisplayInput: FC<{
  calculator_input: string;
  set_calculator_input: React.Dispatch<SetStateAction<string>>;
  current_total: string;
}> = ({ calculator_input, set_calculator_input, current_total }) => {
  const input_value =
    calculator_input != ""
      ? calculator_input
      : current_total
      ? current_total
      : 0;
  return (
    <Input
      value={input_value}
      onChange={(e) => set_calculator_input(e.target.value)}
    />
  );
};
