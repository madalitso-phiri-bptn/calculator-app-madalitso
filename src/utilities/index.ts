export enum Tokens {
  VALUE = "value",
  OPERATOR = "operator",
  DECIMAL = "decimal",
  BRACKET = "bracket",
}
export const identify_token = (value: string) => {
  switch (value) {
    case "+":
      return { value: "+", type: Tokens.OPERATOR };
    case "-":
      return { value: "-", type: Tokens.OPERATOR };
    case "/" :
      return { value: "/", type: Tokens.OPERATOR };
    case "*":
      return { value: "*", type: Tokens.OPERATOR };
    case "(":
      return { value, type: Tokens.BRACKET };
    case ")":
      return { value, type: Tokens.BRACKET };
    case ".":
      return { value, type: Tokens.DECIMAL };
    case value.match(/^[0-9]*$/)?.input:
      return { value, type: Tokens.VALUE };
    default:
      return false;
  }
};
export const vet_tokens = (current_input: string, new_char: string) => {
  const new_value_result = identify_token(new_char);
  const current_input_array = current_input.split("");
  const last_value_result =
    current_input_array.length >= 1
      ? identify_token(current_input_array[current_input_array.length - 1])
      : false;
  if (new_value_result) {
    if (new_value_result.type != Tokens.VALUE) {
      if (last_value_result) {
        if (last_value_result.type != new_value_result.type) {
          return true;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};
export const validate_input = (current_input: string, new_char: string) => {
  const current_input_array = current_input.split("");
  const lastchar = current_input_array[current_input_array.length - 1]

};
