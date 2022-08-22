export enum Tokens {
  VALUE = "value",
  OPERATOR = "operator",
  DECIMAL = "decimal",
  BRACKET = "bracket",
}
interface PrecedenceInterface {
  [key: string]: number;
}
export const identify_token = (value: string) => {
  switch (value) {
    case "+":
      return { value: "+", type: Tokens.OPERATOR };
    case "-":
      return { value: "-", type: Tokens.OPERATOR };
    case "/":
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
  const lastchar = current_input_array[current_input_array.length - 1];
};

export const evaluate_rpn = (rpn: (string | number | undefined)[]) => {
  console.log("rpn", rpn);
  const stack: (string | number)[] = [];

  for (let scanner = 0; scanner < rpn.length; scanner++) {
    const token = rpn[scanner];

    if (/[+\-/*^]/.test(token as string)) {
      stack.push(operate(token as string, stack));
      continue;
    }

    // token is a number
    stack.push(token as number);
  }

  return stack.pop();
};

function operate(operator: string, stack: (string | number)[]) {
  const a = stack.pop() as number;
  const b = stack.pop() as number;

  switch (operator) {
    case "+":
      return b + a;
    case "-":
      return b - a;
    case "*":
      return b * a;
    case "/":
      return b / a;
    case "^":
      return Math.pow(b, a);
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
}
export const toRPN = (tokens: (string | number | undefined)[]) => {
  const operators: string[] = [];
  const out = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (typeof token === "number") {
      out.push(token);
      continue;
    }

    if (/[+\-/*<>=^]/.test(token as string)) {
      while (shouldUnwindOperatorStack(operators, token as string)) {
        out.push(operators.pop());
      }
      operators.push(token as string);
      continue;
    }

    if (token === "(") {
      operators.push(token);
      continue;
    }

    if (token === ")") {
      while (operators[operators.length - 1] !== "(") {
        out.push(operators.pop());
      }
      operators.pop();
      continue;
    }

    throw new Error(`Unparsed token ${token} at position ${i}`);
  }

  for (let i = operators.length - 1; i >= 0; i--) {
    out.push(operators[i]);
  }

  return out;
};

const precedence: PrecedenceInterface = { "*": 2, "/": 2, "+": 1, "-": 1 };

function shouldUnwindOperatorStack(operators: string[], nextToken: string) {
  if (operators.length === 0) {
    return false;
  }

  const lastOperator = operators[operators.length - 1];
  return precedence[lastOperator] >= precedence[nextToken];
}

export const isFloat = (value: string | number) => {
  if (
    typeof value === "number" &&
    !Number.isNaN(value) &&
    !Number.isInteger(value)
  ) {
    return true;
  }

  return false;
};
