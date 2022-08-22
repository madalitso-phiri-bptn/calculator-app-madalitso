import React, { Dispatch, SetStateAction } from "react";
import { Operation } from "../../../hooks/useCalculator";

interface CalculatorContextInterface {
  calculator_input: string;
  current_total: string;
  previous_operation: string;
  set_previous_operation: Dispatch<SetStateAction<string>>;
  set_calculator_input: Dispatch<SetStateAction<string>>;
  set_current_total: Dispatch<SetStateAction<string>>;
  evaluate: () => void;
  del_character: () => void;
  append_input: (value: string) => void;
}
export const CalculatorContext =
  React.createContext<CalculatorContextInterface>(
    {} as CalculatorContextInterface
  );
