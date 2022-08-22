import { useState } from "react";
import { identify_token, Tokens, vet_tokens } from "../utilities";
import { tokenize } from "../utilities/tokenize";

export interface Operation {
  operation_label: string;
}
export const useCalculator = () => {
  const [previous_operation, set_previous_operation] =
    useState<Operation | null>(null);
  const [current_total, set_current_total] = useState<string>("");
  const [calculator_input, set_calculator_input] = useState<string>("");
  const append_input = (value: string) => {
    console.log("appending value", value);
    set_calculator_input((prev: string) => {
      const identified_token = identify_token(value);
      if (!identified_token) return prev;
      if (identified_token.type === Tokens.DECIMAL) {
        const tokenized_array = tokenize(calculator_input);
        const calculator_input_array = calculator_input.split("");
        const last_char =
          calculator_input_array[calculator_input_array.length - 1];
        const last_token = tokenized_array[tokenized_array.length - 1];
        console.log("last_token", last_token);
        if (last_token.includes(".") || last_char === ".") return prev;
      } else if (identified_token.type === Tokens.BRACKET) {
        const calculator_input_array = calculator_input.split("");
        const last_char =
          calculator_input_array[calculator_input_array.length - 1];
        const last_char_token = identify_token(last_char);
        if (
          (last_char_token as { value: string; type: Tokens }).type ===
          identified_token.type
        )
          return prev;
      } else if (identified_token.type === Tokens.OPERATOR) {
        const calculator_input_array = calculator_input.split("");
        if (identified_token.value === "-") {
          if (calculator_input_array.length > 1) {
            console.log("input is -");
            const last_char =
              calculator_input_array[calculator_input_array.length - 1];
            const second_last_char =
              calculator_input_array[calculator_input_array.length - 2];
            const last_char_identified_token = identify_token(last_char);
            const second_last_char_identified_token =
              identify_token(second_last_char);
            if (
              last_char_identified_token &&
              second_last_char_identified_token &&
              last_char_identified_token.type === Tokens.OPERATOR &&
              second_last_char_identified_token.type === Tokens.OPERATOR
            )
              return prev;
          }
        } else {
          const calculator_input_array = calculator_input.split("");
          const last_char =
            calculator_input_array[calculator_input_array.length - 1];
          const last_char_token = identify_token(last_char);
          if (
            (last_char_token as { value: string; type: Tokens }).type ===
            identified_token.type
          )
            return prev;
        }
      }
      // const vetted = vet_tokens(calculator_input, value);
      // if (vetted) {
      //   return prev + value;
      // }
      return prev + value;
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
    previous_operation,
    set_previous_operation,
    del_character,
    evaluate,
  };
};
