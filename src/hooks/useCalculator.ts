import { useState } from "react";
import AppMathLib, { vet_tokens } from "../utilities";
import { tokenize } from "../utilities/tokenize";

export interface Operation {
  operation_label: string;
}
export const useCalculator = () => {
  const calculator_keys = [
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    {},
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    {},
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    {},
    { label: "Del", value: "del" },
    { label: "0", value: "0" },
    { label: ".", value: "." },
    { label: "=", value: "=" },
    { label: "÷", value: "÷" },
    { label: "*", value: "*" },
    { label: "-", value: "-" },
    { label: "+", value: "+" },
  ];

  const [previous_operation, set_previous_operation] =
    useState<Operation | null>(null);
  const [current_total, set_current_total] = useState<string>("");
  const [calculator_input, set_calculator_input] = useState<string>("");
  const append_input = (value: string) => {
    console.log("appending value", value);
    set_calculator_input((prev) => {
      const vetted = vet_tokens(calculator_input, value);
      if (vetted) {
        return prev + value;
      }
      return prev;
    });
  };
  const del_character = () => {
    if (calculator_input) {
      const character_array = calculator_input.split("");
      character_array.pop();
      set_calculator_input(character_array.join(""));
    }
  };

  const evaluate = () => {
    if (calculator_input) {
      console.log(tokenize(calculator_input));
    }
  };

  return {
    append_input,
    calculator_input,
    set_calculator_input,
    current_total,
    set_current_total,
    calculator_keys,
    previous_operation,
    set_previous_operation,
    del_character,
    evaluate,
  };
};
