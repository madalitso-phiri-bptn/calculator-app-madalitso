import React from "react";
import styled from "styled-components";
import { CalculatorContext } from "../../state/context";

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
export const CalculatorDisplayInput = () => {
  const { calculator_input, current_total, append_input } =
    React.useContext(CalculatorContext);
  const input_value =
    calculator_input != ""
      ? calculator_input
      : current_total
      ? current_total
      : "";

  return (
    <Input
      value={input_value}
      type="text"
      placeholder="0"
      pattern={"(^|[(/*+-])(-(?:d*.)?d+)|[()/*+-]|(?:d*.)?d+/g"}
      onChange={(e) => append_input(e.target.value)}
    />
  );
};
