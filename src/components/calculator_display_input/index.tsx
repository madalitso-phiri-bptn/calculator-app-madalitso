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
  const {
    set_calculator_input,
    calculator_input,
    current_total,
    del_character,
    append_input,
  } = React.useContext(CalculatorContext);
  const input_value =
    calculator_input != ""
      ? calculator_input
      : current_total
      ? current_total
      : "";
  const handle_key_down = (e) => {
    if (e.keyCode === 8) {
      e.preventDefault();
      del_character();
    }

   
  };

  const handle_change = (e) => {
    const input_array = e.target.value.split("");
    const input = input_array[input_array.length - 1];
    append_input(input);
  };
  return (
    <Input
      value={input_value}
      placeholder="0"
      onChange={(e) => handle_change(e)}
      onKeyDown={handle_key_down}
    />
  );
};
