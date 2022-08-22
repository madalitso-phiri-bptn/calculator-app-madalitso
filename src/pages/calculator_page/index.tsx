import { Box } from "@mui/system";
import styled from "styled-components";
import { CalculatorContainer, CalculatorDisplay } from "../../components";
import { CalculatorKeyPad } from "../../components/calculator_keypad";
import { useCalculator } from "../../hooks/useCalculator";
import { CalculatorContext } from "../../state/context";

export const CalculatorPage = () => {
  const {
    previous_operation,
    calculator_input,
    current_total,
    set_calculator_input,
    set_current_total,
    append_input,
    del_character,
    set_previous_operation,
    evaluate,
  } = useCalculator();
  return (
    <CalculatorContext.Provider
      value={{
        previous_operation,
        calculator_input,
        current_total,
        set_calculator_input,
        set_previous_operation,
        set_current_total,
        evaluate,
        del_character,
        append_input,
      }}
    >
      <CalculatorContainer>
        <CalculatorDisplay />
        <CalculatorKeyPad />
      </CalculatorContainer>
    </CalculatorContext.Provider>
  );
};
