import { inputAdornmentClasses } from "@mui/material";

export function tokenize(input: string) {
  var m,
    tokens = [],
    rex = /(^|[(\/*+-])(-(?:\d*\.)?\d+)|[()\/*+-]|(?:\d*\.)?\d+/g;

  while ((m = rex.exec(input))) {
    if (m[1]) {
      let token_1: string | number = m[1];
      let token_2: string | number = m[2];
      if (parseFloat(m[1])) {
        token_1 = parseFloat(token_1);
      }
      if (parseFloat(m[2])) {
        token_2 = parseFloat(token_2);
      }
      tokens.push(token_1, token_2);
    } else {
      let token_1: string | number = m[0];
      if (parseFloat(m[0])) {
        token_1 = parseFloat(token_1);
      }
      tokens.push(token_1);
    }
  }
  return tokens;
}
