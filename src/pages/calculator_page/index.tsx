import { Box } from "@mui/system";
import styled from "styled-components";
import { CalculatorContainer, CalculatorDisplay } from "../../components";
import { CalculatorKeyPad } from "../../components/calculator_keypad";
import { useCalculator } from "../../hooks/useCalculator";

export const CalculatorPage = () => {
  const {
    previous_operation,
    calculator_keys,
    calculator_input,
    current_total,
    set_calculator_input,
    append_input,
    del_character,
    evaluate,
  } = useCalculator();
  return (
    <CalculatorContainer>
      <CalculatorDisplay
        previous_operation={previous_operation}
        calculator_input={calculator_input}
        current_total={current_total}
        set_calculator_input={set_calculator_input}
      />
      <CalculatorKeyPad
        append_input={append_input}
        calculator_keys={calculator_keys}
        del_character={del_character}
        evaluate={evaluate}
      />
    </CalculatorContainer>
  );
};
